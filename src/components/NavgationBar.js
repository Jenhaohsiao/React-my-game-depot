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
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
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
            </Navbar.Collapse>
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
