from pydantic import BaseModel, Field
import uuid
from datetime import date
from typing import Literal

# from bson import ObjectId


tail_styles = Literal[
    "squash", "round", "pin", "diamond", "fish", "swallow", "asym"
]

glassing_styles = Literal[
    "4 + 4 x 4", "6 + 4 x 4", "6 + 4 x 6", "6 + 6 x 6", "Other"
]

status_options = Literal[
    "Order received!",
    "Foam being cut!",
    "Board sent to glassing",
    "Board complete",
    "Board shipped",
]


# Do we want to validate measurements here??
# (Eg: round int entries to 2 decimal places??)

# How do we want to handle shipping location? -> cust_address | surf_shop


class Order(BaseModel):
    # id: ObjectId = Field(default_factory=ObjectId, alias="_id")
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    date: date
    order_status: status_options
    price: int = Field(...)
    # MOVE TAX TO INVOICE #############
    tax: int = Field(...)
    # MOVE SHIPPING TO INVOICE #############
    shipping: int | None
    # CHANGE TO: delivery_loc: str = Field(...) #############
    surf_shop_dest: str | None
    surfboard_shaper: str = Field(...)
    surfboard_model: str = Field(...)
    surfboard_length: float = Field(..., le=13)
    surfboard_width: float = Field(..., le=24)
    surfboard_thickness: float = Field(..., le=4.0)
    surfboard_construction: Literal["PU", "EPS", "XTR", "Other"]
    surfboard_fin_system: Literal["FCS1", "FCS2", "Futures", "Other"]
    surfboard_fin_count: Literal[5, 4, 3, 2, 1]
    surfboard_tail_style: tail_styles
    surfboard_glassing: glassing_styles
    surfboard_desc: str | None

    class Config:
        allow_population_by_field_name = True


class OrderUpdate(BaseModel):
    order_status: status_options
    # json_encoders = {ObjectId: str}
