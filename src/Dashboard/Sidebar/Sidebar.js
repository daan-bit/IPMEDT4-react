import React, { Component } from 'react';
import {connect} from 'react-redux';

import "./Sidebar.css";

class Sidebar extends Component {

    dropDown(){
        document.getElementsByClassName("content__a").style.display = "block";
    }

    render(){
        return(
            <article className="sidebar">
                <nav className="sidebar__nav">
                    <button className="nav__button" onClick={this.dropDown} >Onderzoeken</button>
                    <div className="nav__content">
                        <a href="#" className="content__a">Onderzoek 1</a>
                        <a href="#" className="content__a">Onderzoek 2</a>
                        <a href="#" className="content__a">Onderzoek 3</a>
                        <a href="#" className="content__a">Onderzoek 4</a>
                    </div>
                </nav>
                <button className="sidebar__button">Onderzoek maken</button>
            </article>
        )
    }
    
}

export default Sidebar;