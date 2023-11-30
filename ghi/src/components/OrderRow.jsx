import React, { useState } from "react";
import { Container } from "./style";

const OrderRow = ({ setShowDetails, item, role, status, setDetailedOrder }) => {
  return (
    <Container>
      <tr>
        <td>{item.date}</td>
        {role !== "customer" && <td>{item.customer}</td>}
        {role !== "shaper" && <td>{item.shaper}</td>}
        <td>{item.surfboard_length}</td>
        <td>{item.surfboard_width}</td>
        <td>{item.surfboard_thickness}</td>
        <td>{item.order_status}</td>
        <td id="hoverDetail"
          onClick={() => {
            setDetailedOrder(item);
            setShowDetails(true);
          }}
        >
          Details
        </td>
      </tr>
    </Container>
  );
};

export default OrderRow;
