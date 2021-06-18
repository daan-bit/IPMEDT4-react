import React, { Component } from 'react';

import axios from 'axios';
import './Overzicht.css';
import CirkelGrafiek from './grafieken/CirkelGrafiek';
import BarGrafiek from './grafieken/BarGrafiek';

import NavBar from '../../NavBar/NavBar';


class InfoOnderzoek extends Component{

    constructor(props) {
        super(props)
        this.state = {vraag_id: this.props.match.params.id, vragen: [], antwoorden: [], zeer_oneens: [], oneens: [], eens: [], zeer_eens: [], totaal: '', errors: [], type_vraag: ''} 
    }

    apiCall = () => {
        const DEFAULT_URL = 'http://localhost:8000/api/'
        axios.get(DEFAULT_URL + `vraag/${this.state.vraag_id}/antwoorden`)
        .then(res => {
            for(let i=0; i< res.data.length; i++) {
                this.state.antwoorden.push(res.data[i].antwoord);
            }

            let antwoorden = this.state.antwoorden;
            let resultaat = antwoorden.filter(antwoorden => antwoorden.includes("1"));
            this.setState({zeer_oneens: resultaat});

            let resultaat1 = antwoorden.filter(antwoorden => antwoorden.includes("2"));
            this.setState({oneens: resultaat1});

            let resultaat2 = antwoorden.filter(antwoorden => antwoorden.includes("4"));
            this.setState({eens: resultaat2});

            let resultaat3 = antwoorden.filter(antwoorden => antwoorden.includes("5"));
            this.setState({zeer_eens: resultaat3});
        }).catch(e => this.setState({errors: e.response.data}),
        );
    }
    
    getCategory = () => {
    const DEFAULT_URL = 'http://localhost:8000/api/'
        axios.get(DEFAULT_URL + `vraag/${this.state.vraag_id}`)
        .then(res => {
            this.setState({type_vraag: res.data.type_vraag});
        })
    }
    componentDidMount() {
        this.apiCall();
        this.getCategory();
    }


    render(){
        const antwoorden = this.state.antwoorden; //array begint op 0, we willen op 1 beginnen
        return(
                <article className="statistieken">
                    <NavBar link="/admin/dashboard" linkName="Ga terug" cssClass="navBar__listItem"/>

                    <section className="statistieken__titelWrapper">
                        	<h2 className="statistieken__title">Op deze pagina kunt u de statistieken bekijken voor deze vraag</h2>
                    </section>
                    
                    <section className="statistieken__contentWrapper">
                        <section className="statistieken__content">
                            {(antwoorden.length > 19 && this.state.type_vraag === 'meerkeuze') && //meer dan 20 antwoorden gegeven per vraag zoals in de opdrachtseisen beschreven staat? Is het een meerkeuze vraag? Tabel begint vanaf 0, niet 1
                            <React.Fragment>
                                <p className="statistieken__paragraph">Deze vraag is {antwoorden.length} keer beantwoord.</p>
                                
                                <CirkelGrafiek 
                                    zeer_oneens={this.state.zeer_oneens.length} 
                                    oneens={this.state.oneens.length} 
                                    eens={this.state.eens.length} 
                                    zeer_eens={this.state.zeer_eens.length}
                                />
                                <BarGrafiek 
                                    zeer_oneens={this.state.zeer_oneens.length} 
                                    oneens={this.state.oneens.length} 
                                    eens={this.state.eens.length} 
                                    zeer_eens={this.state.zeer_eens.length}
                                />
                            </React.Fragment>
                            }

                        {(antwoorden.length > 19 && this.state.type_vraag === 'open') && //meer dan 20 antwoorden gegeven per vraag zoals in de opdrachtseisen beschreven staat? Is het een open vraag? Tabel begint vanaf 0, niet 1
                            <React.Fragment>
                                <section className="statistieken__antwoordenWrapper">
                                    <h2 className="statistieken__paragraph">Deze vraag is {antwoorden.length} keer beantwoord.</h2>
                                    <ul className="statistieken__list">
                                        {antwoorden.map((antwoord, index) => (
                                            <li className="statistieken__list__item" key={index}><h3 className="statistieken__antwoord">{index + 1}.{antwoord}</h3></li>
                                        ))}
                                    </ul>
                                </section>
                            </React.Fragment>
                        }
                            {antwoorden.length < 19 && 
                                <p>Deze vraag is helaas nog niet minimaal 20 keer beantwoord. Deze vraag is {antwoorden.length} keer beantwoord. Probeer eens later!</p>
                            }
                        </section>
                    </section>
                </article>
        )
    
    }
}

export default InfoOnderzoek;