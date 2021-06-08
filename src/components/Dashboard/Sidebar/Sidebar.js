import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import "./Sidebar.css";


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
        this.makeApiCall();
    }

    changeOnderzoek = (event) =>{
        this.setState({onderzoek: event.target.value});
    }

    changeCode = (event) =>{
        this.setState({code: event.target.value});
    }

    submit(){
        axios.post('http://127.0.0.1:8000/api/store', {
                naam: this.state.onderzoek, 
                code: this.state.code,                     
            }).then(function (response) {           
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
    }

    makeApiCall = () =>{
        const BASE_URL = "http://localhost:8000/api/onderzoeken";

        axios.get(BASE_URL)
        .then(res => {
            this.setState({onderzoeken: res.data})
        });
    };

    render(){
        const onderzoeken = (this.state.onderzoeken);
        return(
            <article className="sidebar">               

                {/* Nog form van maken, doet het nog niet --> zegt request aborted */}
                <section className="sidebar__form"> 
                    <section className="sidebar__inputSection">
                        <label className="sidebar__label" htmlFor="onderzoek">Naam onderzoek</label>
                        <input className="sidebar__input" type="text" id="onderzoek" required onChange={this.changeOnderzoek}/>
                    </section>
                   
                    <section className="sidebar__inputSection">
                        <label className="sidebar__label" htmlFor="code">Code</label>
                        <input className="sidebar__input sidebar__input--code" required type="text" id="code" onChange={this.changeCode}/>
                    </section>

                    <section className="sidebar__buttonContainer">
                        <button type="submit" className="sidebar__button primary" onClick={()=>{{this.submit()}; this.makeApiCall();}}>Onderzoek maken</button>
                    </section>
                </section>

                <ul className="sidebar__lijst">
                    {onderzoeken.map((item, i) => (
                    
                        <li className="sidebar__onderzoekContainer" key={i}>
                            <a className="sidebar__onderzoek" href="#">{item.id}.  {item.naam}</a>
                            <Link className="sidebar__onderzoek" to={`/admin/onderzoek/${item.id}/vragen/aanmaken`}>Voeg vragen toe</Link>
                            <Link className="sidebar__onderzoek" to={`/admin/onderzoek/${item.id}/vragen`}>Bekijk vragen</Link>
                        </li>
                    ))}
                </ul>   

            </article>
        )
    }
}

export default Sidebar;


