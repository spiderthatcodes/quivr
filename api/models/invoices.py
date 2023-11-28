from pydantic import BaseModel, Field
from datetime import date
import uuid


"""
In a SQL DB we would use a foreign key to Orders, then pull in the
order details associated with a single order.
These would include:
unit price, board details: shaper name, board length,
width, height, construction

How are we going to do that here?
(see order_id below)

**AGGREGATION PIPELINE**

"""


class Invoice(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    date: date
    num_of_items: int = Field(...)
    unit_price: int = Field(...)
    shipping: int | None
    tax: float = Field(...)
    total_price: int = Field(...)
    order_id: str = Field(...)
    # OR should it be orders: str| list[str] #
    user_id: str = Field(...)
