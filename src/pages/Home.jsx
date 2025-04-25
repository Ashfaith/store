import { Container, Grid, GridCol, SimpleGrid, Skeleton } from "@mantine/core";

const PRIMARY_COL_HEIGHT = "500px";

function Home({ loading }) {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container size="xl" my="md">
      <div
        className="hero"
        style={{
          height: PRIMARY_COL_HEIGHT,
          width: "100%",
          borderRadius: "var(--mantine-radius-sm)",
          backgroundImage:
            "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "18em",
          backgroundPositionX: "right 8rem",
          backgroundPositionY: "top 2.5rem",
          marginBottom: "15px",
          boxShadow: "var(--mantine-shadow-sm)",
          border: "1px solid rgb(214, 213, 213)",
        }}
      >
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
              style={{
                background: "red",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "var(--mantine-radius-md)",
              }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <div
              style={{
                background: "blue",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "var(--mantine-radius-md)",
              }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <div
              style={{
                background: "blue",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "var(--mantine-radius-md)",
              }}
            />
          </Grid.Col>
        </Grid>

        {/* Reversed block */}
        <Grid>
          <Grid.Col span={6}>
            <div
              style={{
                background: "blue",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "var(--mantine-radius-md)",
              }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <div
              style={{
                background: "blue",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "var(--mantine-radius-md)",
              }}
            />
          </Grid.Col>
          <Grid.Col>
            <div
              style={{
                background: "red",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "var(--mantine-radius-md)",
              }}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default Home;
