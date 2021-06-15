import React, { Component } from 'react';

import axios from 'axios';
import './Overzicht.css';
import CirkelGrafiek from './grafieken/CirkelGrafiek';
import BarGrafiek from './grafieken/BarGrafiek';


class InfoOnderzoek extends Component{

    constructor(props) {
        super(props)
        this.state = {vraag_id: this.props.match.params.id, vragen: [], antwoorden: [], zeer_oneens: [], oneens: [], eens: [], zeer_eens: [], totaal: '', errors: []} 
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

    componentDidMount() {
        this.apiCall();
    }


    render(){
        const antwoorden = this.state.antwoorden; //array begint op 0, we willen op 1 beginnen
        return(
                <article className="statistieken">
                    <h2 className="statistieken__title">Op deze pagina kunt u de statistieken bekijken voor deze vraag</h2>
                    {antwoorden.length > 19 && //meer dan 20 antwoorden gegeven per vraag zoals in de opdrachtseisen beschreven staat? Tabel begint vanaf 0, niet 1
                    <React.Fragment>
                        <p className="statistieken__CirkelGrafiek__paragraph">Deze vraag is {antwoorden.length} keer beantwoord.</p>
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
                    {antwoorden.length < 19 && 
                        <p>Deze vraag is helaas nog niet minimaal 20 keer beantwoord. Deze vraag is {antwoorden.length} keer beantwoord. Probeer eens later!</p>
                    }
                    
                </article>
        )
    
    }
}

export default InfoOnderzoek;