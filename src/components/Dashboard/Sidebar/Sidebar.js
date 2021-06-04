import React, { Component } from 'react';

import axios from 'axios';

import "./Sidebar.css";


class Sidebar extends Component {

    constructor(props){
        super(props)
        this.state = {
            onderzoek: "",
            onderzoeken: [],
        }
    }

    componentDidMount() {
        this.makeApiCall();
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

        axios.get(BASE_URL)
        .then(res => {
            this.setState({onderzoeken: res.data})
        });
    };

    render(){
        const onderzoeken = (this.state.onderzoeken);
        return(
            <article className="sidebar">
                <ul>
                    {onderzoeken.map((item, i) => (
                    
                        <li key={i}>
                            <a href="#">{item.naam}</a>
                        </li>
                    ))}
                </ul>   

                <div className="sidebar__buttonContainer">
                    <input type="text" onChange={this.change}/>
                    <button onClick={()=>{{this.submit()}; this.makeApiCall();}} className="buttonContainer__button">Onderzoek maken</button>
                </div>

            </article>
        )
    }
    
}

export default Sidebar;


