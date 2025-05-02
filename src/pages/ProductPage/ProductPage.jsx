import { Carousel } from "@mantine/carousel";
import { Container, Accordion, Button } from "@mantine/core";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../App";
import { capitaliseFirstLetter } from "../../utils/helpers";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { storeItems, fetchProduct } = useContext(ShopContext);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.substring(path.lastIndexOf("/") + 1);
    setPageUrl(slug);
  }, []);

  if (!pageUrl || storeItems.length === 0) {
    return <div>Loading...</div>;
  }

  const currentItem = storeItems.find((item) => item.url === pageUrl);

  const handleAddClick = () => {
    fetchProduct(currentItem);
  };

  return (
    <Container href="#" className={styles.container}>
      <Carousel
        className={styles.carousel}
        withIndicators
        styles={{
          viewport: {
            maxWidth: "100%",
            overflow: "hidden",
          },
          container: {
            maxWidth: "100%",
          },
        }}
      >
        <Carousel.Slide className={styles.slide}>
          <img className={styles.img} src={currentItem.image} alt="Product" />
        </Carousel.Slide>
        <Carousel.Slide>
          <h1>ANOTHER COOL IMAGE</h1>
        </Carousel.Slide>
      </Carousel>

      <div className={styles.infoCont}>
        <span>{currentItem.title.toUpperCase()}</span>
        <span>${currentItem.price}</span>
        <Accordion w="100%">
          <Accordion.Item value={currentItem.id.toString()}>
            <Accordion.Control className={styles.dropInfo}>
              <span>DESCRIPTION</span>
            </Accordion.Control>
            <Accordion.Panel className={styles.panel}>
              {capitaliseFirstLetter(currentItem.description)}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Button className={styles.button} onClick={handleAddClick}>
          ADD TO CART
        </Button>
      </div>
    </Container>
  );
};

export default ProductPage;
