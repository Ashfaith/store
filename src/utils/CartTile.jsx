import { Box, Button, Container } from "@mantine/core";
import { limitTitleLength } from "./helpers";
import { IconTrash } from "@tabler/icons-react";

const CartTile = ({ product, onQuantityChange, onRemoveClick }) => {
  const imgSrc = product.image;

  return (
    <div
      style={{
        width: "100%",
        height: "15%",
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid rgb(221, 221, 221)",
        padding: "1rem",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        paddingBottom: "2rem",
        marginBottom: "1rem",
      }}
    >
      <div style={{ minWidth: "80px" }}>
        <img
          style={{
            height: "5.5rem",
            display: "flex",
          }}
          src={imgSrc}
          alt="loading.."
        />
      </div>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          margin: "0",
        }}
      >
        <span style={{ fontSize: "small" }}>
          {limitTitleLength(product.title.toUpperCase(), 4, 5)}
        </span>

        <div
          style={{
            width: "6rem",
            height: "1.9rem",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Button
            onClick={() => onQuantityChange("+")}
            size="compact-md"
            radius="xs"
            color="rgb(221, 221, 221)"
          >
            +
          </Button>
          <Box
            w="40%"
            h="100%"
            bd="1px solid rgb(221, 221, 221)"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>{product.quantity}</span>
          </Box>
          <Button
            onClick={() => onQuantityChange("-")}
            size="compact-md"
            radius="xs"
            color="rgb(221, 221, 221)"
          >
            -
          </Button>
        </div>
      </Container>

      <Button
        onClick={() => onRemoveClick()}
        size="compact-xs"
        style={{
          marginLeft: "auto",
          marginBottom: "auto",
          background: "none",
          color: "rgb(221, 221, 221)",
        }}
      >
        <IconTrash stroke={2} />
      </Button>
    </div>
  );
};

export default CartTile;
