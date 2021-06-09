import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import "./Sidebar.css";

import {connect} from "react-redux";

import Modal from '../Modal/Modal';
import { changeShow, changeVerwijder } from '../../../store/Actions';


class Sidebar extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            onderzoek: "",
            code: "",
            onderzoeken: [],
        }
    }

    componentDidMount() {
        this.ophalenOnderzoeken();
        this.props.changeShow(false);
    }

    // Onderzoek aanmaken
    changeOnderzoek = (event) =>{
        this.setState({onderzoek: event.target.value});
    }

    changeCode = (event) =>{
        this.setState({code: event.target.value});
    }

    submit = (e) =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/store', {
                naam: this.state.onderzoek, 
                code: this.state.code,                     
            }).then(function (response) {           
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        this.ophalenOnderzoeken();
    }


    // Lijst van onderzoeken
    ophalenOnderzoeken = () =>{
        const BASE_URL = "http://localhost:8000/api/onderzoeken";

        axios.get(BASE_URL)
        .then(res => {
            console.log(res.data);
            this.setState({onderzoeken: res.data})
        });

    }

    // Verwijderen van onderzoeken
    verwijderOnderzoek = (id) => {
        this.props.changeVerwijder(id);
        this.props.changeShow(true);
    }

    
    render(){
        const onderzoeken = (this.state.onderzoeken); 
        
        return(
            <article className="sidebar">             

                {/* Maken van een Onderzoek */}
                <form className="sidebar__form" onSubmit={this.submit}>
                    <section className="sidebar__inputSection">
                        <label className="sidebar__label" htmlFor="onderzoek">Naam onderzoek</label>
                        <input className="sidebar__input" type="text" id="onderzoek" required onChange={this.changeOnderzoek}/>
                    </section>
                   
                    <section className="sidebar__inputSection">
                        <label className="sidebar__label" htmlFor="code">Code</label>
                        <input className="sidebar__input sidebar__input--code" required type="number" id="code" onChange={this.changeCode}/>
                    </section>

                    <section className="sidebar__buttonContainer">
                        <button type="submit" className="sidebar__button primary">Onderzoek maken</button>                        
                    </section>
                </form>

                {/* Verwijderen van een onderzoek */}  

                <Modal/>
              
                            

                {/* lijst van onderzoeken */}
                <ul className="sidebar__lijst">
                    {onderzoeken.map((item, i) => (
                    
                        <li className="sidebar__onderzoekContainer" key={i}>
                            <a className="sidebar__onderzoek" href="#">{item.id}.  {item.naam}</a>
                            <Link className="sidebar__onderzoek" to={`/admin/onderzoek/${item.id}/vragen/aanmaken`}>Voeg vragen toe</Link>
                            <Link className="sidebar__onderzoek" to={`/admin/onderzoek/${item.id}/vragen`}>Bekijk vragen</Link>
                            <button className="sidebar__verwijderButton primary" onClick={() => this.verwijderOnderzoek(item.id)}>Verwijderen</button>
                        </li>
                    ))}
                </ul>   

            </article>
        )
    }
}

const mapStateToProps = state =>{
    return { verwijder: state.verwijder, show: state.show};
}

export default connect(
    mapStateToProps, 
    {changeVerwijder: changeVerwijder, changeShow: changeShow}
) (Sidebar);


