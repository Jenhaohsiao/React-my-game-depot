import Header from "./Header";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function MyDepot() {
  const gameList = useSelector((state) => state.gameList.value);
  console.log("gameList:", gameList);
  return (
    <>
      <Header title="My Depot" />
      <>
        <Container>
          {gameList ? (
            <>
              <main>
                <p>Game List: {gameList}</p>
              </main>
            </>
          ) : (
            <>No item on the depot yet</>
          )}
        </Container>
      </>
    </>
  );
}

export default MyDepot;
