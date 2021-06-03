import React, { Component } from 'react';
import InfoOnderzoek from '../infoOnderzoek/InfoOnderzoek';
import axios from 'axios';
import "./vragenAanmaken.css";

class vragenAanmaken extends Component{


    constructor(props) {
    super(props);
    this.state = { message: '', onderzoek_id: 0, selectOpties: [], label: '', value: '', vraag: '', type_vraag: '', cat_naam: 'Informatica', errors: {}} 
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
        axios.post('http://127.0.0.1:8000/api/vragen/store',  data)
        .then(res => {
        this.setState({message: res.data.message});
        console.log(res);
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
            "label": d.naam,
            "value": d.naam
        }))
        console.log(opties);
        this.setState({selectOpties: opties})

        //this.setState({categorie: res.data.naam});
        //this.setState({naam: res.data.naam}) //redux toepassen
        })//.catch(e => this.setState({errors: e.response.data}));
    }
   

    render(){
        return(
            <article className="onderzoek">
                <InfoOnderzoek />
            <article className="vragen">
            <form className="vragen-form__form" onSubmit={this.handleForm}>

                    <section className="vragen-form__section">
                    <label htmlFor="email">Naam vraag:</label><br />
                    <input type="text" className="vraag-form__input" id="vraag" name="vraag" placeholder="Typ hier de titel" onChange={this.handleInput}></input>
                    </section>
                    <section className="vragen-form__section">

                    <label htmlFor="type_vraag">Type Vraag:</label><br />
                    <input type="text" className="vraag-form__input" id="type_vraag" name="type_vraag" placeholder="Typ hier de type" onChange={this.handleInput}></input>
                    </section>
                    <section className="vragen-form__section">
                    <input type="submit" className="vragen-form__button primary" value="+" />
                    <p className="vragen-form__paragraph__success">{this.state.message}</p>
                    </section>
                </form>
            </article>
            </article>
        )
    }
}

export default vragenAanmaken;