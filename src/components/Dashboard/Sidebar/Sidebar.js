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
            </article>
        )
    }
    
}

export default Sidebar;