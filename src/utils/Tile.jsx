import {
  Card,
  Image,
  Text,
  Button,
  Flex,
  Box,
  useMantineTheme,
} from "@mantine/core";

const Tile = ({ product, addItems }) => {
  const handleAddClick = () => {
    addItems(product);
  };

  const checkTitleLength = (title) => {
    const originalStr = title;
    const strToArr = originalStr.split(" ");
    let shortenedStr = originalStr;
    if (strToArr.length > 5) {
      shortenedStr = strToArr.slice(0, 5).join(" ") + "...";
    }
    return shortenedStr;
  };

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
              <Text
                weight={1000}
                size="md"
                lineClamp={2}
                ta="left"
                ml={8}
                mt={5}
              >
                {checkTitleLength(product.title)}
              </Text>
              <Text
                weight={1000}
                size="md"
                lineClamp={2}
                ta="left"
                ml={8}
                mb={5}
              >
                {product.price}
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
  );
};

export default Tile;
