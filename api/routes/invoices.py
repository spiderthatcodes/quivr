from fastapi import APIRouter, Body, Request, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from models.invoices import Invoice


router = APIRouter()


# CREATE a new Invoice
@router.post(
    "/invoices",
    response_description="Create a new invoice",
    status_code=status.HTTP_201_CREATED,
    response_model=Invoice,
)
def create_invoice(request: Request, invoice: Invoice = Body(...)):
    invoice = jsonable_encoder(invoice)
    new_invoice = request.app.db["invoices"].insert_one(invoice)
    created_invoice = request.app.db["invoices"].find_one(
        {"_id": new_invoice.inserted_id}
    )

    return created_invoice


# GET list of Invoices
@router.get(
    "/invoices",
    response_description="List all invoices",
    response_model=List[Invoice],
)
def list_invoices(request: Request):
    invoices = list(request.app.db["invoices"].find(limit=10))
    print("!!!!!!!!!", len(invoices))
    return invoices


# GET details of ONE Invoice
@router.get(
    "/invoices/{id}",
    response_description="Get a single invoice by id",
    response_model=Invoice,
)
def find_invoice(id: str, request: Request):
    if (
        invoice := request.app.db["invoices"].find_one({"_id": id})
    ) is not None:
        return invoice

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Invoice with ID {id} not found",
    )
