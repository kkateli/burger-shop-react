//this us the file to manage the view of burger, check out button and checkout preview stateful
import React, { Component } from "react";
import Burger from "../Components/Burger/Burger";
import BurgerControls from "../Components/Burger/BurgerControls/BurgerControls";
import Modal from "../../src/Components/UI/Modal/Modal";
import BurgerSummary from "../Components/Burger/BurgerSummary/BurgerSummary";
import Backdrop from "../Components/UI/Backdrop/Backdrop";
import Spinner from "../Components/UI/Spinner/Spinner";

const INGREDIENTSPRICE = {
  salad: 0.5,
  bacon: 1,
  cheese: 1,
  meat: 2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    total: 0,
    ifShown: false,
    ifSpin: false
  };

  clickLessButton = type => {
    const oldCount = this.state.ingredients[type];
    const ingres = { ...this.state.ingredients };
    const total = this.state.total;
    if (oldCount > 0) {
      const newCount = oldCount - 1;
      ingres[type] = newCount;
      const newTotal = total - INGREDIENTSPRICE[type];
      this.setState({ ingredients: ingres, total: newTotal });
    }
  };

  clickMoreButton = type => {
    const oldCount = this.state.ingredients[type];
    const ingres = { ...this.state.ingredients };
    const total = this.state.total;

    const newCount = oldCount + 1;
    ingres[type] = newCount;
    const newTotal = total + INGREDIENTSPRICE[type];

    this.setState({ ingredients: ingres, total: newTotal });
  };

  ifClicked = () => {
    this.setState({ ifShown: !this.state.ifShown });
  };

  sendOrdersHandler = () => {
    // this.setState({ ifSpin: true });

    // axios
    //   .post("/order.json", {
    //     ingredients: this.state.ingredients,
    //     total: this.state.total
    //   })
    //   .then(response => {
    //     console.log(response);
    //     this.setState({ ifSpin: false });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.setState({ ifSpin: false });
    //   });
      const queryIngred = [];
      for (let i in this.state.ingredients){
        queryIngred.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i])); 
      }
      const stringIngred = queryIngred.join('&');
      //use search pass a string with ? so that this string will show on the search bar on browser
    this.props.history.push({
      pathname: "/check-out",
      search:'?'+stringIngred
    }
     );
    

  };

  render() {

    const disableIngret = { ...this.state.ingredients };
    for (let key in disableIngret) {
      //NOTE This ingret will be {salad:true,meat:false}, so in BurgerControls.js, we access
      //true/false values through {props.ifDisable[e]}
      //ANCHOR disable===true is disable, disable===false is able
      if (disableIngret[key] <= 0) {
        disableIngret[key] = true;
      } else {
        disableIngret[key] = false;
      }
    }

    let ifCheckOut = true;
    if (this.state.total > 0) {
      ifCheckOut = false;
    }

    let summaryReport = (
      <BurgerSummary
        price={this.state.total}
        data={this.state.ingredients}
        confirm={this.sendOrdersHandler}
        cancel={this.ifClicked}
      />
    );

    if (this.state.ifSpin) {
      summaryReport = <Spinner />;
    }

    let summary = null;
    if (this.state.ifShown) {
      summary = (
        <div>
          <Modal show={this.state.total > 0}>{summaryReport}</Modal>
          <Backdrop backdropClicked={this.ifClicked} />
        </div>
      );
    }
    

    /**ANCHOR important!!!!
     * clickLess and more, when argu is not available in the file, we pass them as non argu funcs
     * and pass the type in BurgerControls.js where jsx BurgerControls is built */
    return (
      <div>
        {summary}
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredients={this.state.ingredients}
          clickLess={this.clickLessButton}
          clickMore={this.clickMoreButton}
          ifDisable={disableIngret}
          price={this.state.total}
          checkOut={ifCheckOut}
          showSummary={this.ifClicked}
        />
      </div>
    );
  }
}
export default BurgerBuilder;
