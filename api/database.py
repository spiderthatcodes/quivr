
# MongoDB driver:
# import motor.motor_asyncio
# from dotenv import load_dotenv
from pymongo import MongoClient
import os

# load_dotenv()

# my_id = os.getenv("CONNECTION_STRING")

# client = motor.motor_asyncio.AsyncIOMotorClient({my_id})
# database = client.get_database("quivr-db")
# collection = database.get_collection("todo")

DATABASE_URL = os.environ.get("DATABASE_URL")
DB_NAME = os.environ.get("DB_NAME")

client = MongoClient(DATABASE_URL)
db = client[DB_NAME]
