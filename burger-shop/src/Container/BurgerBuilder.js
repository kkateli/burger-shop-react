//this us the file to manage the view of burger, check out button and checkout preview stateful
import React,{Component} from 'react';
import Burger from "../Components/Burger/Burger";
import BurgerControls from '../Components/Burger/BurgerControls/BurgerControls';

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }

    }
    render(){
        
        
        return (
            <div>
                <Burger ingredients = {this.state.ingredients}/>
                <BurgerControls ingredients = {this.state.ingredients}/>
                <div>checkout button</div>
            </div>

        )
    

    }
       
}
export default BurgerBuilder;