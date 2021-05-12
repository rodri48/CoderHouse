import "./App.css";
//import Item from "./container/Item";
import IteamDetails from "./container/ItemDetails";
import Navegacion from "./components/Navegacion";

import Home from "./components/Home";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navegacion />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/itemdetails/:id">
            <IteamDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
