import {
  Card,
  Image,
  Text,
  Button,
  Flex,
  Box,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router";
import { toUrlSlug, limitTitleLength } from "./helpers";
import { useContext } from "react";
import { ShopContext } from "../App";

const Tile = ({ product, addItems }) => {
  const handleAddClick = () => {
    addItems(product);
  };

  const { getProductData } = useContext(ShopContext);

  const theme = useMantineTheme();

  return (
    <Flex direction="column">
      <Card
        shadow="sm"
        padding={0}
        radius="sm"
        withBorder
        style={{ width: 400, height: 425 }}
      >
        <Link
          to={`/product-page/${toUrlSlug(product.url)}`}
          onClick={() => getProductData(product)}
        >
          <Card.Section mt={40}>
            <Image
              src={product.image}
              height={250}
              alt={product.title}
              fit="contain"
            />
          </Card.Section>
        </Link>
        <Box mt="auto" style={{ backgroundColor: theme.colors.gray[1] }}>
          <Flex h="100%">
            <Flex direction="column" h="100%">
              <Link
                to={`/product-page/${toUrlSlug(product.url)}`}
                onClick={() => getProductData(product)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Text fw={1000} size="md" lineClamp={2} ta="left" ml={8} mt={5}>
                  {limitTitleLength(product.title, 4, 4)}
                </Text>
                <Text fw={1000} size="md" lineClamp={2} ta="left" ml={8} mb={5}>
                  ${product.price}
                </Text>
              </Link>
            </Flex>

            <Button
              h="100%"
              mt="auto"
              radius="xs"
              style={{
                marginLeft: "auto",
                backgroundColor: theme.colors.gray[5],
              }}
              onClick={handleAddClick}
            >
              +
            </Button>
          </Flex>
        </Box>
      </Card>
    </Flex>
  );
};

export default Tile;
