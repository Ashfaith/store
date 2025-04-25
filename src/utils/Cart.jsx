import CartTile from "./CartTile";
import { Drawer } from "@mantine/core";

const Cart = ({ cartItems, opened, onClose, setCartItems }) => {
  const removeItem = (indexToRemove) =>
    setCartItems((prevCart) => prevCart.filter((_, i) => i !== indexToRemove));

  const handleQuantity = (index, operator) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item, i) => {
        if (i === index) {
          let newQuantity =
            operator === "+" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedCart.filter((item) => item.quantity > 0);
    });
  };

  return (
    <>
      <Drawer opened={opened} onClose={onClose} position="right">
        <h2>CART</h2>
        {cartItems.map((cartItem, index) => {
          return (
            <CartTile
              onQuantityChange={(operator) => handleQuantity(index, operator)}
              key={index}
              product={cartItem}
            />
          );
        })}
      </Drawer>
    </>
  );
};

export default Cart;
