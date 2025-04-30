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
import { toUrlSlug } from "./helpers";
import { useContext } from "react";
import { ShopContext } from "../App";

const Tile = ({ product, addItems }) => {
  const handleAddClick = () => {
    addItems(product);
  };

  const { getProductData } = useContext(ShopContext);

  const checkTitleLength = (title) => {
    const originalStr = title;
    const strToArr = originalStr.split(" ");
    let shortenedStr = originalStr;
    if (strToArr.length > 4) {
      shortenedStr = strToArr.slice(0, 4).join(" ") + "...";
    }
    return shortenedStr;
  };

  const theme = useMantineTheme();

  return (
    <Link
      to={`/product-page/${toUrlSlug(product.title)}`}
      onClick={() => getProductData(product)}
    >
      <Flex direction="column">
        <Card
          shadow="sm"
          padding={0}
          radius="sm"
          withBorder
          style={{ width: 400, height: 425 }}
        >
          <Card.Section mt={40}>
            <Image
              src={product.image}
              height={250}
              alt={product.title}
              fit="contain"
            />
          </Card.Section>
          <Box mt="auto" style={{ backgroundColor: theme.colors.gray[1] }}>
            <Flex h="100%">
              <Flex direction="column" h="100%">
                <Text fw={1000} size="md" lineClamp={2} ta="left" ml={8} mt={5}>
                  {checkTitleLength(product.title)}
                </Text>
                <Text fw={1000} size="md" lineClamp={2} ta="left" ml={8} mb={5}>
                  ${product.price}
                </Text>
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
    </Link>
  );
};

export default Tile;
