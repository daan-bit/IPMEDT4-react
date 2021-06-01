import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cookie from "js-cookie";

function Navbar(props) {

  const handleLogout = e => {
    e.preventDefault();
    cookie.remove("token");
    props.logout();
  };

  return (
    <div>
      <nav className="flex justify-between">
        <h1 className="py-4 mx-10">Tevredenheidsonderzoek</h1>
        <div className="flex justify-between">
          {!props.loggedIn ? (
            <Fragment>
              <Link
                className=""
                to="/admin"
              >
                Login
              </Link>
            </Fragment>
          ) : (
            <Link
              className=""
              to="/logout"
              onClick={handleLogout}
            >
              Logout
            </Link>
          )}
        </div>
      </nav>
      {props.children}
    </div>
  );
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
)(Navbar);
