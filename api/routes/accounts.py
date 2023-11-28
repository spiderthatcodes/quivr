from fastapi import (
    APIRouter,
    Request,
    Response,
    Depends,
    HTTPException,
    status,
    Body,
)
from models.accounts import (
    AccountToken,
    HttpError,
    AccountIn,
    AccountForm,
    AccountOut,
    AccountUpdate,
)
from queries.accounts import AccountQueries, DuplicateAccountError
from authenticator import authenticator
from typing import List


router = APIRouter()


@router.post("/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)

    try:
        account = repo.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.get("/accounts", response_model=List[AccountOut])
def list_accounts(request: Request):
    accounts = list(request.app.db["accounts"].find())
    return accounts


@router.get("/accounts/{role}", response_model=List[AccountOut])
def list_accounts_by_role(request: Request, role: str):
    accounts = list(request.app.db["accounts"].find({"role": role}))
    return accounts


@router.get("/accounts/username/{username}", response_model=AccountOut)
def get_account_by_username(request: Request, username: str):
    if (
        account := request.app.db["accounts"].find_one({"username": username})
    ) is not None:
        return account
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Account with username {username} not found",
    )


@router.put("/accounts/{username}", response_model=AccountOut)
def update_account(
    request: Request, username: str, account: AccountUpdate = Body(...)
):
    account = {k: v for k, v in account.dict().items() if v is not None}

    if len(account) >= 1:
        update_result = request.app.db["accounts"].update_one(
            {"username": username}, {"$set": account}
        )

        if update_result.modified_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Account with username {username} not found",
            )

    if (
        existing_account := request.app.db["accounts"].find_one(
            {"username": username}
        )
    ) is not None:
        return existing_account

    # else:
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Account with username {username} not found",
    )


@router.delete("/accounts/{username}")
def delete_account(request: Request, username: str):
    account = request.app.db["accounts"].delete_one({"username": username})
    if account:
        return True
    raise HTTPException(404, "Account does not exist")
