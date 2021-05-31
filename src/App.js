import React from "react";

import './App.css';

import Sidebar from './Dashboard/Sidebar/Sidebar';
import Overzicht from './Dashboard/Overzicht/Overzicht';

import {Provider} from "react-redux";
import {store} from './store';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";


class App extends React.Component{
    
    render(){
        return(
           <Router>
               <Switch>
                   <Route path="/admin/dashboard">
                       <main className="main">   
                            <Provider store={store}>                       
                                <Sidebar />
                                <Overzicht />
                            </Provider>  
                       </main>                        
                   </Route>
               </Switch>
           </Router>
            
        );
    }
    
}

export default App;