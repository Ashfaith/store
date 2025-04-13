import { Link } from "react-router";
import products from "../products";
import Tile from "../utils/Tile";

const Store = () => {
  const items = products.map((product) => (
    <Tile product={product}>{product}</Tile>
  ));

  return (
    <>
      <p>You're looking at the Store</p>
      <div className="product-grid">{items}</div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Store;
