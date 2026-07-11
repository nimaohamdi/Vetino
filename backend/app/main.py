from fastapi import FastAPI

app = FastAPI(title="Vetino API")


@app.get("/")
def root():
    return {"message": "Vetino API is running 🚀"}