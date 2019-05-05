 import React from "react";
 import cssClasses from "./BurgerControl.module.css";

 const burgerBuilder = (props)=>{
     return(
         <div className = {cssClasses.BuildControl}>
             <div className={cssClasses.Label}>{props.label}</div>
             <button className={cssClasses.Less}>Less</button>
             <button className = {cssClasses.More}>More</button>
         </div>
     )

 }
 export default burgerBuilder;