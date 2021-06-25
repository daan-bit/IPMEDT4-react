import React, { Component } from "react";
import "./StatusBar.css"; 
import axios from "axios";
import "../vraag";
import { Link } from 'react-router-dom';

class StatusBar extends React.Component{
    onClick = event => {
            event.preventDefault();
            this.props.onClick()
        }
        

    render(){
        return(
            <section className="statusbar">
                <div className="u-flex__statusbar">
                    <p className="statusbar__text">{this.props.huidige} / {this.props.aantal}</p>
                    <progress className="statusbar__bar" id="file" color="red" value={this.props.progress} max="100">{this.props.progress}</progress>
                </div>
                <div className="u-flex__btn">
                    <button onClick={this.props.vorigeVraag} className="statusbar__btn statusbar__btn--margin">Vorige vraag</button>
                    {/* <button onClick={this.typeVraag} className="statusbar__btn">Volgende vraag</button>  */}
                  <button onClick={this.props.volgendeVraag} className="statusbar__btn">Volgende vraag</button>
                </div>
            </section>
        );
    }
}

export default StatusBar;