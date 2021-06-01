import React, { Component } from 'react';
import {connect} from 'react-redux';

import Overzicht from './Overzicht/Overzicht';
import Sidebar from './Sidebar/Sidebar';

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