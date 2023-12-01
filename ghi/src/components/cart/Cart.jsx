import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = ({ cartCount, setShowCart }) => {
  // test being able to click on cart:
  const handleClick = () => {
    setShowCart(true);
  };

  return (
    // clicking on this should activate the 'slider panel'
    <div onClick={() => handleClick()}>
      <Badge color="primary" badgeContent={cartCount}>
        {/* <Badge style={{ color: 'white' }} badgeContent={count}> */}
        <ShoppingCartIcon />{" "}
      </Badge>
    </div>
  );
};

export default Cart;
