import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import appStyles from "../styles/app.module.css";
import styles from "../styles/navgation.module.css";

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
import ApiLoading from "./ApiLoading";

function NavgationBar() {
  useEffect(() => {
    console.log("Navgation Bar loaded");
  }, []);

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
                <NavLink to="/" className={styles.linkText}>
                  <span>Home</span>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/news" className={styles.linkText}>
                  <span>News</span>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/platform" className={styles.linkText}>
                  <span>Platform</span>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/ApiLoading" className={styles.linkText}>
                  <span>ApiLoading</span>
                </NavLink>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className={appStyles.babyContainer}>
          <Switch>
            <Route path="/platform" component={PlatformIndex} />
            <Route path="/news" component={News} />
            <Route path="/ApiLoading" component={ApiLoading} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default NavgationBar;
