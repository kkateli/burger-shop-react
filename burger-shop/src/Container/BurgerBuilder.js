//this us the file to manage the view of burger, check out button and checkout preview stateful
import React,{Component} from 'react';
import Burger from "../Components/Burger/Burger";
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        }

    }
    render(){
        return (
            <div>
                <Burger ingredients = {this.state.ingredients}/>
                <div>burger control</div>
                <div>checkout button</div>
            </div>

        )
    

    }
       
}
export default BurgerBuilder;