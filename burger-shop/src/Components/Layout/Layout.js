//this is the layout file(displaying core components)
import React from "react";
import Toolbar from "../Toolbar/Toolbar";


const layout = props => {
  return (
    <div>
     <Toolbar />
      {/* <div>Toolbar sidedrawer, Backdrop</div>
      <main>{props.children}</main> */}
    </div>
  );
};

export default layout;
