import { Button } from "@mantine/core";

const CartTile = ({ product, onQuantityChange }) => {
  const imgSrc = product.image;

  return (
    <div className="cart-item">
      <div className="cart-img-container">
        <img src={imgSrc} alt="loading.." />
      </div>
      <p>{product.title}</p>
      <p>quantity {product.quantity}</p>
      <div>
        <Button onClick={() => onQuantityChange("+")}>+</Button>
        <Button onClick={() => onQuantityChange("-")}>-</Button>
      </div>
    </div>
  );
};

export default CartTile;
