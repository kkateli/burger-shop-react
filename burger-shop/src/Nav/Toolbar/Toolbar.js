//this is toolbar component(nav bar)
import React from "react";
import cssClasses from "./Toolbar.module.css";
const toolbar = () => {
  return (
    <div className = {cssClasses.Toolbar}>
      
      {/* <img src= alt="logo" /> */}
      <p><i class="fas fa-align-justify"></i></p>
    </div>
  );
};
export default toolbar;