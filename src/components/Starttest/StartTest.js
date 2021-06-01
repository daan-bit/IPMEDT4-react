import React from "react";
import "./StartTest.css";


class StartTest extends React.Component{
    state = {testCode: ""};

    onSearch = (event) => {
        this.setState({testCode: event.target.value})
        
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.testCode);
        
    }


    render(){
        return(
            <section className="searchbar_section">
                <form onSubmit={this.onSubmit} >
                    <input onChange={this.onSearch} className="searchbar_section__input" type="text" vlaue={this.state.testCode}/>
                    <button type="submit">Start het onderzoek</button>
                </form>
            </section>
        );
    }
}

export default Searchbar;