import io
import os
import tempfile
from unittest.mock import MagicMock, patch

import pytest
from faker import Faker
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app import app, get_db
from file_handler import LocalHandler
from models import Base, Business, Document
from settings import Settings


# Test database setup
temp_db_file = tempfile.NamedTemporaryFile(delete=False, suffix=".db")
temp_db_file.close()
TEST_DATABASE_URL = f"sqlite:///{temp_db_file.name}"
engine = create_engine(TEST_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


@pytest.fixture(scope="session")
def db():
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.rollback()
        db.close()
        Base.metadata.drop_all(bind=engine)
        engine.dispose()
        # Remove the database file after the testcase completion
        if os.path.exists(temp_db_file.name):
            os.remove(temp_db_file.name)


@pytest.fixture(scope="session")
def client(db):
    def override_get_db():
        try:
            yield db
        finally:
            pass

    app.dependency_overrides[get_db] = override_get_db

    # Mock settings and handlers
    with patch("app.settings") as mock_settings, patch(
        "app.get_storage_handler"
    ) as mock_get_handler, patch(
        "app.get_handler_for_type"
    ) as mock_get_type_handler, patch(
        "app.rate_limiter"
    ) as mock_rate_limiter:

        mock_settings.environment = "dev"
        mock_rate_limiter.is_allowed.return_value = True

        mock_handler = MagicMock(spec=LocalHandler)
        mock_handler.upload.return_value = {
            "storage_type": "local",
            "storage_key": "/tmp/test",
        }
        mock_handler.download.return_value = io.BytesIO(b"test content")
        mock_handler.get_url.return_value = None
        mock_get_handler.return_value = mock_handler
        mock_get_type_handler.return_value = mock_handler

        with TestClient(app) as c:
            yield c


class TestBusinessEndpoints:
    def test_register_business(self, client):
        fake = Faker()
        business_name = fake.company()
        response = client.post("/business/register", data={"name": business_name})
        assert response.status_code == 200
        data = response.json()
        assert "api_key" in data
        assert data["business_name"] == business_name

    def test_get_businesses(self, client, db):
        fake = Faker()
        business_name = fake.company()
        api_key = fake.uuid4()
        business = Business(name=business_name, api_key=api_key)
        db.add(business)
        db.commit()

        response = client.get("/businesses")
        assert response.status_code == 200
        data = response.json()
        business_data = next((b for b in data if b["api_key"] == api_key), None)
        assert business_data is not None
        assert business_data["name"] == business_name


class TestDocumentEndpoints:
    def test_upload_document_no_file(self, client):
        fake = Faker()
        headers = {"x-api-key": fake.uuid4()}
        response = client.post(
            "/document/upload", data={"account_id": str(fake.uuid4())}, headers=headers
        )
        assert (
            response.status_code == 401
        )  # Invalid API key first, but actually file required

    def test_upload_document(self, client, db):
        fake = Faker()
        business_name = fake.company()
        api_key = fake.uuid4()
        account_id = str(fake.uuid4())
        filename = fake.file_name(extension="txt")
        content = os.urandom(7)
        business = Business(name=business_name, api_key=api_key)
        db.add(business)
        db.commit()

        headers = {"x-api-key": api_key}
        files = {"file": (filename, io.BytesIO(content), "text/plain")}
        data = {"account_id": account_id}
        response = client.post(
            "/document/upload", data=data, files=files, headers=headers
        )
        assert response.status_code == 200
        data = response.json()
        assert data["message"] == "Document uploaded successfully"

    def test_get_documents_no_docs(self, client, db):
        fake = Faker()
        business_name = fake.company()
        api_key = fake.uuid4()
        account_id = str(fake.uuid4())
        business = Business(name=business_name, api_key=api_key)
        db.add(business)
        db.commit()

        headers = {"x-api-key": api_key}
        response = client.get(f"/document/{account_id}", headers=headers)
        assert response.status_code == 404

    def test_get_documents_list(self, client, db):
        fake = Faker()
        business_name = fake.company()
        api_key = fake.uuid4()
        account_id = str(fake.uuid4())
        filename = fake.file_name(extension="txt")
        business = Business(name=business_name, api_key=api_key)
        db.add(business)
        db.commit()

        doc = Document(
            account_id=account_id,
            business_id=business.id,
            filename=filename,
            storage_type="local",
            storage_key=f"/tmp/{filename}",
        )
        db.add(doc)
        db.commit()

        headers = {"x-api-key": api_key}
        response = client.get(f"/document/{account_id}", headers=headers)
        assert response.status_code == 200
        data = response.json()
        assert len(data["documents"]) == 1
        assert data["documents"][0]["filename"] == filename

    def test_get_documents_download_single(self, client, db):
        import tempfile

        fake = Faker()
        business_name = fake.company()
        api_key = fake.uuid4()
        account_id = str(fake.uuid4())
        filename = fake.file_name(extension="txt")
        content = os.urandom(12)
        business = Business(name=business_name, api_key=api_key)
        db.add(business)
        db.commit()

        with tempfile.NamedTemporaryFile(delete=False) as f:
            f.write(content)
            temp_path = f.name

        doc = Document(
            account_id=account_id,
            business_id=business.id,
            filename=filename,
            storage_type="local",
            storage_key=temp_path,
        )
        db.add(doc)
        db.commit()

        headers = {"x-api-key": api_key}
        response = client.get(
            f"/document/{account_id}?doc_id={doc.id}", headers=headers
        )
        assert response.status_code == 200

    def test_get_documents_download_all(self, client, db):
        fake = Faker()
        business_name = fake.company()
        api_key = fake.uuid4()
        account_id = str(fake.uuid4())
        filename = fake.file_name(extension="txt")
        business = Business(name=business_name, api_key=api_key)
        db.add(business)
        db.commit()

        doc = Document(
            account_id=account_id,
            business_id=business.id,
            filename=filename,
            storage_type="local",
            storage_key=f"/tmp/{filename}",
        )
        db.add(doc)
        db.commit()

        headers = {"x-api-key": api_key}
        response = client.get(
            f"/document/{account_id}?download_all=true", headers=headers
        )
        assert response.status_code == 200
        assert response.headers["content-type"] == "application/zip"


class TestMiddleware:
    def test_rate_limit_exceeded(self, client):
        with patch("app.rate_limiter") as mock_rate_limiter:
            mock_rate_limiter.is_allowed.return_value = False
            response = client.get("/businesses")
            assert response.status_code == 429

    def test_validation_error(self, client):
        response = client.post("/business/register", data={})
        assert response.status_code == 422
