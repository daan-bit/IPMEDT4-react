import React, { Component } from 'react';

import axios from 'axios';

import "./Sidebar.css";

class Sidebar extends Component {

    constructor(props){
        super(props)
        this.state = {
            onderzoek: "",
        }
    }

    change = (event) =>{
        this.setState({onderzoek: event.target.value});
    }

    submit(){
        axios.post('http://127.0.0.1:8000/api/store', {
                naam: this.state.onderzoek,                      
            }).then(function (response) {           
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
    }

    makeApiCall = () =>{
        const BASE_URL = "http://localhost:8000/api/onderzoeken";

        axios.get(BASE_URL).then(function (response){
           console.log(response.data);
        });
    };



    render(){
        return(
            <article className="sidebar">
                <nav className="sidebar__nav">
                        <a href="#" className="nav__a">Onderzoek 1</a>
                        <a href="#" className="nav__a">Onderzoek 2</a>
                </nav>

                <div className="sidebar__buttonContainer">
                    <input type="text" onChange={this.change}/>
                    <button onClick={()=>{this.submit()}} className="buttonContainer__button">Onderzoek maken</button>
                </div>

                <button onClick={()=>{this.makeApiCall()}} className="buttonContainer__button">Ophalen</button>
            </article>
        )
    }
    
}

export default Sidebar;


