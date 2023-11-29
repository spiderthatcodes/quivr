import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllOrdersQuery } from '../app/ordersSlice';
import { useGetTokenQuery } from '../app/authSlice';
import OrderRow from '../components/OrderRow';
import { Wrapper } from './style';

const OrderHistory = () => {
    const navigate = useNavigate();
    const { data: account, isLoading } = useGetTokenQuery();
    const { data: allOrders, isLoading: ordersLoading } =
        useGetAllOrdersQuery();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!isLoading && !account) {
            navigate('/');
        }
        if (!ordersLoading && account.role === 'customer') {
            let list = allOrders.filter(
                (item) => item.customer_id === account.username
            );
            setOrders(list);
        } else if (!ordersLoading && account.role === 'shaper') {
            let list = allOrders.filter(
                (item) => item.surfboard_shaper === account.username
            );
            setOrders(list);
        } else {
            !ordersLoading && setOrders(allOrders);
        }
    }, [account, allOrders, isLoading, navigate, ordersLoading]);

    if (isLoading || ordersLoading) return <div>Loading...</div>;

    return (
        <Wrapper>
            {account && (
                <table>
                    <thead>
                        <tr>
                            <th>Order Date</th>
                            {account.role !== 'customer' && (
                                <th>Customer Name</th>
                            )}
                            {account.role !== 'shaper' && <th>Shaper Name</th>}
                            <th>Surfboard Model</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item, index) => (
                            <OrderRow
                                item={item}
                                role={account.role}
                                key={index}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </Wrapper>
    );
};

export default OrderHistory;
