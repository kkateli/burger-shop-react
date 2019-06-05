import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import BurgerBuilder from "../src/Container/BurgerBuilder";
import CheckOut from "../src/Components/Burger/CheckOut/CheckOut";
import Auth from "../src/Container/Auth/Auth";
import S from "./Components/Secret/Secret";
import Logout from "./Components/Logout/Logout";
import { connect } from "react-redux";
import { authCheck } from "./actions/auth";
import {Redirect} from "react-router-dom";

class App extends Component {
  componentDidMount() {
    return this.props.checkAuth();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/"/>
      </Switch>
    );

    if (this.props.ifAuth) {
      routes = (
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          
          <Route path="/check-out" component={CheckOut} />
          <Route path="/logout" component={Logout} />
          <Route path="/secret" component={S} />
          <Redirect to="/"/>
        </Switch>
      );
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ifAuth: state.auth.token != null };
};

const mapDispatchToProps = dispatch => {
  return { checkAuth: () => dispatch(authCheck()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
