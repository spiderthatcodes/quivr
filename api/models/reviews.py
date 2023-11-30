from typing import Optional
from pydantic import BaseModel, Field
from uuid import uuid4
from datetime import date


class Reviews(BaseModel):
    id: str = Field(default_factory=uuid4, alias="_id")
    date: date
    rating: int
    title: str = Field(...)
    description: str
    customer_id: str = Field(...)
    shaper_id: str = Field(...)
    order_id: str


class ReviewsUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    rating: Optional[int]
