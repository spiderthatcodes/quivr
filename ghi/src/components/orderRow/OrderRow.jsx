import { TR } from './style';

const OrderRow = ({ setShowDetails, item, role, setDetailedOrder }) => {
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
                onClick={() => {
                    setDetailedOrder(item);
                    setShowDetails(true);
                }}
            >
                <span id='hoverDetail'>Details</span>
            </td>
        </TR>
    );
};

export default OrderRow;
