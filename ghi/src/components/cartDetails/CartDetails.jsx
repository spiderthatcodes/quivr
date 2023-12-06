import { Wrapper, CartContainer } from "./style";

const CartDetails = ({ order, setShowCart, addToCart }) => {
  const price = "$849";

  return (
    <>
      <Wrapper>
        <CartContainer>
          {addToCart.length === 0 ? (
            <h2>Your cart is currently empty</h2>
          ) : (
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
          )}
        </CartContainer>
        <button onClick={() => setShowCart(false)}>Close</button>
        <br />
        <button onClick={() => console.log("pay-me")}>Checkout</button>
      </Wrapper>
    </>
  );
};

export default CartDetails;
