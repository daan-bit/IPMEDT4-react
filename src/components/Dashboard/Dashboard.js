import React, { Component } from 'react';

import Overzicht from './Overzicht/Overzicht';
import Sidebar from './Sidebar/Sidebar';

import './Dashboard.css';

import {store} from "../../store/Store";
import {Provider} from "react-redux";

class Dashboard extends Component{

    render(){
        return(
            <article className="dashboard">

            <Provider store={store}>
                <Overzicht />
                <Sidebar />
            </Provider>                
            </article>
        )
    }
}

export default Dashboard;