import React, { Component } from 'react';
import axios from 'axios'
import "./vragenBekijken.css";



class vragenBekijken extends Component{
    constructor(props) {
        super(props)
        this.state = {onderzoek_id: this.props.match.params.id, errors: {}, vragen: []} //voor nu id is even static
    }

    apiCall = () => {
        const DEFAULT_URL = 'http://localhost:8000/api/'
        const ONDERZOEK_URL = 'onderzoek/' + this.state.onderzoek_id + '/vragen';
        axios.get(DEFAULT_URL + ONDERZOEK_URL)
        .then(res => { 
            this.setState({
                vragen: res.data
            })
        }).catch(e => this.setState({errors: e.response.data}));
    }

    componentDidMount() {
        this.apiCall();

    }

    render(){
        const vragen = this.state.vragen;
        const vragenGevuld = vragen.length ? (
            vragen.map(vraag => {
                return (
                    <article className="vragen_1" key={vraag.id}>
                        <h2 className="vraag-title">{vraag.vraag}</h2>
                        <h2 className="vraag-category">{vraag.cat_naam}</h2>
                        <h2 className="vraag-category">{vraag.type_vraag}</h2>
                    </article>
                )
            })
        ) : (
            <h1>Geen vragen toegevoegd voor dit onderzoek. Wilt u ze toevoegen?</h1>
        )
        
        return(
          <section className="vragen">
              <h2>Op deze pagina kunt u de vragen bekijken voor dit onderzoek</h2>
              {vragenGevuld}
          </section>
        )
    }
}

export default vragenBekijken;