import React, { Component } from "react";
import "./GeslotenVraag.css";
import axios from "axios";

class GeslotenVraag extends React.Component{


    render(){
        
        return(
            <article className="vragenInput">
                <button className="vragenInput__btn vragenInput__btn--color">Oneens<div className="vragenInput__btnlabel">A</div></button>
                <button className="vragenInput__btn vragenInput__btn--color">Beetje oneens<div className="vragenInput__btnlabel">B</div></button>
                <button className="vragenInput__btn vragenInput__btn--color">Weet ik niet<div className="vragenInput__btnlabel">C</div></button>
                <button className="vragenInput__btn vragenInput__btn--color">Beetje eens<div className="vragenInput__btnlabel">D</div></button>
                <button className="vragenInput__btn vragenInput__btn--color">Eens<div className="vragenInput__btnlabel">E</div></button>
            </article>  
        );
    }
}

export default GeslotenVraag;