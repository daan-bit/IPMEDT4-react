import React from "react";
import Login from './components/login/Login';

/* Dit is een test, wordt geimplementeerd met dashboard van Daniel*/
import Test from "./components/test-login/test-login";
/* nodig voor routes*/
import GuestRoute from './components/GuestRoute';
import AuthRoute from './components/AuthRoute';

import './App.css';

import {Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import vragenAanmaken from "./components/Dashboard/Vragen/aanmaken/vragenAanmaken"
import vragenBekijken from "./components/Dashboard/Onderzoek/vragen/vragenBekijken"



class App extends React.Component{
    
    render(){
        return(
            <Router>
                  <Route>
                        <AuthRoute path="/admin/dashboard" exact component={Dashboard} />                    
                   </Route>
                   <Route>
                       <AuthRoute path="/admin/onderzoek/:id/vragen/aanmaken" exact component={vragenAanmaken} />
                   </Route>
                   <Route>
                       <AuthRoute path="/admin/onderzoek/:id/vragen" exact component={vragenBekijken} />
                   </Route>
                   <Route>
                        <AuthRoute path="/dashboard/:id" exact component={Test} />
                   </Route>
                    <Route>
                        <GuestRoute path="/admin" exact component={Login} />
                    </Route>
                    <Route>
                        <AuthRoute path="/test" component={Test} />
                    </Route>
                   
            </Router>
        );
    }
    
}

export default App;