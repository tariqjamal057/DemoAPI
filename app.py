import os
import secrets

from fastapi import Depends, FastAPI, Form, Header, HTTPException, UploadFile, Query
from fastapi.responses import JSONResponse, FileResponse, StreamingResponse
from io import BytesIO
import zipfile
from pydantic import BaseModel
from sqlalchemy import Column, ForeignKey, Integer, LargeBinary, String, create_engine
from sqlalchemy.orm import declarative_base, relationship, sessionmaker

DATABASE_URL = "sqlite:///./data.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
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
    content = Column(LargeBinary)

    business = relationship("Business")


Base.metadata.create_all(bind=engine)

app = FastAPI(title="Document Receiver API")


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


@app.post("/business/register")
def register_business(name: str, db=Depends(get_db)):
    api_key = secrets.token_hex(16)
    business = Business(name=name, api_key=api_key)
    db.add(business)
    db.commit()
    db.refresh(business)
    return {"business_name": name, "api_key": api_key}


@app.post("/document/upload")
def upload_document(
    account_id: str = Form(...),
    file: UploadFile = None,
    business: Business = Depends(get_current_business),
    db=Depends(get_db),
):

    if file is None:
        raise HTTPException(status_code=400, detail="File is required")

    content = file.file.read()

    # Save file locally
    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)
    file_path = os.path.join(upload_dir, file.filename)
    with open(file_path, "wb") as f:
        f.write(content)

    new_doc = Document(
        account_id=account_id,
        business_id=business.id,
        filename=file.filename,
        content=content,
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
        }
    )


@app.get("/document/{account_id}")
def get_documents(
    account_id: str,
    download_all: bool = Query(
        False,
        description="Set to true to download all documents as a zip file and if false it will download the latest document only",
    ),
    db=Depends(get_db),
):
    docs = db.query(Document).filter(Document.account_id == account_id).all()
    if not docs:
        raise HTTPException(
            status_code=404, detail="No documents found for this account"
        )

    if download_all:
        zip_buffer = BytesIO()
        with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zip_file:
            for doc in docs:
                file_path = os.path.join("uploads", doc.filename)
                if os.path.exists(file_path):
                    zip_file.write(file_path, doc.filename)
                else:
                    zip_file.writestr(doc.filename, doc.content)

        zip_buffer.seek(0)
        return StreamingResponse(
            zip_buffer,
            media_type="application/zip",
            headers={
                "Content-Disposition": f"attachment; filename={account_id}_documents.zip"
            },
        )
    else:
        doc = (
            db.query(Document)
            .filter(Document.account_id == account_id)
            .order_by(Document.id.desc())
            .first()
        )
        if not doc:
            raise HTTPException(
                status_code=404, detail="No documents found for this account"
            )

        file_path = os.path.join("uploads", doc.filename)
        if os.path.exists(file_path):
            return FileResponse(file_path, filename=doc.filename)
        else:
            return StreamingResponse(
                BytesIO(doc.content),
                media_type="application/octet-stream",
                headers={"Content-Disposition": f"attachment; filename={doc.filename}"},
            )
