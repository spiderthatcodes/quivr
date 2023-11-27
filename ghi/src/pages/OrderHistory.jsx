import React from "react";
import { Wrapper } from "./style";
import OrderRow from "../components/OrderRow";
import { useGetAllOrdersQuery } from "../app/ordersSlice";

const mockData = [
  {
    customer: "Jane Doe",
    shaper: "Mike Lee",
    date: "5/1/83",
    surfboard_model: "placeholder text",
    order_status: "Foam being cut!",
  },
  {
    customer: "Jane Doe",
    shaper: "Christopher Lee",
    date: "7/13/95",
    surfboard_model: "placeholder text",
    order_status: "Order received!",
  },
];

const OrderHistory = () => {
  const orders = useGetAllOrdersQuery();
  console.log(orders);
  let role = "admin";
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Order Date</th>
            {role !== "customer" && <th>Customer Name</th>}
            {role !== "shaper" && <th>Shaper Name</th>}
            <th>Surfboard Model</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <OrderRow item={item} role={role} key={index} />
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default OrderHistory;
