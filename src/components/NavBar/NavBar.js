import React from 'react';
import cookie from "js-cookie";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import './NavBar.css';

const NavBar = (props) => {

    const handleLogout = e => {
        e.preventDefault();
        cookie.remove("token");
        props.logout();
      };
    return (
        <nav className="navBar">
            <ul className="navBar__list">
                <li className="navBar__listItem active"><a className="navBar__link" href={props.link}>{props.linkName}</a></li>
                <li className="navBar__listItem"><Link className="navBar__link" to="/logout" onClick={handleLogout}>Uitloggen</Link></li>
                </ul>
        </nav>

    )
}
const mapStateToProps = state => {
    return {
      loggedIn: state.auth.loggedIn
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch({ type: "SET_LOGOUT" })
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar);
  