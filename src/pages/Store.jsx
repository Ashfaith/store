import { Link } from "react-router-dom";
import Tile from "../utils/Tile";
console.log("Tile component:", Tile);
import { useState, useEffect } from "react";
import { Container, Grid, Skeleton, Flex, Center } from "@mantine/core";

const Store = ({ setCartItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  const addItemsToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const tileContent =
    items.length === 0
      ? /* prettier-ignore */
        Array.from({ length: 6 }).map((_, index) => (
          <Grid.Col span={{ base: 12, xs: 4, lg: 3}}>
            <Skeleton height={140} radius="md" animate={false} />
          </Grid.Col>
        ))
      : items.map((item) => (
          <Grid.Col span={4}>
            <Center>
              <Tile product={item} addItems={addItemsToCart} />
            </Center>
          </Grid.Col>
        ));

  return (
    <>
      <h2>All Products</h2>
      <Container size="xl">
        <Grid>{tileContent}</Grid>
        <Link to="/">Home</Link>
      </Container>
    </>
  );
};

export default Store;
