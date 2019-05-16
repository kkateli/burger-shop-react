import React from "react";
import cssClasses from "./BurgerSummary.module.css";


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
       <button className={cssClasses.Button} onClick={props.confirm}>Confirm</button>
       <button className={cssClasses.Button} onClick = {props.cancel}>Cancel</button>
       </div>
    )

}
export default burgerSummary;