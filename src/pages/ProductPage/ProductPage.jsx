import { Carousel } from "@mantine/carousel";
import { Container, Accordion } from "@mantine/core";
import { useContext } from "react";
import { ShopContext } from "../../App";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { productPageData } = useContext(ShopContext);
  console.log(productPageData);
  return (
    <Container href="#" className={styles.container}>
      <Carousel className={styles.carousel} withIndicators>
        <Carousel.Slide className={styles.slide}>
          <img
            className={styles.img}
            src={productPageData.image}
            alt="Product"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <h1>ANOTHER COOL IMAGE</h1>
        </Carousel.Slide>
      </Carousel>

      <div className={styles.infoCont}>
        <span>{productPageData.title.toUpperCase()}</span>
        <span>${productPageData.price}</span>
        <Accordion w="100%">
          <Accordion.Item value={productPageData.id.toString()}>
            <Accordion.Control className={styles.dropInfo}>
              <span>DESCRIPTION</span>
              {/* <span>+</span> */}
            </Accordion.Control>
            <Accordion.Panel className={styles.panel}>
              {productPageData.description}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
};

export default ProductPage;
