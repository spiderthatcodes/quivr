from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routes import accounts
import os
from pymongo import MongoClient


from routes.orders import router as order_router


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


DATABASE_URL = os.environ.get("DATABASE_URL")
DB_NAME = os.environ.get("DB_NAME")


app.client = MongoClient(DATABASE_URL)
app.db = app.client[DB_NAME]


# Test:
@app.get("/api/launch-details")
def launch_details():
    return {"Poke": "Mon"}


app.include_router(authenticator.router, tags=["Auth"])
app.include_router(accounts.router, tags=["Auth"])
app.include_router(order_router, tags=["orders"])
