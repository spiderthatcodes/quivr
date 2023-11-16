from typing import Optional
from pydantic import BaseModel, Field


class Reviews(BaseModel):
    rating: int
    title: str = Field(...)
    description: str = Field(...)
    # date_time: date


#     # order_id?
#     # user_id?
#     # shaper_id?


class ReviewsUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    rating: Optional[str]
