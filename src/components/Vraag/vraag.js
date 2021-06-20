import React, { Component } from "react";
import "./vraag.css";
import axios from "axios";
import GeslotenVraag from "./VragenKind/GeslotenVraag";
import OpenVraag from "./VragenKind/OpenVraag";
import StatusBar from "./StatusBar/StatusBar";
import { MdKeyboardArrowLeft } from "react-icons/md";


class Vraag extends React.Component{
    state = {
        onderzoek_id: 1,//this.props.match.params.id,
        vraag: "",
        type_vraag: "",
        cat_naam: "",
        vraag_index: 1,

    }
    onderzoek = {};
    constructor(props) {
        super(props);
        console.log(this.state.onderzoek_id);
        this.makeApiCall();

        this.state = {
            questions: ["1", "2", "3", "4", "5"],
            // questions: this.onderzoek.length, /* hier het AANTAL vragen in zetten */
            currentQuestion: -1,
        };
        
    } 

    next() {
        this.setState({ 
            currentQuestion: this.state.currentQuestion+1,
           
        });
    }

    makeApiCall = event => {
        const BASE_URL = "http://madebydaniek-testwebsite3.nl/api/onderzoek/"+this.state.onderzoek_id+"/vragen";
        axios.get(BASE_URL).then(res =>{
            this.onderzoek = res.data;
            // console.log(this.onderzoek.data);
            this.stateUpdate(0);
            console.log(this.onderzoek);
        })
    }

    stateUpdate = (vraag_id) => {
        this.setState({
            vraag: this.onderzoek[vraag_id].vraag,
            type_vraag: this.onderzoek[vraag_id].type_vraag,
            cat_naam: this.onderzoek[vraag_id].cat_naam,
            vraag_index: vraag_id,
            currentQuestion: this.state.currentQuestion+1,
        });
    }
    stateUpdateBackward = (vraag_id) => {
        this.setState({
            vraag: this.onderzoek[vraag_id].vraag,
            type_vraag: this.onderzoek[vraag_id].type_vraag,
            cat_naam: this.onderzoek[vraag_id].cat_naam,
            vraag_index: vraag_id,
            currentQuestion: this.state.currentQuestion-1,
        });
    }

    volgendeVraag = (vraag_id) => {
        console.log("next");
        this.stateUpdate(this.state.vraag_index + 1);
        this.typeVraag();
    }

    vorigeVraag = (vraag_id) => {
        this.stateUpdateBackward(this.state.vraag_index - 1);
    }
    
    typeVraag = () => {
        console.log("test typevraag funcite");
        console.log(this.state.type_vraag);
        // const openVraag = "<OpenVraag/>";
        // document.getElementById("demo").innerHTML = openVraag;
        document.getElementById('demo').insertAdjacentHTML('afterend', '<OpenVraag/>');
        // document.getElementById("demo").innerHTML = "<OpenVraag/>";
        console.log("openvraaggie");
        // if (this.state.type_vraag == "meerkeuze") {
        //     vraagSoort.style.display = 'none';
        // }
        // else (vraagSoort.style.display = 'block');
    }

    render(){
        let items = ``

        this.state.vraag.forEach( (val, index) => {
        //   if (type_vraag == "openvraag"){
        //       items = '<OpenVraag/>'
        //   }else{console.log('geen vraag gevonden')}
        })
        return(
            <section className="vragen">
                <article className="category">
                    <button className="category__btn"><p className="category__text"><i className="category__icon"><MdKeyboardArrowLeft/></i>Terug naar overzicht</p></button>  
                    <h1 className="category__title">{this.state.cat_naam}</h1> 
                </article>

                <article className="vraag">
                    <h3 className="vraag__title vraag__title--color">Vraag {this.state.currentQuestion+1} </h3>
                    <p className="vraag__text" >{this.state.vraag}</p> 
                        <div dangerouslySetInnerHTML={{__html: items}} />
                        
                        {/* <button onClick={this.typeVraag} className="statusbar__btn">Volgende vraag</button> */}
                </article>
                <StatusBar progress={100/this.state.questions.length * (this.state.currentQuestion+1)} next={this.next.bind(this)} aantal={this.state.questions.length} huidige={this.state.currentQuestion+1} volgendeVraag={this.volgendeVraag} vorigeVraag={this.vorigeVraag}/>
            </section>
        );
    }
}

export default Vraag;