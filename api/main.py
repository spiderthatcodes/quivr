from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
import os
from routes import accounts
from routes.orders import router as orders_router
from routes.reviews import router as reviews_router
from routes.invoices import router as invoices_router

# from starlette.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    # allow_origins=[os.environ.get("CORS_HOST", "REACT_APP_API_HOST")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    # allow_origins=["*"],
)


# Must have this for deployment
@app.get("/")
def root():
    return {"message": "Ouch!!! You hit my root."}


app.include_router(authenticator.router, tags=["Auth"])
app.include_router(accounts.router, tags=["Auth"])
app.include_router(reviews_router, tags=["reviews"])
app.include_router(orders_router, tags=["orders"])
app.include_router(invoices_router, tags=["invoices"])
