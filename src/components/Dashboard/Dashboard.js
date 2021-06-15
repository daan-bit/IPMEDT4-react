import React, { Component } from 'react';

import Overzicht from './Overzicht/Overzicht';
import Sidebar from './Sidebar/Sidebar';

import './Dashboard.css';

import {store} from "../../store/Store";
import {Provider} from "react-redux";
import NavBar from '../NavBar/NavBar';

class Dashboard extends Component{

    render(){
        return(
            <article className="dashboard">

            <NavBar link="/admin/dashboard" linkName="Dashboard" cssClass="navBar__listItem active"/>
            <Provider store={store}>
                <Overzicht />
                <Sidebar />
            </Provider>                
            </article>
        )
    }
}

export default Dashboard;