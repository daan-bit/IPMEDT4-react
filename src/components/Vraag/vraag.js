import React, { Component } from "react";
import "./vraag.css";
import axios from "axios";
import GeslotenVraag from "./VragenKind/GeslotenVraag";
import OpenVraag from "./VragenKind/OpenVraag";
import { MdKeyboardArrowLeft } from "react-icons/md";


class Vraag extends React.Component{
    state = {
        onderzoek_id: 1,//this.props.match.params.id,
        vraag: "",
        type_vraag: "",
        cat_naam: "",
        vraag_index: "",
    }
    onderzoek = {};
    constructor(props) {
        super(props);
        console.log(this.state.onderzoek_id);
        this.makeApiCall();
    } 

    makeApiCall = event => {
        const BASE_URL = "http://madebydaniek-testwebsite3.nl/api/onderzoek/"+this.state.onderzoek_id+"/vragen";
        axios.get(BASE_URL).then(res =>{
            this.onderzoek = res.data;
            // console.log(this.onderzoek.data);
            this.stateUpdate(2);
        })
    }

    stateUpdate = (vraag_id) => {
        this.setState({
            vraag: this.onderzoek[vraag_id].vraag,
            type_vraag: this.onderzoek[vraag_id].type_vraag,
            cat_naam: this.onderzoek[vraag_id].cat_naam,
            vraag_index: vraag_id,
        })
    }

    volgendeVraag = (vraag_id) => {
        this.stateUpdate(vraag_id + 1);
    }

    
    vorigeVraag = (vraag_id) => {
        this.stateUpdate(vraag_id -1);
    }

    render(){
        
        return(
            <section className="vragen">
                <article className="category">
                    {/* <a className="category__link" href="/overzicht/:id">Terug naar overzicht</a> */}
                    <button className="category__btn"><p className="category__text"><i className="category__icon"><MdKeyboardArrowLeft/></i>Terug naar overzicht</p></button>  
                    <h1 className="category__title">{this.state.cat_naam}</h1>
                    
                </article>

                <article className="vraag">
                    <h3 className="vraag__title vraag__title--color">Vraag {this.props.question}</h3>
                    <p className="vraag__text" >{this.state.vraag}</p>
                    
                    <button onClick={this.volgendeVraag} className="statusbar__btn">Volgende vraag</button>  
                        <GeslotenVraag/>
                        <OpenVraag/>
                    
                </article>
            </section>
        );
    }
}

export default Vraag;