from pydantic import BaseModel, Field
import uuid
from datetime import date
from typing import Literal, Optional


tail_styles = Literal[
    "squash", "round", "pin", "diamond", "fish", "swallow", "asym"
]

glassing_styles = Literal[
    "4 + 4 x 4", "6 + 4 x 4", "6 + 4 x 6", "6 + 6 x 6", "Other"
]


# Do we want to validate measurements here??
# (Eg: round int entries to 2 decimal places??)


class Order(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    date: date
    price: int = Field(...)
    tax: int = Field(...)
    shipping: int | None
    surf_shop_dest: str | None
    surfboard_shaper: str = Field(...)
    surfboard_model: str = Field(...)
    surfboard_length: float = Field(..., le=13)
    surfboard_width: float = Field(..., le=24)
    surfboard_thickness: float = Field(..., le=4.0)
    surfboard_construction: Literal["PU", "EPS", "XTR", "Other"]
    surfboard_fin_system: Literal["FCS1", "FCS2", "Futures", "Other"]
    surfboard_fin_count: Literal["5", "4", "3", "2", "1"]
    surfboard_tail_style: tail_styles
    surfboard_glassing: glassing_styles
    surfboard_desc: str | None

    class Config:
        allow_population_by_field_name = True


class OrderUpdate(BaseModel):
    date: Optional[date]
    price: Optional[int]
    tax: Optional[int]
    shipping: Optional[int]
    surf_shop_dest: Optional[str]
    surfboard_shaper: Optional[str]
    surfboard_model: Optional[str]
    surfboard_length: Optional[float]
    surfboard_width: Optional[float]
    surfboard_thickness: Optional[float]
    surfboard_construction: Optional[str]
    surfboard_fin_system: Optional[str]
    surfboard_fin_count: Optional[int]
    surfboard_tail_style: Optional[str]
    surfboard_glassing: Optional[str]
    surfboard_desc: Optional[str]
