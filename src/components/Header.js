import styles from "../styles/app.module.css";
import { Container } from "react-bootstrap";

function Header({ title }) {
  return (
    <>
      <div className={styles.sitePageHeader}>
        <Container>{title}</Container>
      </div>
    </>
  );
}

export default Header;
