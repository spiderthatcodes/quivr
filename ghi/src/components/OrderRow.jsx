import React from 'react';
import { TR } from './style';

const OrderRow = ({ setShowDetails, item, role, status, setDetailedOrder }) => {
    return (
        <TR>
            <td>{item.date}</td>
            {role !== 'customer' && <td>{item.customer}</td>}
            {role !== 'shaper' && <td>{item.shaper}</td>}
            <td>{item.surfboard_length}</td>
            <td>{item.surfboard_width}</td>
            <td>{item.surfboard_thickness}</td>
            <td>{item.order_status}</td>
            <td
                id='hoverDetail'
                onClick={() => {
                    setDetailedOrder(item);
                    setShowDetails(true);
                }}
            >
                Details
            </td>
        </TR>
    );
};

export default OrderRow;
