const CartTile = ({ product }) => {
  const imgSrc = product.image;

  return (
    <div className="cart-item">
      <div className="cart-img-container">
        <img src={imgSrc} alt="loading.." />
      </div>
      <p>{product.title}</p>
    </div>
  );
};

export default CartTile;
