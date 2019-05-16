import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import BurgerBuilder from "../src/Container/BurgerBuilder";
import CheckOut from "../src/Components/Burger/CheckOut/CheckOut";
import Auth from "../src/Container/Auth/Auth";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/check-out"  component={CheckOut} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
