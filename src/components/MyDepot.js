import Header from "./Header";
import { Container } from "react-bootstrap";

function MyDepot({ todos }) {
  console.log("my depot todos:", todos);
  return (
    <>
      <Header title="My Depot" />
      <>
        <Container>
          {todos ? (
            <>
              <main>
                <p>List of TODOs</p>
                <ul>
                  {todos.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                  ))}
                </ul>
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
