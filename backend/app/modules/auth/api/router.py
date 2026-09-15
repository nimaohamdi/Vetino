from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.common.dependencies.database import get_db
from app.modules.auth.domain.schemas import LoginRequest, TokenResponse
from app.modules.auth.services.auth_service import AuthService


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    payload: LoginRequest,
    db: Session = Depends(get_db),
) -> TokenResponse:
    service = AuthService(db)

    access_token = service.login(
        email=payload.email,
        password=payload.password,
    )

    return TokenResponse(
        access_token=access_token,
    )