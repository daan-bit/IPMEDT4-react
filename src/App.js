import React from "react";
import Login from './components/login/Login';

/* Dit is een test, wordt geimplementeerd met dashboard van Daniel*/
import Test from "./components/test-login/test-login";
/* nodig voor routes*/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GuestRoute from './components/GuestRoute';
import AuthRoute from './components/AuthRoute';


class App extends React.Component{
    
    render(){
        return(
            <Router>
                <Route>
                    <GuestRoute path="/admin" component={Login} />
                </Route>
                <Route>
                    <AuthRoute path="/test" component={Test} />
                </Route>
            </Router>
            
        );
    }
    
}

export default App;