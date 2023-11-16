from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from Routes.reviews import router as reviews_router

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {"Poke": "Mon"}


app.include_router(reviews_router, tags=["reviews"])
