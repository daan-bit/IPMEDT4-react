import React, { Component } from 'react';
import axios from 'axios';
import OnderzoekInfoComponent from '../../Onderzoek/vragen/OnderzoekInfoComponent.js';
import NavBar from '../../../NavBar/NavBar';
import "./vragenAanmaken.css";
import cookie from 'js-cookie';
let token = cookie.get('token');

class vragenAanmaken extends Component{


    constructor(props) {
    super(props);
    this.state = { message: '', onderzoek_id: 0, selectOpties: [], label: '', value: '', vraag: '', type_vraag: 'meerkeuze', cat_naam: 'Informatica', errors: {}, vragenToegevoegd: [], vragen: []} 
    }

    componentDidMount() {
        this.apiCall();
        this.setState({onderzoek_id: this.props.match.params.id});
        this.getVragen();
    }

    handleForm = (e) => {
        e.preventDefault();
        this.submit(this.props.typeCall);
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]:value})        
    }

    
    apiCallVraag = () => {
        const data = {onderzoek_id:this.state.onderzoek_id, cat_naam:this.state.cat_naam, vraag: this.state.vraag, type_vraag:this.state.type_vraag};
        axios.post('http://127.0.0.1:8000/api/auth/vragen/store',  data)
        .then(res => {
        this.setState({message: res.data.message});
        }).catch(e => this.setState({errors: e.response.data})
            );
        this.getVragen();

    }

    handleForm = (e) => {
        e.preventDefault();
        this.apiCallVraag(this.props.typeCall);
    }

    apiCall = () => {
        const DEFAULT_URL = 'http://localhost:8000/api/'
        axios.get(DEFAULT_URL + 'categorien/all')
        .then(res => { 
        const opties = res.data.map(d => ({
            "label": d.naam.toLowerCase(),
            "value": d.naam,
        }))
        this.setState({selectOpties: opties})
        }).catch(e => this.setState({errors: e.response.data}));
    }

    getVragen = () => {
        const DEFAULT_URL = "http://localhost:8000/api/";
        const ONDERZOEK_URL = "onderzoek/" + this.props.match.params.id + "/vragen";
        axios
          .get(DEFAULT_URL + ONDERZOEK_URL)
          .then((res) => {
            this.setState({
              vragen: res.data,
            });
          })
          .catch((e) => this.setState({ errors: e.response.data }));
      };

    verwijderVraag = (id) =>{
        console.log(id);
    }
   

    render(){
        const options = this.state.selectOpties;
        const errors = this.state.errors;
        const vragen = this.state.vragen; 
        return(
        <article className="vragen">
            <NavBar link="/admin/dashboard" linkName="Ga terug" cssClass="navBar__listItem"/>

            <section className="vragen__titelSection">
                <OnderzoekInfoComponent cssClass='vragen__titel' naam="Vraag" type='toevoegen' id={this.props.match.params.id} />
            </section> 
            <section className="vragen__formContainer">
                <form className="vragen__form" onSubmit={this.handleForm}>
                    <section className="vragen__inputSection">
                        <label className="vragen__label" htmlFor="email">Vraag:</label><br />
                        <input type="text" className="vragen__input" id="vraag" name="vraag" placeholder="Typ hier de vraag" onChange={this.handleInput} required></input>
                    </section>

                    <section className="vragen__inputSection">
                        <label className="vragen__label" htmlFor="type_vraag">Categorie:</label><br />
                        <select name="cat_naam" className="vragen__input vragen__input--select" onChange={this.handleInput}>
                            {options.map((option, index) => (
                            <option key={index} value={option.value}>{option.value}</option>
                            ))}
                        </select>
                    </section>
                    
                    <section className="vragen__inputSection">
                        <label className="vragen__label" htmlFor="type_vraag">Soort vraag:</label><br />
                        <select name="type_vraag" className="vragen__input vragen__input--select" id="type_vraag" onChange={this.handleInput}>
                            <option value="meerkeuze">Meerkeuze vraag</option>
                            <option value="openvraag">Open vraag</option>
                        </select>
                    </section>

                    <section className="vragen__buttonContainer">
                        <button type="submit" className="vragen__button green">Vraag Toevoegen</button>
                        {errors.length > 0 && <p className="vragen__paragraph__error">{errors}</p>}
                        {this.state.message.length > 0 && <p className="vragen__paragraph__success">{this.state.message}</p>}
                    </section>
                </form>


                <ul className="vragen__lijst">
                    {vragen.map((item, i) => (
                    
                        <li className="vragen__vraagContainer" key={i}>
                            <h2 className="vragen__vraagTitel">{i + 1}. {item.vraag}</h2>
                            <section className="vragen__verwijderButtonContainer">
                                <button className="vragen__verwijderButton red" onClick={() => this.verwijderVraag(item.id)}>Verwijder vraag</button>
                            </section>
                        </li>
                    ))}
                </ul>   

            </section>
        </article>
        )
    }
}

export default vragenAanmaken;