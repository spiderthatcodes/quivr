from fastapi import (
    APIRouter,
    HTTPException,
    status,
    Body,
    Request,
    Response,
)
from fastapi.encoders import jsonable_encoder
from typing import List
from models.reviews import Reviews, ReviewsUpdate

router = APIRouter()


@router.post(
    "/reviews",
    response_description="Create a new review",
    status_code=status.HTTP_201_CREATED,
    response_model=Reviews,
)
def create_review(request: Request, review: Reviews = Body(...)):
    review = jsonable_encoder(review)
    new_review = request.app.db["reviews"].insert_one(review)
    created_review = request.app.db["reviews"].find_one(
        {"_id": new_review.inserted_id}
    )
    created_review["_id"] = str(created_review["_id"])
    return created_review


@router.get(
    "/reviews",
    response_description="List of all Reviews",
    response_model=List[Reviews],
)
def list_reviews(request: Request):
    reviews = list(request.app.db["reviews"].find())
    return reviews


@router.get(
    "/reviews/{id}",
    response_description="Get a review by id",
    response_model=Reviews,
)
def find_review(id: str, request: Request):
    if (review := request.app.db["reviews"].find_one({"_id": id})) is not None:
        return review
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Review with id {id} not found",
    )


@router.put(
    "/reviews/{id}",
    response_description="Update review",
    response_model=Reviews,
)
def update_book(id: str, request: Request, review: ReviewsUpdate = Body(...)):
    review = {k: v for k, v in review.dict().items() if v is not None}

    if len(review) >= 1:
        update_result = request.app.db["reviews"].update_one(
            {"_id": id}, {"$set": review}
        )
        if update_result.modified_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Review with id {id} not found",
            )
    if (
        existing_review := request.app.db["reviews"].find_one({"_id": id})
    ) is not None:
        return existing_review
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Review with id {id} not found",
    )


@router.delete("/reviews/{id}", response_description="Delete a review")
def delete_review(id: str, request: Request, response: Response):
    delete_result = request.app.db["reviews"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Review with id {id} not found",
    )
