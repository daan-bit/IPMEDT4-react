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
        const BASE_URL = "http://127.0.0.1:8000/api/onderzoeken/";
        axios.get(BASE_URL + this.state.testCode ).then(res =>{
            console.log();
            if (res.data == "") {
                // Hier moet de foutmelding komen dt er geen onderzoek is gevonden
                alert('GEEN ONDERZOEK');
              }
            else {
                // Hier moet de pagina naar de dashboard pagina gaan die het onderzoek bevat.
                this.props.history.push("/overzicht/" + res.data.id);
            }
        })
    }



    render(){
        
        return(
            // Dit is een input voor de code van een onderzoek
            <section className="searchbar_section">
                <form onSubmit={this.makeApiCall}>
                    <input onChange={this.onSearch} className="searchbar_section__input" type="text" vlaue={this.state.testCode}/>
                    <button type="submit">Start het onderzoek</button>
                </form>
            </section>
        );
    }
}

export default StartTest;