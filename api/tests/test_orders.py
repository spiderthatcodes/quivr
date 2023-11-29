from fastapi.testclient import TestClient
from main import app
from routes.orders import list_orders


client = TestClient(app)


class EmptyOrderQueries:
    def get_orders(self):
        return []


def test_list_orders():
    # Arrange
    app.dependency_overrides[list_orders] = EmptyOrderQueries

    response = client.get("/orders/")
    print(response)

    # Act
    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert response.json() == {"orders": []}


# def get_all_orders(self):
# result = list(app.db.orders.find())
# for value in result:
#     value["id"] = str(value["_id"])
#     # value["id"] = value["_id"]
#     print(value["id"])
# return result

# def create_order(self, data):
#     result = app.db.orders.insert_one(data.dict())
#     if result.inserted_id:
#         result = self.get_all_orders(result.inserted_id)
#         result["id"] = str(result["_id"])
#         return result


# class CreateOrderQueries:
#     def create_order(self, order):
#         result = {
#             "id": "xoxox10",
#             "date": "2023-11-21",
#             "order_status": "Order received!",
#             "surfboard_shaper": "michael",
#             "surfboard_model": "laser",
#             "surfboard_length": 13,
#             "surfboard_width": 24,
#             "surfboard_thickness": 4,
#             "surfboard_construction": "PU",
#             "surfboard_fin_system": "FCS1",
#             "surfboard_fin_count": 5,
#             "surfboard_tail_style": "squash",
#             "surfboard_glassing": "4 + 4 x 4",
#             "surfboard_desc": "string",
#         }
#         result.update(order)
#         return result


# def test_create_order():
#     app.dependency_overrides[OrderQueries] = CreateOrderQueries

#     json = {
#         "date": "2023-11-21",
#         "order_status": "Order received!",
#         "surfboard_shaper": "michael",
#         "surfboard_model": "laser",
#         "surfboard_length": 13,
#         "surfboard_width": 24,
#         "surfboard_thickness": 4,
#         "surfboard_construction": "PU",
#         "surfboard_fin_system": "FCS1",
#         "surfboard_fin_count": 5,
#         "surfboard_tail_style": "squash",
#         "surfboard_glassing": "4 + 4 x 4",
#         "surfboard_desc": "string",
#     }

#     expected = {
#         # "_id": "2bf91796-006f-4f41-ace0-d16b49707913",
#         "date": "2023-11-21",
#         "order_status": "Order received!",
#         "surfboard_shaper": "michael",
#         "surfboard_model": "laser",
#         "surfboard_length": 13,
#         "surfboard_width": 24,
#         "surfboard_thickness": 4,
#         "surfboard_construction": "PU",
#         "surfboard_fin_system": "FCS1",
#         "surfboard_fin_count": 5,
#         "surfboard_tail_style": "squash",
#         "surfboard_glassing": "4 + 4 x 4",
#         "surfboard_desc": "string",
#     }

#     # Act
#     response = app.client.post("/orders", json=json)

#     app.dependency_overrides = {}

#     # Assert
#     assert response.status_code == 200
#     assert response.json() == expected


# def test_init():
#     assert 1 == 1
