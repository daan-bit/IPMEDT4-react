import React, { Component } from "react";
import "./StatusBar.css"; 
import axios from "axios";

class StatusBar extends React.Component{
    constructor(props) {
		super(props);
	}

    render(){
        return(
            <section className="statusbar">
                <div className="u-flex__statusbar">
                    <p className="statusbar__text">{this.props.huidige} / {this.props.aantal}</p>
                    <progress className="statusbar__bar" id="file" color="red" value={this.props.progress} max="100">{this.props.progress}</progress>
                </div>

                
                <button onClick={this.props.next} className="statusbar__btn">Volgende vraag</button>  
                
            </section>
        );
    }
}

export default StatusBar;