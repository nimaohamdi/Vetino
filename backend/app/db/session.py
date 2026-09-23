from collections.abc import Generator
<<<<<<< HEAD

from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker
=======
>>>>>>> 5af8113f92ef2db68c861a818036d846626a7746

from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

<<<<<<< HEAD



=======
from core.config import settings


>>>>>>> 5af8113f92ef2db68c861a818036d846626a7746
engine = create_engine(
    settings.database_url,
    echo=settings.debug,
    pool_pre_ping=True,
)

SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False,
    expire_on_commit=False,
)


def get_db() -> Generator[Session, None, None]:
    """
    FastAPI dependency that provides a database session.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()