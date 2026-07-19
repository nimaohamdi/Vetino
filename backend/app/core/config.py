from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # ==========================
    # Application
    # ==========================
    app_name: str = "Vetino API"
    app_version: str = "1.0.0"
    environment: str = "development"
    debug: bool = True

    # ==========================
    # API
    # ==========================
    api_v1_prefix: str = "/api/v1"

    # ==========================
    # Security
    # ==========================
    secret_key: str = Field(..., alias="SECRET_KEY")
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    # ==========================
    # Database
    # ==========================
    postgres_host: str = "localhost"
    postgres_port: int = 5432
    postgres_db: str = "vetino"
    postgres_user: str = "vetino"
    postgres_password: str

    # ==========================
    # CORS
    # ==========================
    backend_cors_origins: list[str] = ["http://localhost:3000"]

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=False,
        extra="ignore",
    )

    @property
    def database_url(self) -> str:
        return (
            f"postgresql+psycopg2://"
            f"{self.postgres_user}:{self.postgres_password}"
            f"@{self.postgres_host}:{self.postgres_port}/"
            f"{self.postgres_db}"
        )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()