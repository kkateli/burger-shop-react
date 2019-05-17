//this is toolbar component(nav bar)
import React from "react";
import cssClasses from "./Toolbar.module.css";
import logo from "../../assets/images/burger-logo.png";
import {Link} from "react-router-dom";

const toolbar = () => {
  return (
    <div className={cssClasses.Toolbar}>
      <p>
        <i className="fas fa-align-justify" />
      </p>
      <Link to={"/auth"}>
      <p className={cssClasses.checkOut}>Sign in</p>
      </Link>
      
      
      <div className={cssClasses.Logo}>
      <Link to={"/"}> 
        <img src={logo} alt="logo" />
        </Link>
      </div>
      
    </div>
  );
};
export default toolbar;
