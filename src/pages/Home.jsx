import { Container, Grid, GridCol, SimpleGrid, Skeleton } from "@mantine/core";
import { useContext } from "react";
import { ShopContext } from "../App";

const PRIMARY_COL_HEIGHT = "500px";

function Home() {
  const { storeItems } = useContext(ShopContext);

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container size="xl" my="md">
      {!storeItems.length || storeItems.some((item) => !item?.image) ? (
        <p>Loading...</p>
      ) : (
        <>
          <div
            className="hero"
            style={{
              height: PRIMARY_COL_HEIGHT,
              width: "100%",
              borderRadius: "var(--mantine-radius-sm)",
              marginBottom: "15px",
              boxShadow: "var(--mantine-shadow-sm)",
              border: "1px solid rgb(214, 213, 213)",
            }}
          >
            <img className="grid-image" src={storeItems[0].image} />
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "-15rem",
              }}
            >
              <h1>100X100 SALE ON NOW</h1>
              <h3>100% off 100% of store items</h3>
            </div>
          </div>

          <SimpleGrid cols={{ base: 2, sm: 2 }} spacing="md">
            <Grid gutter="md">
              <Grid.Col>
                <div
                  className="grid-box horizontal"
                  style={{
                    height: SECONDARY_COL_HEIGHT,
                  }}
                >
                  <img
                    className="grid-image"
                    src={storeItems[13].image}
                    alt=""
                  />
                  <h5>WE SELL EVERYTHING</h5>
                </div>
              </Grid.Col>
            </Grid>

            {/* Reversed block */}
            <Grid>
              <Grid.Col span={6}>
                <div
                  className="grid-box square"
                  style={{
                    height: SECONDARY_COL_HEIGHT,
                  }}
                >
                  <img
                    className="grid-image"
                    src={storeItems[1].image}
                    alt=""
                  />
                  <h5>CLOTHES TOO</h5>
                </div>
              </Grid.Col>
              <Grid.Col span={6}>
                <div
                  className="grid-box square"
                  style={{
                    height: SECONDARY_COL_HEIGHT,
                  }}
                >
                  <img
                    className="grid-image"
                    src={storeItems[2].image}
                    alt=""
                  />
                  <h5>MORE CLOTHES</h5>
                </div>
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </>
      )}
    </Container>
  );
}

export default Home;
