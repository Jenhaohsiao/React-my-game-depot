import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  history,
} from "react-router-dom";

import Logo from "../images/logo-long.png";

function NavgationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Route>
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
              <Link to="/search">Search</Link>
              <Link to="/myDepot">My Depot</Link>
            </Nav>
          </Route>
        </Container>
      </Navbar>
    </>
  );
}

export default NavgationBar;
