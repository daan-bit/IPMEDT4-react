import React, { Component } from 'react';

import axios from 'axios';
import './Overzicht.css';
import CirkelGrafiek from './grafieken/CirkelGrafiek';

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
        const antwoorden = this.state.antwoorden;
        return(
            <article className="statistieken">
                <h2 className="statistieken__title">Op deze pagina kunt u de statistieken bekijken voor deze vraag</h2>
                <CirkelGrafiek 
                    zeer_oneens={this.state.zeer_oneens.length} 
                    oneens={this.state.oneens.length} 
                    eens={this.state.eens.length} 
                    zeer_eens={this.state.zeer_eens.length}
                />
            </article>
        )
    
    }
}

export default InfoOnderzoek;