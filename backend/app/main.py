from fastapi import FastAPI

from app.api.router import auth_router, users_router


app = FastAPI(
    title="Vetino API",
)


app.include_router(
    auth_router,
    prefix="/api/v1",
)

app.include_router(
    users_router,
    prefix="/api/v1",
)


@app.get("/")
def root() -> dict[str, str]:
    return {
        "message": "Vetino API is running 🚀",
    }