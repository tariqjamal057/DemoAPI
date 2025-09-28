import io
import os
import tempfile
from unittest.mock import MagicMock, patch

import pytest
from faker import Faker
from fastapi import UploadFile

from file_handler import (
    BaseHandler,
    CloudinaryHandler,
    LocalHandler,
    S3Handler,
    get_handler_for_type,
    get_storage_handler,
)
from settings import Settings


class TestLocalHandler:
    def setup_method(self):
        self.handler = LocalHandler()
        self.temp_dir = tempfile.mkdtemp()
        self.handler.upload_dir = self.temp_dir

    def test_upload(self):
        fake = Faker()
        account_id = str(fake.uuid4())
        filename = fake.file_name(extension="txt")
        content = os.urandom(11)

        file = MagicMock(spec=UploadFile)
        file.filename = filename
        file.file = MagicMock()
        file.file.read.return_value = content

        metadata = self.handler.upload(file, account_id)

        assert metadata["storage_type"] == "local"
        assert metadata["storage_key"] == os.path.join(
            self.temp_dir, account_id, filename
        )

        with open(metadata["storage_key"], "rb") as f:
            assert f.read() == content

    def test_download(self):
        fake = Faker()
        account_id = str(fake.uuid4())
        filename = fake.file_name(extension="txt")
        content = os.urandom(11)
        file_path = os.path.join(self.temp_dir, account_id, filename)
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "wb") as f:
            f.write(content)

        downloaded = self.handler.download(file_path)
        assert downloaded.read() == content

    def test_get_url(self):
        assert self.handler.get_url("some_path") is None


class TestS3Handler:
    def setup_method(self):
        self.settings = Settings(
            s3_bucket="test-bucket",
            aws_access_key_id="test_key",
            aws_secret_access_key="test_secret",
            aws_region="us-east-1",
        )
        with patch("file_handler.boto3.client") as mock_boto3_client:
            self.mock_s3 = MagicMock()
            mock_boto3_client.return_value = self.mock_s3
            self.handler = S3Handler(self.settings)
            self.handler.s3_client = self.mock_s3

    def test_upload(self):
        fake = Faker()
        account_id = str(fake.uuid4())
        filename = fake.file_name(extension="txt")
        content = os.urandom(11)

        file = MagicMock(spec=UploadFile)
        file.filename = filename
        file.content_type = "text/plain"
        file.file = MagicMock()
        file.file.read.return_value = content

        metadata = self.handler.upload(file, account_id)

        assert metadata["storage_type"] == "s3"
        assert metadata["storage_key"] == f"{account_id}/{filename}"

        self.mock_s3.put_object.assert_called_once_with(
            Bucket="test-bucket",
            Key=f"{account_id}/{filename}",
            Body=content,
            ContentType="text/plain",
        )

    def test_download(self):
        fake = Faker()
        content = os.urandom(11)
        s3_key = fake.uuid4()
        self.mock_s3.get_object.return_value = {"Body": io.BytesIO(content)}

        downloaded = self.handler.download(s3_key)
        assert downloaded.read() == content

        self.mock_s3.get_object.assert_called_once_with(
            Bucket="test-bucket", Key=s3_key
        )

    def test_get_url(self):
        fake = Faker()
        s3_key = fake.uuid4()
        presigned_url = fake.url()
        self.mock_s3.generate_presigned_url.return_value = presigned_url

        url = self.handler.get_url(s3_key)
        assert url == presigned_url

        self.mock_s3.generate_presigned_url.assert_called_once()


class TestCloudinaryHandler:
    def setup_method(self):
        self.settings = Settings(
            cloudinary_cloud_name="test_cloud",
            cloudinary_api_key="test_api_key",
            cloudinary_api_secret="test_api_secret",
        )
        self.handler = CloudinaryHandler(self.settings)

    @patch("cloudinary.uploader.upload")
    def test_upload(self, mock_upload):
        fake = Faker()
        public_id = fake.uuid4()
        mock_upload.return_value = {"public_id": public_id, "resource_type": "image"}

        account_id = str(fake.uuid4())
        filename = fake.file_name(extension="png")
        content = os.urandom(10)

        file = MagicMock(spec=UploadFile)
        file.filename = filename
        file.file = MagicMock()
        file.file.read.return_value = content

        metadata = self.handler.upload(file, account_id)

        assert metadata["storage_type"] == "cloudinary"
        assert metadata["storage_key"] == f"image:{public_id}"

        mock_upload.assert_called_once_with(
            content, folder=f"{account_id}/", public_id=filename, resource_type="auto"
        )

    @patch("requests.get")
    def test_download(self, mock_get):
        fake = Faker()
        public_id = fake.uuid4()
        content = os.urandom(10)
        mock_response = MagicMock()
        mock_response.content = content
        mock_response.raise_for_status.return_value = None
        mock_get.return_value = mock_response

        downloaded = self.handler.download(f"image:{public_id}")
        assert downloaded.read() == content

    def test_get_url(self):
        url = self.handler.get_url("image:test_public_id")
        expected = f"https://res.cloudinary.com/{self.settings.cloudinary_cloud_name}/image/upload/v{self.handler.version}/test_public_id.png"
        assert url == expected


class TestFactoryFunctions:
    def test_get_storage_handler_dev(self):
        settings = Settings(environment="dev")
        handler = get_storage_handler(settings)
        assert isinstance(handler, LocalHandler)

    def test_get_storage_handler_prod_s3(self):
        settings = Settings(
            environment="prod",
            cloud_provider="s3",
            s3_bucket="bucket",
            aws_access_key_id="key",
            aws_secret_access_key="secret",
        )
        handler = get_storage_handler(settings)
        assert isinstance(handler, S3Handler)

    def test_get_storage_handler_prod_cloudinary(self):
        settings = Settings(
            environment="prod",
            cloud_provider="cloudinary",
            cloudinary_cloud_name="cloud",
            cloudinary_api_key="key",
            cloudinary_api_secret="secret",
        )
        handler = get_storage_handler(settings)
        assert isinstance(handler, CloudinaryHandler)

    def test_get_handler_for_type_local(self):
        settings = Settings()
        handler = get_handler_for_type("local", settings)
        assert isinstance(handler, LocalHandler)

    def test_get_handler_for_type_s3(self):
        settings = Settings(
            s3_bucket="bucket", aws_access_key_id="key", aws_secret_access_key="secret"
        )
        handler = get_handler_for_type("s3", settings)
        assert isinstance(handler, S3Handler)

    def test_get_handler_for_type_cloudinary(self):
        settings = Settings(
            cloudinary_cloud_name="cloud",
            cloudinary_api_key="key",
            cloudinary_api_secret="secret",
        )
        handler = get_handler_for_type("cloudinary", settings)
        assert isinstance(handler, CloudinaryHandler)

    def test_get_handler_for_type_unknown(self):
        settings = Settings()
        with pytest.raises(ValueError, match="Unknown storage type"):
            get_handler_for_type("unknown", settings)
