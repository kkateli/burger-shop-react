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

componentDidMount(){
  const query = new URLSearchParams(this.props.location.search);
  const ingredients = {};
  for (let i of query.entries()){
    ingredients[i[0]] = parseInt(i[1]);
  }
  this.setState({ingredients: ingredients})
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
        <NavLink to={'/'}><button className={cssClasses.cancelButton}>Cancel</button></NavLink>
      </div>
    );
  }
}
export default CheckOut;
