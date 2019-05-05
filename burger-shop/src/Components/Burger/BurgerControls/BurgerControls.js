//This is the control file where users get to choose how many pieces of meat for example, so that t estate of burger can be controlled. stateless
import React from "react";
import cssClasses from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl/BurgerControl";

const burgerControls = props => {
  const arrayControls = Object.keys(props.ingredients).map(e => {
    
        return <BurgerControl label={e} key={e} />;
  })
   
  return <div className={cssClasses.BurgerControls}>
  {arrayControls}
  </div>;
};
export default burgerControls;
