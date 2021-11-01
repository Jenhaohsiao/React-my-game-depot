import useApiFetchData from "./useApiFetchData";
import PlatformItem from "./PlatformItem";
import { Container, Row, Col } from "react-bootstrap";

function SearchByPlatforms() {
  // API Key
  // 04f19512cf744444b13c42bd2f1026d4
  const APIKey = "04f19512cf744444b13c42bd2f1026d4";
  const quoteUrl = `https://api.rawg.io/api/platforms?key=${APIKey}`;

  const [quoteData, isLoading, fetchNewUrl] = useApiFetchData(quoteUrl);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        quoteData && (
          <>
            <Container>
              <Row>
                {quoteData.results.map((gameItem, i) => {
                  return (
                    <>
                      {" "}
                      <Col xs={12} md={6} lg={4} xl={3}>
                        <PlatformItem index={i} item={gameItem} />
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Container>
          </>
        )
      )}
    </>
  );
}

export default SearchByPlatforms;
