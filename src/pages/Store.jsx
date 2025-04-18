import { Link } from "react-router-dom";
import Tile from "../utils/Tile";
console.log("Tile component:", Tile);
import { useState, useEffect } from "react";
import { Container, Grid, Skeleton } from "@mantine/core";

const Store = ({ setCartItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const addItemsToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const tileContent =
    items.length === 0
      ? /* prettier-ignore */
        Array.from({ length: 6 }).map((_, index) => {
          <Grid.Col span={{ base: 12, xs: 4, lg: 3}}>
            <Skeleton height={140} radius="md" animate={false} />
          </Grid.Col>
        })
      : items.map((item) => {
          return (
            <Grid.Col span={{ base: 12, xs: 4, lg: 4 }}>
              <Tile product={item} addItems={addItemsToCart} />
            </Grid.Col>
          );
        });

  return (
    <Container fluid>
      <p>You're looking at the Store</p>
      <Grid>{tileContent}</Grid>
      <Link to="/">Home</Link>
    </Container>
  );
};

export default Store;
