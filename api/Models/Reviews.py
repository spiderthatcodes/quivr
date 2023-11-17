from typing import Optional
from pydantic import BaseModel, Field
from uuid import uuid4


class Reviews(BaseModel):
    id: str = Field(default_factory=uuid4, alias="_id")
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


