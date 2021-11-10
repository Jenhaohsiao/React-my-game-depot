import styles from "../styles/popular.module.css";
import { useState } from "react";
import { Container, Carousel, Card } from "react-bootstrap";
import ApiLoading from "./ApiLoading";
import useApiFetchData from "./useApiFetchData";
import Header from "./Header";
import { Link } from "react-router-dom";

function Popular() {
  const APIKey = "04f19512cf744444b13c42bd2f1026d4";
  const date = new Date().toLocaleDateString(undefined, { day: "2-digit" });
  const month = new Date().toLocaleDateString(undefined, { month: "2-digit" });
  const year = new Date().getFullYear();
  const startDate = year + "-" + "01-01";
  const endDate = year + "-" + "12-31";
  const dateRange = startDate + "," + endDate;
  const ordering = "-rating";
  const quoteUrl = `https://api.rawg.io/api/games?key=${APIKey}&dates=${dateRange}&ordering=${ordering}`;
  console.log("quoteUrl:", quoteUrl);

  const [quoteData, isLoading, fetchNewUrl] = useApiFetchData(quoteUrl);
  const [containerIndex, setContainerIndex] = useState(0);

  function handleClick() {
    console.log("handleClick");
  }

  return (
    <>
      <Header title="Popular" />
      <Container className={styles.homeContainer}>
        {isLoading ? (
          <ApiLoading />
        ) : (
          quoteData && (
            <>
              <Carousel>
                {quoteData.results.map((gameItem, i) => {
                  // return <HomeItem index={gameItem.id} gameItem={gameItem} />;
                  return (
                    <Carousel.Item onClick={handleClick} key={gameItem.id}>
                      <Link
                        to={{
                          pathname: `/GameInfoPage/${gameItem.name}`,
                          details: gameItem,
                        }}
                      >
                        <div
                          className={styles.carouselImage}
                          style={{
                            backgroundImage:
                              "url(" + gameItem.background_image + ")",
                          }}
                        >
                          <Carousel.Caption>
                            <h3>{gameItem.name}</h3>
                          </Carousel.Caption>
                        </div>
                      </Link>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </>
          )
        )}
      </Container>
    </>
  );
}

export default Popular;
