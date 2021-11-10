import styles from "../styles/app.module.css";
import { Container } from "react-bootstrap";

function Header({ title, subTitle, backTo }) {
  return (
    <>
      <div className={styles.sitePageHeader}>
        <Container>
          {title}
          {subTitle ? (
            <h5 className={styles.siteHeaderSubTitle}>{subTitle}</h5>
          ) : (
            ""
          )}
        </Container>
      </div>
    </>
  );
}

export default Header;
