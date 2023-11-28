import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import OrderRow from '../components/OrderRow';
import { useGetAllOrdersQuery } from '../app/ordersSlice';
import { useGetAccountsByRoleQuery } from '../app/authSlice';

const OrderHistory = () => {
    const { data } = useGetAllOrdersQuery();
    const roles = useGetAccountsByRoleQuery('shaper');
    console.log(roles);
    const [orders, setOrders] = useState([]);
    console.log(data);
    useEffect(() => {
        // filtering will need to be included here once accounts works in redux
        data && setOrders(data);
    }, [data]);
    let role = 'admin';

    return (
        <Wrapper>
            <table>
                <thead>
                    <tr>
                        <th>Order Date</th>
                        {role !== 'customer' && <th>Customer Name</th>}
                        {role !== 'shaper' && <th>Shaper Name</th>}
                        <th>Surfboard Model</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, index) => (
                        <OrderRow
                            item={item}
                            role={role}
                            key={index}
                        />
                    ))}
                </tbody>
            </table>
        </Wrapper>
    );
};

export default OrderHistory;
