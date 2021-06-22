import React from "react";
import "./StartTest.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

class StartTest extends React.Component{
    
    state = {testCode: ""};

    onSearch = (event) => {
        this.setState({testCode: event.target.value})
        
    }
    makeApiCall = event => {
        event.preventDefault();
        console.log(this.state.testCode);

        // onderzoek opvragen via Api met de ingevulde code
        const BASE_URL = "https://www.madebydaniek-testwebsite3.nl/api/onderzoek/";
        axios.get(BASE_URL + this.state.testCode ).then(res =>{

            console.log(res);
            if (res.data === "") {
                // Hier moet de foutmelding komen dt er geen onderzoek is gevonden
                alert('GEEN ONDERZOEK');
              }
            else {
                // Hier moet de pagina naar de dashboard pagina gaan die het onderzoek bevat.
                window.location.href = "/overzicht/"+ res.data.id;
            }
        })
    }



    render(){
        
        return(
            // Dit is een input voor de code van een onderzoek
            <section className="searchbar_section">
                <article className="code">
                    <h1 className="code__title">Code</h1>
                    <p className="code__text">Vul hier je code in die je hebt ontvangen via de mail.</p>
                </article>

                <form className="code__form" onSubmit={this.makeApiCall}>
                    <input onChange={this.onSearch} className="code__input" type="text" placeholder="CODE" vlaue={this.state.testCode}/>
                    <button type="submit">Start het onderzoek</button>
                </form>
            </section>
        );
    }
}

export default StartTest;