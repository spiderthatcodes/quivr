import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllOrdersQuery } from "../../app/ordersSlice";
import { useGetTokenQuery } from "../../app/authSlice";
import OrderRow from "../../components/orderRow/OrderRow";
import OrderDetails from "../../components/orderDetails/OrderDetails";
import { ImgBackground } from "./style";
import { Wrapper, Table } from "../../constants";

const OrderHistory = () => {
  const navigate = useNavigate();
  const { data: account, isLoading } = useGetTokenQuery();
  const { data: allOrders, isLoading: ordersLoading } = useGetAllOrdersQuery();
  const [orders, setOrders] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [detailedOrder, setDetailedOrder] = useState({});

  useEffect(() => {
    if (!isLoading && !account) {
      navigate("/");
    }
    if (!ordersLoading && account?.role === "customer") {
      let list = allOrders.filter(
        (item) => item.customer_id === account.username
      );
      setOrders(list);
    } else if (!ordersLoading && account?.role === "shaper") {
      let list = allOrders.filter(
        (item) => item.surfboard_shaper === account.username
      );
      setOrders(list);
    } else {
      !ordersLoading && setOrders(allOrders);
    }
  }, [account, allOrders, isLoading, navigate, ordersLoading]);

  if (isLoading || ordersLoading)
    return (
      <ImgBackground>
        <Wrapper>
          {account && (
            <>
              <OrderDetails
                order={detailedOrder}
                showDetails={showDetails}
                setShowDetails={setShowDetails}
              />
              <Table>
                <thead>
                  <tr>
                    <th>Order Date</th>
                    {account.role !== "customer" && <th>Customer</th>}
                    {account.role !== "shaper" && <th>Shaper</th>}
                    <th>Length</th>
                    <th>Width</th>
                    <th>Thinkness</th>
                    <th>Order Status</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, index) => (
                    <OrderRow
                      item={item}
                      role={account.role}
                      key={index}
                      status={item.order_status}
                      setShowDetails={setShowDetails}
                      setDetailedOrder={setDetailedOrder}
                    />
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Wrapper>
      </ImgBackground>
    );

  return (
    <ImgBackground>
      <Wrapper>
        {account && (
          <>
            <OrderDetails
              order={detailedOrder}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
            <Table>
              <thead>
                <tr>
                  <th>Order Date</th>
                  {account.role !== "customer" && <th>Customer</th>}
                  {account.role !== "shaper" && <th>Shaper</th>}
                  <th>Length</th>
                  <th>Width</th>
                  <th>Thickness</th>
                  <th>Order Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <OrderRow
                    item={item}
                    role={account.role}
                    key={index}
                    status={item.order_status}
                    setShowDetails={setShowDetails}
                    setDetailedOrder={setDetailedOrder}
                  />
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Wrapper>
    </ImgBackground>
  );
};

export default OrderHistory;
