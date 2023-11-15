from pydantic import BaseModel
from datetime import date
from typing import Literal


tail_styles = Literal[
    "squash", "round", "pin", "diamond", "fish", "swallow", "asym"
]

glassing_styles = Literal[
    "4 + 4 x 4", "6 + 4 x 4", "6 + 4 x 6", "6 + 6 x 6", "Other"
]


# Do we want to validate measurements here??
# (Eg: round int entries to 2 decimal places??)


class Order(BaseModel):
    date: date
    price: int
    tax: int
    shipping: int | None
    surf_shop_dest: str | None
    surfboard_shaper: str
    surfboard_model: str
    surfboard_length: float
    surfboard_width: float
    surfboard_thickness: float
    surfboard_construction: Literal["PU", "EPS", "XTR", "Other"]
    surfboard_fin_system: Literal["FCS1", "FCS2", "Futures", "Other"]
    surfboard_fin_count: Literal["5", "4", "3", "2", "1"]
    surfboard_tail_style: tail_styles
    surfboard_glassing: glassing_styles
    surfboard_desc: str
