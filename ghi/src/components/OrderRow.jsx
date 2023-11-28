import React, { useState } from 'react';
import OrderDetails from '../pages/OrderDetails';

const OrderRow = ({ item, role }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <>
            {showDetails && <OrderDetails order={item} />}
            <tr>
                <td>{item.date}</td>
                {role !== 'customer' && <td>{item.customer}</td>}
                {role !== 'shaper' && <td>{item.shaper}</td>}
                <td>{item.surfboard_model}</td>
                <td>{item.order_status}</td>
                <td onClick={() => setShowDetails(true)}>Details</td>
            </tr>
        </>
    );
};

export default OrderRow;
