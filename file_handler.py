import os
import io
from abc import ABC, abstractmethod
from typing import Dict, Optional
import boto3
from botocore.exceptions import ClientError
import cloudinary
import cloudinary.uploader
import cloudinary.api
import cloudinary.utils
from fastapi import UploadFile
import requests
from settings import Settings


class BaseHandler(ABC):
    """Abstract base class for file storage handlers"""

    @abstractmethod
    def upload(self, file: UploadFile, account_id: str) -> Dict[str, str]:
        """Upload file and return metadata like {'storage_type': 'local|s3|cloudinary', 'storage_key': 'path_or_key'}"""
        pass

    @abstractmethod
    def download(self, storage_key: str) -> io.BytesIO:
        """Download file content as BytesIO"""
        pass

    @abstractmethod
    def get_url(self, storage_key: str) -> Optional[str]:
        """Get public or presigned URL for the file"""
        pass


class LocalHandler(BaseHandler):
    """Handler for local filesystem storage"""

    def __init__(self):
        self.upload_dir = "uploads"

    def upload(self, file, account_id: str) -> Dict[str, str]:
        os.makedirs(os.path.join(self.upload_dir, account_id), exist_ok=True)
        file_path = os.path.join(self.upload_dir, account_id, file.filename)
        content = file.file.read()
        with open(file_path, "wb") as f:
            f.write(content)
        return {"storage_type": "local", "storage_key": file_path}

    def download(self, local_path: str) -> io.BytesIO:
        with open(local_path, "rb") as f:
            content = f.read()
        return io.BytesIO(content)

    def get_url(self, local_path: str) -> Optional[str]:
        return None


class S3Handler(BaseHandler):
    """Handler for AWS S3 storage"""

    def __init__(self, settings: Settings):
        self.s3_client = boto3.client(
            "s3",
            aws_access_key_id=settings.aws_access_key_id,
            aws_secret_access_key=settings.aws_secret_access_key,
            region_name=settings.aws_region,
        )
        self.bucket = settings.s3_bucket

    def upload(self, file, account_id: str) -> Dict[str, str]:
        s3_key = f"{account_id}/{file.filename}"
        content = file.file.read()
        try:
            self.s3_client.put_object(
                Bucket=self.bucket,
                Key=s3_key,
                Body=content,
                ContentType=file.content_type,
            )
            return {"storage_type": "s3", "storage_key": s3_key}
        except ClientError as e:
            raise Exception(f"S3 upload failed: {str(e)}")

    def download(self, s3_key: str) -> io.BytesIO:
        try:
            response = self.s3_client.get_object(Bucket=self.bucket, Key=s3_key)
            return io.BytesIO(response["Body"].read())
        except ClientError as e:
            raise Exception(f"S3 download failed: {str(e)}")

    def get_url(self, s3_key: str) -> Optional[str]:
        try:
            url = self.s3_client.generate_presigned_url(
                "get_object",
                Params={"Bucket": self.bucket, "Key": s3_key},
                ExpiresIn=3600,
            )
            return url
        except ClientError as e:
            raise Exception(f"S3 presigned URL generation failed: {str(e)}")


class CloudinaryHandler(BaseHandler):
    """Handler for Cloudinary storage"""

    def __init__(self, settings: Settings):
        cloudinary.config(
            cloud_name=settings.cloudinary_cloud_name,
            api_key=settings.cloudinary_api_key,
            api_secret=settings.cloudinary_api_secret,
        )
        self.cloud_name = settings.cloudinary_cloud_name
        self.version = "1759064043"

    def upload(self, file, account_id: str) -> Dict[str, str]:
        content = file.file.read()
        result = cloudinary.uploader.upload(
            content,
            folder=f"{account_id}/",
            public_id=file.filename,
            resource_type="auto",
        )
        return {
            "storage_type": "cloudinary",
            "storage_key": f"{result['resource_type']}:{result['public_id']}",
        }

    def download(self, storage_key: str) -> io.BytesIO:
        resource_type, public_id = storage_key.split(":", 1)
        url = f"https://res.cloudinary.com/{self.cloud_name}/image/upload/v{self.version}/{public_id}.png"
        resp = requests.get(url)
        resp.raise_for_status()
        return io.BytesIO(resp.content)

    def get_url(self, storage_key: str) -> Optional[str]:
        print("storage_key ", storage_key)
        resource_type, public_id = storage_key.split(":", 1)
        url = f"https://res.cloudinary.com/{self.cloud_name}/image/upload/v{self.version}/{public_id}.png"
        return url


def get_storage_handler(settings: Settings) -> BaseHandler:
    """Return the appropriate handler based on environment and provider"""
    if settings.environment == "dev":
        return LocalHandler()
    elif settings.environment == "prod":
        if settings.cloud_provider == "s3" and settings.s3_bucket:
            if not (settings.aws_access_key_id and settings.aws_secret_access_key):
                raise ValueError("S3 credentials missing")
            return S3Handler(settings)
        elif settings.cloud_provider == "cloudinary" and settings.cloudinary_cloud_name:
            if not (settings.cloudinary_api_key and settings.cloudinary_api_secret):
                raise ValueError("Cloudinary credentials missing")
            return CloudinaryHandler(settings)
    return LocalHandler()


def get_handler_for_type(storage_type: str, settings: Settings) -> BaseHandler:
    """Return handler instance for a given storage type"""
    if storage_type == "local":
        return LocalHandler()
    elif storage_type == "s3":
        if not (
            settings.s3_bucket
            and settings.aws_access_key_id
            and settings.aws_secret_access_key
        ):
            raise ValueError("S3 config missing for download")
        return S3Handler(settings)
    elif storage_type == "cloudinary":
        if not (
            settings.cloudinary_cloud_name
            and settings.cloudinary_api_key
            and settings.cloudinary_api_secret
        ):
            raise ValueError("Cloudinary config missing for download")
        return CloudinaryHandler(settings)
    else:
        raise ValueError(f"Unknown storage type: {storage_type}")
