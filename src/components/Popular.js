import styles from "../styles/popular.module.css";
import { useState, useEffect } from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
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

  const [quoteData, isLoading, fetchNewUrl] = useApiFetchData(quoteUrl);
  const [containerIndex, setContainerIndex] = useState(0);

  useEffect(() => {
    console.log("quoteData:", quoteData);
  }, [quoteData]);

  return (
    <>
      <Header title="Popular" />
      <Container className={styles.homeContainer}>
        {isLoading ? (
          <ApiLoading />
        ) : (
          quoteData && (
            <>
              <Row>
                {quoteData.results.map((gameItem, i) => {
                  return (
                    <>
                      <Col xs={12} md={6} lg={4} xl={3}>
                        <Link
                          className={styles.cardItemLink}
                          to={{
                            pathname: `/GameInfoPage/${gameItem.id}`,
                            details: gameItem,
                          }}
                        >
                          <Card className={styles.cardItem}>
                            <Card.Img
                              className={styles.cardImage}
                              variant="top"
                              src={gameItem.background_image}
                            />
                            <Card.Body className={styles.cardBody}>
                              <Card.Title className={styles.cardTitle}>
                                {gameItem.name}{" "}
                              </Card.Title>
                              <Card.Text></Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </>
          )
        )}
      </Container>
    </>
  );
}

export default Popular;
