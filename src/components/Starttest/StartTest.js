import React from "react";
import "./StartTest.css";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";

class StartTest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {testCode: "", errors: {}};
    }
    onSearch = (event) => {
        this.setState({testCode: event.target.value})
        
    }

    handleForm = (e) => {
        e.preventDefault();
        this.makeApiCall();
       
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]:value})
        
    }

    makeApiCall = event => {
        console.log(this.state.testCode);
        // onderzoek opvragen via Api met de ingevulde code
        //const BASE_URL = "https://www.madebydaniek-testwebsite3.nl/api/onderzoeken/";
        const BASE_URL = "http://localhost:8000/api/onderzoeken/";
        axios.get(BASE_URL + this.state.testCode ).then(res =>{
            this.props.history.push("/vragen/" + res.data.id + "/1", { state: this.state.testCode}); 
        }).catch(e => this.setState({errors: e.response.data}));
    }



    render(){
        const error = this.state.errors;
        return(
            // Dit is een input voor de code van een onderzoek
            <section className="searchbar_section">
                <article className="code">
                    <h1 className="code__title">Code</h1>
                    <p className="code__text">Vul hier je code in die je hebt ontvangen via de mail.</p>
                    <p className="login-form__paragraph__error">{error.errors}</p>
                </article>

                <form className="code__form" onSubmit={this.handleForm}>
                    <input onChange={this.handleInput} className="code__input" name="testCode" type="text" placeholder="CODE" required />
                    <button type="submit">Start het onderzoek</button>
                </form>
            </section>
        );
    }
}

export default withRouter(StartTest);