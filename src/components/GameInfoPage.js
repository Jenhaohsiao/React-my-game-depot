import { Container, Carousel, Button } from "react-bootstrap";
import Header from "./Header";
import styles from "../styles/gameInfo.module.css";

import { MdDateRange } from "react-icons/md";
import { GiFlatPlatform } from "react-icons/gi";
import { AiFillShopping } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";

import { connect } from "react-redux";
import { arrayOf, shape, number, string } from "prop-types";
import { addToDo } from "./actions";
import { useState } from "react";
import AddIntoListButton from "./AddIntoListButton";
import reducer from "./reducer";

function GameInfoPage(gameItem) {
  const [gameObj, setGameObj] = useState(gameItem.location.details);
  console.log("gameItem:", gameItem);

  const dispatch = () => {
    console.log("dispatch");
    reducer(gameObj, "ADD_TO_DO");
  };

  const handleAddToList = (event) => {
    console.log("handleAddToList:", gameObj);
    event.preventDefault();
    // to modify state (AKA add a nnew "to do", we need to dispatch an action)
    // this will pass an action to the reducer which will take care of our stae modification
    dispatch(addToDo({ id: gameObj.id, title: gameObj.name }));
    // setTodos((prevTodos) => [...prevTodos, { title: todoTitle, id: prevTodos.length }]);
  };

  return (
    <>
      {gameItem.location.details ? (
        <>
          <Header subTitle="Game Info" title={gameItem.location.details.name} />
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

                <AddIntoListButton dispatch={dispatch} />
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
