import React from "react";
import cssClasses from "./Spinner.module.css";

const spinner=()=>{
    return (
        <div className={cssClasses.spinner}>
        <div className={cssClasses.bounce1}></div>
        <div className={cssClasses.bounce2}></div>
        <div className={cssClasses.bounce3}></div>
      </div>

    )
}
export default spinner;