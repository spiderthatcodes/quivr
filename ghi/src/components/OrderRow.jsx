import React from 'react';

const OrderRow = ({ item, role }) => {
    return (
        <tr>
            <td>{item.date}</td>
            {role !== 'customer' && <td>{item.customer}</td>}
            {role !== 'shaper' && <td>{item.shaper}</td>}
            <td>{item.surfboard_model}</td>
            <td>{item.order_status}</td>
        </tr>
    );
};

export default OrderRow;
