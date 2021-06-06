import React, { Component } from 'react';
import axios from 'axios';
import OnderzoekInfoComponent from '../../Onderzoek/vragen/OnderzoekInfoComponent';
import "./vragenAanmaken.css";
import cookie from 'js-cookie';
let token = cookie.get('token');

class vragenAanmaken extends Component{


    constructor(props) {
    super(props);
    this.state = { message: '', onderzoek_id: 0, selectOpties: [], label: '', value: '', vraag: '', type_vraag: 'meerkeuze', cat_naam: 'Informatica', errors: {}} 
    }

    componentDidMount() {
        this.apiCall();
        this.setState({onderzoek_id: Number(localStorage.getItem('onderzoek_id'))});
    }

    handleForm = (e) => {
        e.preventDefault();
        this.submit(this.props.typeCall);
        //dispatch actie naar redux

        //this.props.history.push('/test');
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]:value})
        
    }


    
    apiCallVraag = () => {
        const data = {onderzoek_id:this.state.onderzoek_id, cat_naam:this.state.cat_naam, vraag: this.state.vraag, type_vraag:this.state.type_vraag};
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; //we moeten JWT meegeven - beveiliging POST request
        axios.post('http://127.0.0.1:8000/api/auth/vragen/store',  data)
        .then(res => {
        this.setState({message: res.data.message});
        }).catch(e => this.setState({errors: e.response.data}));

    }

    handleForm = (e) => {
        e.preventDefault();
        this.apiCallVraag(this.props.typeCall);
    }


    apiCall = () => {
        const DEFAULT_URL = 'http://localhost:8000/api/'
        axios.get(DEFAULT_URL + 'categorien/all')
        .then(res => { 
        let i = 0;
        const opties = res.data.map(d => ({
            "label": d.naam.toLowerCase(),
            "value": d.naam,
        }))
        this.setState({selectOpties: opties})
        }).catch(e => this.setState({errors: e.response.data}));
    }
   

    render(){
        const options = this.state.selectOpties;
        const errors = this.state.errors;
        
        
        return(
            <article className="onderzoek">
                <OnderzoekInfoComponent cssClass='onderzoek__title' naam="Vraag" type='toevoegen' id={this.props.match.params.id} /> 
            <article className="vragen">
            <form className="vragen-form__form" onSubmit={this.handleForm}>

                    <section className="vragen-form__section">
                    <label htmlFor="email">Naam vraag:</label><br />
                    <input type="text" className="vraag-form__input" id="vraag" name="vraag" placeholder="Typ hier de titel" onChange={this.handleInput}></input>
                    </section>

                    <section className="vragen-form__section">
                    <label htmlFor="type_vraag">Type Vraag:</label><br />
                    <select name="cat_naam" onChange={this.handleInput}>
                        {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.value}</option>
                        ))}
                    </select>
                    </section>
                    
                    <section>
                    <label htmlFor="type_vraag">Categorie:</label><br />
                    <select name="type_vraag" id="type_vraag" onChange={this.handleInput}>
                        <option value="meerkeuze">Meerkeuze vraag</option>
                        <option value="openvraag">Open vraag</option>
                    </select>
                    </section>

                    <section className="vragen-form__section">
                    <input type="submit" className="vragen-form__button primary" value="Vraag Toevoegen" />
                    {errors.length > 0 && <p className="vragen-form__paragraph__error">{errors}</p>}
                    {this.state.message.length > 0 && <p className="vragen-form__paragraph__success">{this.state.message}</p>}
                    </section>
                </form>
            </article>
            </article>
        )
    }
}

export default vragenAanmaken;