import { Link } from "react-router";
import Tile from "../utils/Tile";
import { useState, useEffect } from "react";

const Store = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const tileContent = items.map((item) => {
    console.log(item);
    return <Tile product={item} />;
  });

  return (
    <>
      <p>You're looking at the Store</p>
      <div className="product-grid">{tileContent}</div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Store;
