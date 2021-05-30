import React, { Component } from 'react';
import {connect} from 'react-redux';

import "./Sidebar.css";

class Sidebar extends Component {

    render(){
        return(
            <article className="sidebar">
                <nav className="sidebar__nav">
                        <a href="#" className="nav__a">Onderzoek 1</a>
                        <a href="#" className="nav__a">Onderzoek 2</a>
                </nav>

                <div className="sidebar__buttonContainer">
                    <button className="buttonContainer__button">Onderzoek maken</button>
                </div>
            </article>
        )
    }
    
}

export default Sidebar;