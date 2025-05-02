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
    <Drawer
      opened={opened}
      onClose={onClose}
      position="right"
      withCloseButton={false}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "1rem",
          borderBottom: "1px solid rgb(221, 221, 221)",
          marginBottom: "1rem",
        }}
      >
        <h2>CART</h2>
        <Button onClick={clearCart}>Clear Cart</Button>
      </div>
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
    </Drawer>
  );
};

export default Cart;
