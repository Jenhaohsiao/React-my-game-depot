import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useEffect } from "react";
import appStyles from "../styles/app.module.css";
import styles from "../styles/navgation.module.css";

import Logo from "../images/logo-long.png";
import GitHubLogo from "../images/github.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  history,
} from "react-router-dom";
import Popular from "./Popular";
import MyDepot from "./MyDepot";
import PlatformIndex from "./PlatformIndex";
import ApiLoading from "./ApiLoading";
import GameInfoPage from "./GameInfoPage";

function NavgationBar() {
  useEffect(() => {
    console.log("Navgation Bar loaded");
  }, []);

  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src={Logo} alt="logo" />
            </Navbar.Brand>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <NavLink to="/" className={styles.linkText}>
                    <span>Popular</span>
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink to="/MyDepot" className={styles.linkText}>
                    <span>My Depot</span>
                  </NavLink>
                </Nav.Link>

                <Navbar.Brand
                  href="https://github.com/Jenhaohsiao/React-my-game-depot"
                  target="_blank"
                >
                  <img
                    className={styles.gitHubLogo}
                    src={GitHubLogo}
                    alt="GitHubLogo"
                  />
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className={appStyles.babyContainer}>
          <Switch>
            <Route path="/platform" component={PlatformIndex} />
            <Route path="/myDepot" component={MyDepot} />
            <Route path="/ApiLoading" component={ApiLoading} />
            <Route path="/GameInfoPage/:id" component={GameInfoPage} />
            <Route path="/" component={Popular} />
            <Route exact path="/" component={Popular} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default NavgationBar;
