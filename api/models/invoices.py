from pydantic import BaseModel
from datetime import date


class Invoice(BaseModel):
    date: date
    price: int
    delivery_loc: str
    order_id: str
    user_id: str
