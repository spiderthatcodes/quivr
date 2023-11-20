from pydantic import BaseModel, Field
from datetime import date
import uuid


"""
In a SQL DB we would use a foreign key to Orders, then pull in the
order details associated with a single order.
These would include:
unit price,
board details: shaper name, board length, width, height, construction

How are we going to do that here?

delivery_loc = either the address associated with the Customer,
or a Surf Shop address (by way of _id)

"""


class Invoice(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    date: date
    num_of_items: int = Field(...)
    unit_price: int = Field(...)
    total_price: int = Field(...)
    delivery_loc: str = Field(...)
    order_id: str = Field(...)
    user_id: str = Field(...)
