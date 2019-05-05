//this us the file to manage the view of burger, check out button and checkout preview stateful
import React, { Component } from "react";
import Burger from "../Components/Burger/Burger";
import BurgerControls from "../Components/Burger/BurgerControls/BurgerControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 2,
      cheese: 2,
      meat: 2
    }
  };

  clickLessButton = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    const ingres = { ...this.state.ingredients };
    ingres[type] = newCount;

    this.setState({ ingredients: ingres });
  };

  clickMoreButton = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const ingres = { ...this.state.ingredients };
    ingres[type] = newCount;

    this.setState({ ingredients: ingres });
  };

  render() {
      /**ANCHOR important!!!! 
       * clickLess and more, when argu is not available in the file, we pass them as non argu funcs
       * and pass the type in BurgerControls.js where jsx BurgerControls is built */
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredients={this.state.ingredients}
          clickLess={this.clickLessButton}
          clickMore={this.clickMoreButton}
        />
        <div>checkout button</div>
      </div>
    );
  }
}
export default BurgerBuilder;
