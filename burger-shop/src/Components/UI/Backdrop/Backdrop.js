//this is the file after the summary is shown, the background gets dim
import React from "react";
import cssClasses from "./Backdrop.module.css";
const backdrop =(prop)=>{
    return(
        <div className = {cssClasses.Backdrop} onClick={prop.backdropClicked}>

        </div>
    )

}
export default backdrop;