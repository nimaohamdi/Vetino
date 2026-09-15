from sqlalchemy.orm import Session

from app.core.security import hash_password
from app.modules.users.domain.models import User
from app.modules.users.repositories.user_repository import UserRepository


class UserService:
    DEFAULT_ROLE = "PET_OWNER"

    def __init__(self, db: Session):
        self.db = db
        self.repository = UserRepository(db)

    def create_user(
        self,
        *,
        email: str,
        password: str,
        first_name: str,
        last_name: str,
        phone: str | None = None,
    ) -> User:
        normalized_email = email.strip().lower()

        existing_user = self.repository.get_by_email(
            normalized_email
        )

        if existing_user is not None:
            raise ValueError(
                "User with this email already exists"
            )

        if phone:
            phone = phone.strip()

            existing_phone = self.repository.get_by_phone(phone)

            if existing_phone is not None:
                raise ValueError(
                    "User with this phone already exists"
                )

        role = self.repository.get_role_by_name(
            self.DEFAULT_ROLE
        )

        if role is None:
            raise ValueError(
                "Default user role is not configured"
            )

        user = User(
            email=normalized_email,
            password_hash=hash_password(password),
            first_name=first_name.strip(),
            last_name=last_name.strip(),
            phone=phone,
            role_id=role.id,
        )

        try:
            self.repository.create(user)
            self.db.commit()
            self.db.refresh(user)

            return user

        except Exception:
            self.db.rollback()
            raise