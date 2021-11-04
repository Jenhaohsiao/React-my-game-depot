import styles from "../styles/app.module.css";
import { Container, Row, Col } from "react-bootstrap";
import IndexLogo from "../images/logo-hero.png";

function ApiLoading() {
  return (
    <>
      <Container>
        <div className={styles.apiLoadingContainer}>
          <div>
            <div className={styles.apiLoading}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>{" "}
          </div>
          <img
            className={styles.apiLoadingImage}
            src={IndexLogo}
            alt="IndexLogo"
          />
          ;
        </div>
      </Container>
    </>
  );
}

export default ApiLoading;
