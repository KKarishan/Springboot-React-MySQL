import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListStockComponents from "./components/ListStockComponents";
import HeaderComponents from "./components/HeaderComponents";
import FooterComponents from "./components/FooterComponents";
import CreateStockComponent from "./components/CreateStockComponent";
import UpdateStockComponent from "./components/UpdateStockComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponents />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListStockComponents}></Route>
            <Route path="/stocks" component={ListStockComponents}></Route>
            <Route path="/add-stock" component={CreateStockComponent}></Route>
            <Route
              path="/update-stock/:stockId"
              component={UpdateStockComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponents />
      </Router>
    </div>
  );
}

export default App;
