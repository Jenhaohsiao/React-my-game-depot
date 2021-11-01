import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchByPlatforms from "./components/SearchByPlatforms";
import NavgationBar from "./components/NavgationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  history,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route>
          <NavgationBar />
          <main>
            <SearchByPlatforms />
          </main>
        </Route>
      </Router>
    </>
  );
}

export default App;
