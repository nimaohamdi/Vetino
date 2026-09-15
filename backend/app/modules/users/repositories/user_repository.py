from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.modules.users.domain.models import Role, User



class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_id(self, user_id: UUID) -> User | None:
        return self.db.scalar(
            select(User).where(User.id == user_id)
        )

    def get_by_email(self, email: str) -> User | None:
        return self.db.scalar(
            select(User).where(User.email == email)
        )

    def get_by_phone(self, phone: str) -> User | None:
        return self.db.scalar(
            select(User).where(User.phone == phone)
        )

    def get_role_by_name(self, name: str) -> Role | None:
        return self.db.scalar(
            select(Role).where(Role.name == name)
        )

    def create(self, user: User) -> User:
        self.db.add(user)
        self.db.flush()
        self.db.refresh(user)

        return user