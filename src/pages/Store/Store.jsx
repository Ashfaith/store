import Tile from "../../utils/Tile";
import { Container, Grid, Skeleton, Flex, Center } from "@mantine/core";
import styles from "./Store.module.css";
import { ShopContext } from "../../App";
import { useContext } from "react";

const Store = ({ setCartItems }) => {
  const addItemsToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const { storeItems } = useContext(ShopContext);

  const tileContent =
    storeItems.length === 0
      ? /* prettier-ignore */
        Array.from({ length: 6 }).map((_, index) => (
          <Grid.Col span={4}>
            <Skeleton w={400} h={425} radius="md" animate={false} />
          </Grid.Col>
        ))
      : storeItems.map((item) => (
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
      </Container>
    </>
  );
};

export default Store;
