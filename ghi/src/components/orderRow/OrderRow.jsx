import { TR } from './style';

const OrderRow = ({
    setShowDetails,
    item,
    role,
    status,
    setDetailedOrder,
    setShowModal,
}) => {
    let tempstatus = 'Completed';
    console.log(item);
    return (
        <TR>
            <td>{item.date}</td>
            {role !== 'customer' && <td>{item.customer}</td>}
            {role !== 'shaper' && <td>{item.shaper}</td>}
            <td>{item.surfboard_length}</td>
            <td>{item.surfboard_width}</td>
            <td>{item.surfboard_thickness}</td>
            <td>{item.order_status}</td>
            {tempstatus === 'Completed' && role === 'customer' && (
                <td onClick={() => setShowModal(true)}>Add Review</td>
            )}
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
