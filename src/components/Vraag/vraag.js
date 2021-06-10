import React, { Component } from "react";
import "./vraag.css";
import axios from "axios";
import GeslotenVraag from "./VragenKind/GeslotenVraag";
import OpenVraag from "./VragenKind/OpenVraag";
import { MdKeyboardArrowLeft } from "react-icons/md";


class Vraag extends React.Component{
    constructor(props) {
		super(props);
	}

    render(){
        
        return(
            <section className="vragen">
                <article className="category">
                    {/* <a className="category__link" href="/overzicht/:id">Terug naar overzicht</a> */}
                    <button className="category__btn"><i className="category__icon"><MdKeyboardArrowLeft/></i><p className="category__text">Terug naar overzicht</p></button>
                    <h1 className="category__title">Category</h1>
                    
                </article>

                <article className="vraag">
                    <h3 className="vraag__title vraag__title--color">Vraag {this.props.question}</h3>
                    <p className="vraag__text" >Heb je het naar je zin op werk?</p>
                    
                        <GeslotenVraag/>
                        <OpenVraag/>
                    
                </article>
            </section>
        );
    }
}

export default Vraag;