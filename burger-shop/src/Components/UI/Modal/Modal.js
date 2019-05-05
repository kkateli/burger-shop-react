import cssClasses from "./Modal.module.css";
import React from "react";
const modal =(props)=>{
    return(
        <div className={cssClasses.Modal}>{props.children}</div>

    )
    

}
export default modal;