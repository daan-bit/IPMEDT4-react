import React from "react";
import Login from './components/Login';
/* nodig voor routes*/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component{
    
    render(){
        return(
            <Router>
                <Route>
                    <Route path="/admin" component={Login} />
                </Route>
            </Router>
            
        );
    }
    
}

export default App;