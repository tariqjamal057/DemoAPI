from pydantic_settings import BaseSettings
from typing import Literal, Optional


class Settings(BaseSettings):
    database_url: str = None

    s3_bucket: Optional[str] = None
    aws_access_key_id: Optional[str] = None
    aws_secret_access_key: Optional[str] = None
    aws_region: Optional[str] = "us-east-1"

    environment: Literal["dev", "prod"] = "prod"
    cloud_provider: Optional[Literal["s3", "cloudinary"]] = "cloudinary"

    cloudinary_cloud_name: Optional[str] = None
    cloudinary_api_key: Optional[str] = None
    cloudinary_api_secret: Optional[str] = None

    rate_limit_requests: int = 10
    rate_limit_window: int = 60  # seconds

    class Config:
        env_file = ".env"
        case_sensitive = False
        extra = "ignore"


settings = Settings()
