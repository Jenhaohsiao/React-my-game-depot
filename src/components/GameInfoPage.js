import { Container, Carousel } from "react-bootstrap";
import Header from "./Header";
import styles from "../styles/gameInfo.module.css";

import { MdDateRange } from "react-icons/md";
import { GiFlatPlatform } from "react-icons/gi";
import { AiFillShopping } from "react-icons/ai";

function GameInfoPage(gameItem) {
  console.log("gameItem:", gameItem);

  return (
    <>
      {gameItem.location.details ? (
        <>
          <Header title="Game Info" subTitle={gameItem.location.details.name} />
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(" +
                gameItem.location.details.background_image +
                ")",
            }}
            className={styles.gameBackgroundImage}
          >
            <Container>
              <div className={styles.gameInfoSection}>
                <div className={styles.gameInfoRow}>
                  <GiFlatPlatform /> Platform:
                  {gameItem.location.details.platforms.map((item) => {
                    return (
                      <>
                        <div
                          key={item.platform.id}
                          className={styles.gameInfoRowItem}
                        >
                          {item.platform.name}
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className={styles.gameInfoRow}>
                  <MdDateRange /> Released:
                  <div className={styles.gameInfoRowItem}>
                    {gameItem.location.details.released}
                  </div>
                </div>

                {gameItem.location.details.stores ? (
                  <div className={styles.gameInfoRow}>
                    <AiFillShopping /> Stores:
                    {gameItem.location.details.stores.map((item) => {
                      return (
                        <>
                          <div
                            key={item.store.id}
                            className={styles.gameInfoRowItem}
                          >
                            {item.store.name}
                          </div>
                        </>
                      );
                    })}
                  </div>
                ) : (
                  <div div className={styles.gameInfoRowItem}></div>
                )}
              </div>

              <>
                <Carousel>
                  {gameItem.location.details.short_screenshots.map(
                    (imageObj) => {
                      // return <HomeItem index={gameItem.id} gameItem={gameItem} />;
                      return (
                        <Carousel.Item key={imageObj.id}>
                          <div
                            className={styles.carouselImage}
                            style={{
                              backgroundImage: "url(" + imageObj.image + ")",
                            }}
                          ></div>
                        </Carousel.Item>
                      );
                    }
                  )}
                </Carousel>
              </>
            </Container>
          </div>
        </>
      ) : (
        <Container>
          {/* Go page 404 */}
          <h2>No Info</h2>
        </Container>
      )}
    </>
  );
}

export default GameInfoPage;
