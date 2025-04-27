import { Carousel } from "@mantine/carousel";
import { Container } from "@mantine/core";
import { useContext } from "react";
import { ShopContext } from "../../App";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { productPageData } = useContext(ShopContext);
  return (
    <Container href="#" className="container">
      <Carousel>
        <Carousel.Slide>
          <img src={productPageData.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <h1>ANOTHER COOL IMAGE</h1>
        </Carousel.Slide>
      </Carousel>

      <h1>{productPageData.title}</h1>
      <h2>${productPageData.price}</h2>
      <h3>{productPageData.description}</h3>
    </Container>
  );
};

export default ProductPage;
