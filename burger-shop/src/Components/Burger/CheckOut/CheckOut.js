import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import cssClasses from "./CheckOut.module.css";

class CheckOut extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>This is check out page</p>
        <NavLink to={'/'}><button className={cssClasses.cancelButton}>Cancel</button></NavLink>
      </div>
    );
  }
}
export default CheckOut;
