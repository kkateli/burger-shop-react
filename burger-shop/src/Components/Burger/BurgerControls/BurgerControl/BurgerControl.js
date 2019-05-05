 import React from "react";
 import cssClasses from "./BurgerControl.module.css";

 const burgerBuilder = (props)=>{
     return(
         <div className = {cssClasses.BuildControl}>
             <div className={cssClasses.Label}>{props.label}</div>
             <button className={cssClasses.Less} onClick={props.clickLess}>Less</button>
             <button className = {cssClasses.More} onClick = {props.clickMore}>More</button>
         </div>
     )

 }
 export default burgerBuilder;