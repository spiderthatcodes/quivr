from pydantic import BaseModel
from datetime import date


class Review(BaseModel):
    rating: int
    title: str(max_length=25)
    description: str(max_length=50)
    date: date
    # order_id?
    # user_id?
    # shaper_id?
