import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import cssClasses from "./CheckOut.module.css";

class CheckOut extends Component {
  state = {
  ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0
  }
}

  render() {
    const ingreds = Object.keys(this.state.ingredients).map(e=>{
      return(
        <li key={e}>{e}: {this.state.ingredients[e]}</li>
      )

    })
    

    return (
      <div>
        <p>This is check out page</p>
        {ingreds}
        {/* <p>salad: + {this.state.ingredients.salad}</p> */}
        <NavLink to={'/'}><button className={cssClasses.cancelButton}>Cancel</button></NavLink>
      </div>
    );
  }
}
export default CheckOut;
