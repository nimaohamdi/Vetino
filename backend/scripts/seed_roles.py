from sqlalchemy import select

from app.db.session import SessionLocal
from app.modules.users.domain.models import Role


ROLES = [
    {
        "name": "ADMIN",
        "description": "System administrator",
    },
    {
        "name": "VETERINARIAN",
        "description": "Veterinarian",
    },
    {
        "name": "RECEPTIONIST",
        "description": "Clinic receptionist",
    },
    {
        "name": "PET_OWNER",
        "description": "Pet owner",
    },
]


def seed_roles() -> None:
    with SessionLocal() as db:
        for role_data in ROLES:
            existing_role = db.scalar(
                select(Role).where(Role.name == role_data["name"])
            )

            if existing_role is None:
                db.add(Role(**role_data))

        db.commit()


if __name__ == "__main__":
    seed_roles()
    print("Roles seeded successfully.")