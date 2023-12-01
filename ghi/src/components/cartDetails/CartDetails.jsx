import { Container, DetailsContainer } from "./style";

const CartDetails = ({ order, setShowCart }) => {
  const price = "$849";

  return (
    <>
      <Container>
        <DetailsContainer>
          <table>
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order &&
                order.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {item.surfboard_shaper} {item.surfboard_model}
                        {item.surfboard_length} x {item.surfboard_width} x
                        {item.surfboard_thickness}, description:
                        {item.surfboard_desc}
                      </td>
                      <td>{price}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </DetailsContainer>
        <button onClick={() => setShowCart(false)}>Close</button>
        <br />
        <button onClick={() => console.log("pay-me")}>Checkout</button>
      </Container>
    </>
  );
};

export default CartDetails;
