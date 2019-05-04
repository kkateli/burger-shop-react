//this is the burger graphic component
import React from "react";
import cssClasses from "./Burger.module.css"
import Ingredient from "./Ingredient/Ingredient";

const burger =(props)=>{
/**NOTE props.ingreients[e] accesses the values of the obj. so that Array() will return e times arries with the lengths of props.ingredients[e]
 * ANCHOR remember using the map to return jSX
 * NOTE reduce functon is to conbine the arries into one array
 */
    let arrayIngredients = Object.keys(props.ingredients).map(e=>{
        return [...Array(props.ingredients[e])].map((_,i)=>{
            return <Ingredient key = {e+i} type = {e} />;
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)

    },[]);
    
    if(arrayIngredients.length===0){
        arrayIngredients = <p>Please add ingredients</p>;
    }//NOTE 

    


    return(
        <div className={cssClasses.Burger}>
        <Ingredient type="bread-top" />
        {arrayIngredients}
        <Ingredient type = "bread_bottom"/>
        

        </div>
        
    );
}
export default burger;  