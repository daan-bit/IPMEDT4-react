import React, { Component } from 'react';
import axios from 'axios';
class InfoOnderzoek extends Component{

    constructor(props) {
        super(props)
        this.state = { id: '1', naam: '', errors: {}} //voor nu id is even static
    }

    apiCall = () => {
        const DEFAULT_URL = 'http://localhost:8000/api/'
        const data = {id: 1};
        axios.get(DEFAULT_URL + 'onderzoek/1', data)
        .then(res => { 
        this.setState({naam: res.data.naam}) //redux toepassen
        }).catch(e => this.setState({errors: e.response.data}));
    }

    componentDidMount() {
        this.apiCall();
    }



    render(){
        const error = this.state.errors;
        return(
            <article className="onderzoek">
                <h2>Naam van onderzoek: {this.state.naam}</h2>
                <p>Hieronder kunt u de vragen toevoegen voor dit onderzoek.</p>
            </article>
        )
    }
}

export default InfoOnderzoek;