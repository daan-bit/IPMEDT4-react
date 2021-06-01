import React from "react";
import Login from './components/login/Login';

/* Dit is een test, wordt geimplementeerd met dashboard van Daniel*/
import Test from "./components/test-login/test-login";
/* nodig voor routes*/
import GuestRoute from './components/GuestRoute';
import AuthRoute from './components/AuthRoute';

import './App.css';

import Sidebar from './Dashboard/Sidebar/Sidebar';

//import {Provider} from "react-redux";
import {Route, BrowserRouter as Router} from "react-router-dom";


class App extends React.Component{
    
    render(){
        return(
            <Router>
                  <Route>
                        <AuthRoute path="/dashboard" exact component={Sidebar} />                    
                   </Route>
                   <Route>
                        <AuthRoute path="/dashboard/:id" exact component={Test} />
                   </Route>
                    <Route>
                        <GuestRoute path="/beheer" component={Login} />
                    </Route>
                    <Route>
                        <AuthRoute path="/test" component={Test} />
                    </Route>
                   
            </Router>
        );
    }
    
}

export default App;