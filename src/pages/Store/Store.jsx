import { Link } from "react-router-dom";
import Tile from "../../utils/Tile";
console.log("Tile component:", Tile);
import { useState, useEffect } from "react";
import { Container, Grid, Skeleton, Flex, Center } from "@mantine/core";
import styles from "./Store.module.css";

const Store = ({ setCartItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const itemWithQuant = data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setItems(itemWithQuant);
      });
  }, []);

  const addItemsToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const tileContent =
    items.length === 0
      ? /* prettier-ignore */
        Array.from({ length: 6 }).map((_, index) => (
          <Grid.Col span={4}>
            <Skeleton w={400} h={425} radius="md" animate={false} />
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
      <div href="#" className={styles.productHeadingCont}>
        <h1>All Products</h1>
      </div>
      <Container size="xl">
        <Grid>{tileContent}</Grid>
        <Link to="/">Home</Link>
      </Container>
    </>
  );
};

export default Store;
