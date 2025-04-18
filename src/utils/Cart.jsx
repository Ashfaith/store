import CartTile from "./cartTile";
const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>CART</h2>
      {cartItems.map((cartItem) => {
        return <CartTile product={cartItem} />;
      })}
    </div>
  );
};

export default Cart;
