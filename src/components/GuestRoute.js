//deze component zorgt ervoor dat zodra een token aanwezig is de gebruiker niet meer login page bereikt, pas na uitloggen weer
//dashboard toegankelijk alleen wanneer gebruiker ingelogd is

import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest}    
        render={props =>
        !rest.loggedIn ? ( //redux loggedIn gezet op false
          <Component {...props} />
        ) :  (
          <Redirect to={{pathname: "/dashboard", state: { from: props.location } } } />
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
export default connect(mapStateToProps)(GuestRoute);