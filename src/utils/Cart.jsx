import CartTile from "./CartTile";
import { Drawer, Button } from "@mantine/core";

const Cart = ({ cartItems, opened, onClose, setCartItems }) => {
  const clearCart = () => setCartItems([]);

  const handleRemove = (indexToRemove) => {
    setCartItems((currentCart) =>
      currentCart.filter((_, i) => i !== indexToRemove)
    );
  };

  const handleQuantity = (index, operator) => {
    setCartItems((currentCart) => {
      const updatedCart = currentCart.map((item, i) => {
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
              onRemoveClick={() => handleRemove(index)}
            />
          );
        })}
        <Button onClick={clearCart}>Clear Cart</Button>
      </Drawer>
    </>
  );
};

export default Cart;
