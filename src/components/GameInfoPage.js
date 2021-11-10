import { Container } from "react-bootstrap";

function GameInfoPage(gameItem) {
  console.log("gameItem:", gameItem);
  return (
    <>
      <Container>
        <h1>Game Info Page, name: {gameItem.match.params.name}</h1>
      </Container>
    </>
  );
}

export default GameInfoPage;
