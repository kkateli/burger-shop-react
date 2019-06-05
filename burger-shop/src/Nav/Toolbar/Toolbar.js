//this is toolbar component(nav bar)
import React from "react";
import cssClasses from "./Toolbar.module.css";
import logo from "../../assets/images/burger-logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const toolbar = props => {
  return (
    <div className={cssClasses.Toolbar}>
      <p>
        <i className="fas fa-align-justify" />
      </p>
      {props.ifAuth ? (
        <Link to={"/logout"}>
          <p className={cssClasses.checkOut}>Log out</p>
        </Link>
      ) : (
        <Link to={"/auth"}>
          <p className={cssClasses.checkOut}>Authentication</p>
        </Link>
      )}
      {props.ifAuth ? (
      <Link to={"/secret"}>
        <div className={cssClasses.checkOut}>secret</div>
      </Link>
      ) :null}

      <div className={cssClasses.Logo}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />  
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { ifAuth: state.auth.token != null };
};

export default connect(
  mapStateToProps,
  null
)(toolbar);
