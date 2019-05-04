//this is the layout file(displaying core components)
import React from "react";
import Toolbar from "../Layout/Toolbar/Toolbar";
import cssClasses from "./Layout.module.css"

const layout = props => {
  return (
    <div>
     <Toolbar />
      {/* {/* <div>Toolbar sidedrawer, Backdrop</div> */}
      <main className={cssClasses.Content}>{props.children}</main>
    </div>
  );
};

export default layout;
