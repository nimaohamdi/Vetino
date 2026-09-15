from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.common.dependencies.database import get_db
from app.modules.users.api.dependencies import (
    get_current_active_user,
    require_role,
)
from app.modules.users.domain.models import User
from app.modules.users.domain.schemas import UserCreate, UserResponse
from app.modules.users.services.user_service import UserService


router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def register_user(
    payload: UserCreate,
    db: Session = Depends(get_db),
) -> UserResponse:
    service = UserService(db)

    try:
        user = service.create_user(
            email=payload.email,
            password=payload.password,
            first_name=payload.first_name,
            last_name=payload.last_name,
            phone=payload.phone,
        )

        return user

    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        ) from exc


@router.get(
    "/me",
    response_model=UserResponse,
)
def get_me(
    current_user: User = Depends(get_current_active_user),
) -> UserResponse:
    return current_user


@router.get(
    "/test/pet-owner",
)
def test_pet_owner_access(
    current_user: User = Depends(require_role("PET_OWNER")),
) -> dict:
    return {
        "message": "PET_OWNER access granted",
        "user_id": str(current_user.id),
        "email": current_user.email,
        "role": current_user.role.name,
    }