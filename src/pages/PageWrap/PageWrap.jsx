import { Link } from "react-router";
import { Outlet } from "react-router";
import { Container, Autocomplete, Flex, Center, Button } from "@mantine/core";
import styles from "./PageWrap.module.css";
import { IconSearch } from "@tabler/icons-react";

const Wrapper = ({ setOpen }) => {
  const handleOpenClick = () => {
    setOpen(true);
  };

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
            <div>
              <Link href="#" className={styles.noUnderline} to="cart">
                Cart
              </Link>
            </div>
          </Flex>

          <Button variant="default" onClick={handleOpenClick}>
            Cart
          </Button>

          <Autocomplete
            mt={22}
            mr="xl"
            ml="auto"
            placeholder="Search..."
            w={400}
            rightSection={<IconSearch stroke={2} style={{ color: "black" }} />}
          />
        </Flex>
      </Center>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Wrapper;
