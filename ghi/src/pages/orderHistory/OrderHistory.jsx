import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllOrdersQuery } from '../../app/ordersSlice';
import { useGetTokenQuery } from '../../app/authSlice';
import OrderRow from '../../components/orderRow/OrderRow';
import OrderDetails from '../../components/orderDetails/OrderDetails';
import ReviewModal from '../../components/reviewModal/ReviewModal';
import { Wrapper, Table, LandBackground } from '../../constants';

const OrderHistory = () => {
    const navigate = useNavigate();
    const { data: account, isLoading } = useGetTokenQuery();
    const { data: allOrders, isLoading: ordersLoading } =
        useGetAllOrdersQuery();
    const [orders, setOrders] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [detailedOrder, setDetailedOrder] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!isLoading && !account) {
            navigate('/');
        }
        if (allOrders && account?.role === 'customer') {
            let orderlist = allOrders.orders;
            let list = orderlist.filter(
                (item) => item.customer_username === account.username
            );
            setOrders(list);
        } else if (allOrders && account?.role === 'shaper') {
            let orderlist = allOrders.orders;
            let list = orderlist.filter(
                (item) => item.surfboard_shaper === account.username
            );
            setOrders(list);
        } else {
            !ordersLoading && setOrders(allOrders.orders);
        }
    }, [account, allOrders, isLoading, navigate, ordersLoading]);

    if (isLoading || ordersLoading)
        return (
            <Wrapper>
                <h1>Loading...</h1>
            </Wrapper>
        );

    return (
        <LandBackground>
            <Wrapper>
                {showModal && <ReviewModal setShowModal={setShowModal} />}
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
                                    {account.role !== 'customer' && (
                                        <th>Customer</th>
                                    )}
                                    {account.role !== 'shaper' && (
                                        <th>Shaper</th>
                                    )}
                                    <th>Length</th>
                                    <th>Width</th>
                                    <th>Thickness</th>
                                    <th>Order Status</th>
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
                                        setShowModal={setShowModal}
                                    />
                                ))}
                            </tbody>
                        </Table>
                    </>
                )}
            </Wrapper>
        </LandBackground>
    );
};

export default OrderHistory;
