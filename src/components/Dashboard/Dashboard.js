import React, { Component } from 'react';

import Overzicht from './Overzicht/Overzicht';
import Sidebar from './Sidebar/Sidebar';

import './Dashboard.css';

class Dashboard extends Component{

    render(){
        return(
            <article className="dashboard">
                <Overzicht />
                <Sidebar />                
            </article>
        )
    }
}

export default Dashboard;