import CartTile from "./cartTile";
import { Drawer } from "@mantine/core";

const Cart = ({ cartItems, open, setOpen }) => {
  return (
    <>
      <Drawer opened={open} onClose={() => setOpen(false)}>
        <h2>CART</h2>
        {cartItems.map((cartItem) => {
          return <CartTile product={cartItem} />;
        })}
      </Drawer>
    </>
  );
};

export default Cart;
