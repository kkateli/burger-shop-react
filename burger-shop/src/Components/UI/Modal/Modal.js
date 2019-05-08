import cssClasses from "./Modal.module.css";
import React, { Component } from "react";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show || nextProps.children!==this.props.children) {
      return true;
    } else {
      return false;
    }
  }
  
  render() {
    return <div className={cssClasses.Modal}>{this.props.children}</div>;
  }
}
export default Modal;
