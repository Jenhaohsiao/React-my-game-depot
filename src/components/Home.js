import styles from "../styles/home.module.css";
import IndexLogo from "../images/logo-hero.png";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container>
        <div className={styles.homeContainer}>
          <h1>Welcome</h1>
          <img src={IndexLogo} alt="IndexLogo" />;
        </div>
      </Container>
    </>
  );
}

export default Home;
