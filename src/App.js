import "./App.css";
//import Item from "./container/Item";
import IteamDetails from "./container/ItemDetails";
import Navegacion from "./components/Navegacion";
import "antd/dist/antd.css";
import Home from "./components/Home";
import Info from "./components/Info";
import ContactForm from "./components/ContactForm";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppFooter from "./components/Footer";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <Router>
      <div className="App">
        <Navegacion />

        <Switch>
          <Route exact path="/">
            <Home />
            <Info />
          </Route>
          <Route path="/itemdetails/:id">
            <IteamDetails />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/thankyou">
            <Thankyou />
          </Route>
        </Switch>

        <ContactForm />
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
