from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from models.orders import Order, OrderUpdate


router = APIRouter()


# CREATE a new ORDER
@router.post(
    "/orders",
    response_description="Create a new order",
    status_code=status.HTTP_201_CREATED,
    response_model=Order,
)
def create_order(request: Request, order: Order = Body(...)):
    order = jsonable_encoder(order)
    new_order = request.app.db["orders"].insert_one(order)
    created_order = request.app.db["orders"].find_one(
        {"_id": new_order.inserted_id}
    )

    return created_order


# GET list of ORDERS
@router.get(
    "/orders",
    response_description="List all orders",
    response_model=List[Order],
)
def list_orders(request: Request):
    orders = list(request.app.db["orders"].find(limit=10))
    return orders


# GET details of ONE ORDER
@router.get(
    "/orders/{id}",
    response_description="Get a single order by id",
    response_model=Order,
)
def find_order(id: str, request: Request):
    if (order := request.app.db["orders"].find_one({"_id": id})) is not None:
        return order

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Order with ID {id} not found",
    )


# UPDATE details of one ORDER
@router.put(
    "/orders/{id}",
    response_description="Update details of an order",
    response_model=Order,
)
def update_order(id: str, request: Request, order: OrderUpdate = Body(...)):
    order = {k: v for k, v in order.dict().items() if v is not None}

    if len(order) >= 1:
        update_result = request.app.db["orders"].update_one(
            {"_id": id}, {"$set": order}
        )

        if update_result.modified_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Order with ID {id} not found",
            )

    if (
        existing_order := request.app.db["orders"].find_one({"_id": id})
    ) is not None:
        return existing_order

    # else:
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Order with ID {id} not found",
    )


# REMOVE THIS METHOD LATER, FOR TESTING PURPOSES ONLY ###################
@router.delete("/orders/{id}", response_description="Delete an order")
def delete_order(id: str, request: Request, response: Response):
    delete_result = request.app.db["orders"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response
    # else:
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Order with ID {id} not found",
    )
