import secrets
import logging
import time
from typing import Optional

from fastapi import (
    Depends,
    FastAPI,
    Form,
    Header,
    HTTPException,
    UploadFile,
    Query,
    Request,
)
from fastapi.responses import JSONResponse, FileResponse, StreamingResponse
from io import BytesIO
import zipfile
from pydantic import BaseModel
from sqlalchemy import Column, ForeignKey, Integer, LargeBinary, String, create_engine
from sqlalchemy.orm import declarative_base, relationship, sessionmaker

from settings import settings
from rate_limiter import rate_limiter
from file_handler import get_storage_handler, get_handler_for_type, S3Handler

engine = create_engine(settings.database_url, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class Business(Base):
    __tablename__ = "businesses"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    api_key = Column(String, unique=True, index=True)


class Document(Base):
    __tablename__ = "documents"
    id = Column(Integer, primary_key=True, index=True)
    account_id = Column(String, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id"))
    filename = Column(String)
    storage_type = Column(String, default="local")
    storage_key = Column(String, nullable=True)

    business = relationship("Business")


Base.metadata.create_all(bind=engine)

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

app = FastAPI(
    title="Document Receiver API",
    description="API for uploading and retrieving documents with pagination, optional S3 storage, rate limiting, logging, and improved error handling.",
)


@app.middleware("http")
async def log_and_rate_limit(request: Request, call_next):
    if not rate_limiter.is_allowed(request.client.host):
        return JSONResponse(status_code=429, content={"detail": "Rate limit exceeded"})
    start_time = time.time()
    logger.info(
        f"Request: {request.method} {request.url.path} from {request.client.host}"
    )
    response = await call_next(request)
    process_time = time.time() - start_time
    logger.info(f"Response time: {process_time}s")
    return response


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_current_business(
    api_key: str = Header(..., alias="x-api-key"), db=Depends(get_db)
):
    business = db.query(Business).filter(Business.api_key == api_key).first()
    if not business:
        raise HTTPException(status_code=401, detail="Invalid API Key")
    return business


@app.post(
    "/business/register",
    description="Register a new business and receive an API key for authentication.",
)
def register_business(name: str = Form(...), db=Depends(get_db)):
    api_key = secrets.token_hex(16)
    business = Business(name=name, api_key=api_key)
    db.add(business)
    db.commit()
    db.refresh(business)
    return {"business_name": name, "api_key": api_key}


@app.get(
    "/businesses",
    description="Get all registered businesses with their API keys and list of account IDs used by each.",
)
def get_businesses(db=Depends(get_db)):
    businesses = db.query(Business).all()
    result = []
    for b in businesses:
        account_ids = (
            db.query(Document.account_id)
            .filter(Document.business_id == b.id)
            .distinct()
            .all()
        )
        account_ids = [aid[0] for aid in account_ids]
        result.append(
            {
                "id": b.id,
                "name": b.name,
                "api_key": b.api_key,
                "account_ids": account_ids,
            }
        )
    return result


@app.post(
    "/document/upload",
    description="Upload a document for a specific account. Storage depends on environment: local for dev, cloud (S3/Cloudinary) for prod.",
)
def upload_document(
    account_id: str = Form(...),
    file: UploadFile = None,
    business: Business = Depends(get_current_business),
    db=Depends(get_db),
):
    if file is None:
        raise HTTPException(status_code=400, detail="File is required")

    try:
        handler = get_storage_handler(settings)
        metadata = handler.upload(file, account_id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")

    new_doc = Document(
        account_id=account_id,
        business_id=business.id,
        filename=file.filename,
        storage_type=metadata["storage_type"],
        storage_key=metadata["storage_key"],
    )
    db.add(new_doc)
    db.commit()
    db.refresh(new_doc)

    return JSONResponse(
        {
            "message": "Document uploaded successfully",
            "account_id": account_id,
            "business": business.name,
            "filename": file.filename,
            "storage": metadata["storage_type"],
        }
    )


@app.get(
    "/document/{account_id}",
    description="Retrieve documents for an account. Use query parameters for pagination (list view), single document download by ID, or all documents as a ZIP file. Requires API key for authentication.",
)
def get_documents(
    account_id: str,
    request: Request,
    business: Business = Depends(get_current_business),
    limit: int = Query(
        default=10, ge=1, le=100, description="Number of documents to retrieve per page"
    ),
    offset: int = Query(
        default=0, ge=0, description="Skip this many documents from the start"
    ),
    doc_id: Optional[int] = Query(
        None,
        description="ID of specific document to download (requires download_all=False)",
    ),
    download_all: bool = Query(
        default=False,
        description="If true, download all documents as a ZIP file (ignores pagination and doc_id)",
    ),
    db=Depends(get_db),
):
    docs_query = db.query(Document).filter(
        Document.account_id == account_id, Document.business_id == business.id
    )
    if not docs_query.first():
        raise HTTPException(
            status_code=404, detail="No documents found for this account"
        )

    if download_all:
        docs = docs_query.all()
        zip_buffer = BytesIO()
        with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zip_file:
            for doc in docs:
                try:
                    handler = get_handler_for_type(doc.storage_type, settings)
                    file_content = handler.download(doc.storage_key)
                    zip_file.writestr(doc.filename, file_content.getvalue())
                except Exception as e:
                    logger.warning(f"Skipping document {doc.filename}: {str(e)}")
                    continue
        zip_buffer.seek(0)
        return StreamingResponse(
            zip_buffer,
            media_type="application/zip",
            headers={
                "Content-Disposition": f"attachment; filename={account_id}_documents.zip"
            },
        )

    if doc_id:
        doc = docs_query.filter(Document.id == doc_id).first()
        if not doc:
            raise HTTPException(status_code=404, detail="Document not found")
        handler = get_handler_for_type(doc.storage_type, settings)
        try:
            if doc.storage_type == "local":
                return FileResponse(doc.storage_key, filename=doc.filename)
            else:
                file_content = handler.download(doc.storage_key)
                return StreamingResponse(
                    file_content,
                    media_type="application/octet-stream",
                    headers={
                        "Content-Disposition": f"attachment; filename={doc.filename}"
                    },
                )
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Download failed: {str(e)}")

    total = docs_query.count()
    docs = docs_query.order_by(Document.id.desc()).offset(offset).limit(limit).all()
    doc_list = []
    for d in docs:
        handler = get_handler_for_type(d.storage_type, settings)
        url = handler.get_url(d.storage_key)
        doc_list.append(
            {
                "id": d.id,
                "filename": d.filename,
                "url": url,
            }
        )

    return JSONResponse(
        {
            "account_id": account_id,
            "business": business.name,
            "documents": doc_list,
            "offset": offset,
            "limit": limit,
            "total": total,
            "has_more": (offset + limit) < total,
        }
    )
