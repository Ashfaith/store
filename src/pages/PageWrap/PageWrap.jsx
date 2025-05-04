import { Link } from "react-router";
import { Outlet } from "react-router";
import { Container, Autocomplete, Flex, Center } from "@mantine/core";
import styles from "./PageWrap.module.css";
import {
  IconSearch,
  IconShoppingCart,
  IconShoppingCartFilled,
} from "@tabler/icons-react";

const Wrapper = ({ open, cartItems }) => {
  return (
    <Container m={0} p={0} fluid>
      <Center href="#" className={styles.header}>
        <Flex pt={10} pb={10} ml={32} w="70%" direction="row">
          <h2>_ThisStore</h2>

          <Flex ml={65} direction="row" gap="xl" m={28}>
            <div>
              <Link href="#" className={styles.noUnderline} to="/">
                Home
              </Link>
            </div>
            <div>
              <Link href="#" className={styles.noUnderline} to="store">
                Store
              </Link>
            </div>
          </Flex>

          <Autocomplete
            data={["Search coming soon!"]}
            mt={22}
            mr="xl"
            ml="auto"
            placeholder="Search..."
            w={400}
            rightSection={<IconSearch stroke={2} style={{ color: "black" }} />}
          />
        </Flex>

        {cartItems.length === 0 ? (
          <IconShoppingCart onClick={open} className={styles.cart} />
        ) : (
          <div onClick={open} className={styles.cartIconCont}>
            <IconShoppingCartFilled
              style={{ position: "relative", zIndex: "1" }}
              className={styles.cart}
            />
            <h3 className={styles.cartItemCount}>{cartItems.length}</h3>
          </div>
        )}
      </Center>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Wrapper;
