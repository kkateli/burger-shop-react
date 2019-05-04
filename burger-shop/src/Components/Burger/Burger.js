//this is the burger graphic component
import React from "react";
import cssClasses from "./Burger.module.css"
import Ingredient from "./Ingredient/Ingredient";

const burger =(props)=>{
/**NOTE props.ingreients[e] accesses the values of the obj. so that Array() will return e times arraies with the lengths of props.ingredients[e]
 * ANCHOR remember using the map to return jSX
 */
    const arrayIngredients = Object.keys(props.ingredients).map(e=>{
        return [...Array(props.ingredients[e])].map((_,i)=>{
            return <Ingredient key = {e+i} type = {e} />;
        });
    });
    return(
        <div className={cssClasses.Burger}>
        <Ingredient type="bread-top" />
        {arrayIngredients}
        <Ingredient type = "bread_bottom"/>
        

        </div>
        
    );
}
export default burger;