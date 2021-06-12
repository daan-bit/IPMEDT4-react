import React from "react";
import "./StartTest.css";
import axios from "axios";

class StartTest extends React.Component{
    state = {testCode: ""};

    onSearch = (event) => {
        this.setState({testCode: event.target.value})
        
    }
    makeApiCall = event => {
        event.preventDefault();
        console.log(this.state.testCode);
        const BASE_URL = "http://127.0.0.1:8000/api/onderzoeken/";
        axios.get(BASE_URL + this.state.testCode ).then(res =>{
            if (res.data === "") {
                alert('GEEN ONDERZOEK');
              }
            else {
                alert('JAA FOUND IT');
            }
        })
    }



    render(){
        
        return(
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