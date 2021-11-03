import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Logo from "../images/logo-long.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  history,
} from "react-router-dom";
import Home from "./Home";
import News from "./News";
import PlatformIndex from "./PlatformIndex";
import styles from "../styles/navgation.module.css";

function NavgationBar() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img src={Logo} alt="logo" />
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className={styles.linkText}>
                  <span>Home</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/news" className={styles.linkText}>
                  <span>News</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/platform" className={styles.linkText}>
                  <span>Platform</span>
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/platform" component={PlatformIndex} />
          <Route path="/news" component={News} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default NavgationBar;
