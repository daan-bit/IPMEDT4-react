import React, { Component } from 'react';
import axios from 'axios';
import './infoOnderzoek.css';
import { useHistory } from "react-router-dom";
class InfoOnderzoek extends Component{

    constructor(props) {
        super(props)
        this.state = { id: '', naam: '', errors: {}} //voor nu id is even static
    }

    apiCall = () => {
        const DEFAULT_URL = 'http://madebydaniek-testwebsite3.nl/api/'
        const data = {id: 1};
        let history = useHistory();
        axios.get(DEFAULT_URL + 'onderzoek/1', data)
        .then(res => { 
        this.setState({naam: res.data.naam}) //redux toepassen
        localStorage.setItem('onderzoek_id', res.data.id);
        }).catch(e => this.setState({errors: e.response.data}),
        );
    }

    componentDidMount() {
        this.apiCall();
    }



    render(){
      
        return(
            <article className="onderzoek__info">
                <h2 className="onderzoek__info__title">Naam van onderzoek: {this.state.naam}</h2>
                <p className="onderzoek__info__paragraph"> Hieronder kunt u de vragen toevoegen voor dit onderzoek.</p>
                
            </article>
        )
    }
}

export default InfoOnderzoek;