import styles from "../styles/popular.module.css";
import { Carousel } from "react-bootstrap";

function HomeItem({ index, gameItem }) {
  console.log("HomeItem props:", gameItem);
  return (
    <>
      <Carousel.Item>
        <div
          className={styles.carouselImage}
          style={{
            backgroundImage: "url(" + gameItem.background_image + ")",
          }}
        >
          <Carousel.Caption>
            <h3>{gameItem.name}</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </>
  );
}

export default HomeItem;
