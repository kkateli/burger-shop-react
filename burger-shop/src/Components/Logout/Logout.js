import React, { Component } from "react";
import * as actions from "../../actions/auth";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Logout extends Component {
  //first thing to do when rendered this component is to log out
  componentDidMount() {
    this.props.onLogout();
  }
  //NOTE important!!!!
  render() {
    return <Redirect to='/'/>
  }
}
const mapDispatchToProps = dispatch => {
  return { onLogout: () => dispatch(actions.logout()) };
};

export default connect(null,mapDispatchToProps)(Logout);
