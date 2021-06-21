//auth route voor dashboard 
//dashboard toegankelijk alleen wanneer gebruiker ingelogd is

import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
    console.log({...rest }) //zie voor console redux te werk gaan
  return (
    <Route
      {...rest}
      render={props =>
        rest.loggedIn ? ( //redux bevat loggedIn op true?
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    };
}
export default connect(mapStateToProps)(AuthRoute);