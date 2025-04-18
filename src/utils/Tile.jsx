import { Card, Image, Text, Button, Flex, Box } from "@mantine/core";

const Tile = ({ product, addItems }) => {
  const handleAddClick = () => {
    addItems(product);
  };

  return (
    <Flex direction="column">
      <Card
        shadow="sm"
        padding={0}
        radius="md"
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
        <Box mt="auto" bg="grey">
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
                {product.title}
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
              style={{ marginLeft: "auto" }}
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
