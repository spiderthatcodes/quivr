from queries.client import MongoQueries
from models.Accounts import AccountIn, AccountOutWithHashedPassword


class DuplicateAccountError(ValueError):
    pass


class AccountQueries(MongoQueries):
    collection_name = "accounts"

    def create(self, info: AccountIn, hashed_password: str):
        account = info.dict()
        if self.get_one_by_username(account["username"]):
            raise DuplicateAccountError
        account["hashed_password"] = hashed_password
        del account["password"]
        response = self.collection.insert_one(account)
        if response.inserted_id:
            account["id"] = str(response.inserted_id)
        return AccountOutWithHashedPassword(**account)

    def get_one_by_username(self, username: str):
        result = self.collection.find_one({"username": username})
        if result is None:
            return None
        result["id"] = str(result["_id"])
        return AccountOutWithHashedPassword(**result)
