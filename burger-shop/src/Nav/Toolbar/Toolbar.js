//this is toolbar component(nav bar)
import React from "react";
import cssClasses from "./Toolbar.module.css";
import logo from "../../assets/images/burger-logo.png";

const toolbar = () => {
  return (
    <div className={cssClasses.Toolbar}>
      <p>
        <i class="fas fa-align-justify" />
      </p>
      <div className={cssClasses.Logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
export default toolbar;
