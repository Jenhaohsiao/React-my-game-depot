import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import NavgationBar from "./components/NavgationBar";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
  history,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route>
          <NavgationBar />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
