import React from "react";
import cssClasses from "./BurgerSummary.module.css";
import {Link} from "react-router-dom";

const burgerSummary =(props)=>{
    const dataSummary  = Object.keys(props.data).map(e=>{
        return <li key={e}>{e}: {props.data[e]}</li>
       

    })
    return(
        <div>
        <h3>Order summary</h3>
        <p>Ingredients are: </p>
       <ul> 
    {dataSummary}
       </ul>
       <p>The total price is: {props.price}</p>
       <p>Enjoy your meal!</p>
       <Link to={"/check-out"}><button className={cssClasses.Button}>Confirm</button></Link>
       <button className={cssClasses.Button} onClick = {props.cancel}>Cancel</button>
       </div>
    )

}
export default burgerSummary;