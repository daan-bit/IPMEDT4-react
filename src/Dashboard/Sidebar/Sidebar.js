import React, { Component } from 'react';
import {connect} from 'react-redux';

import axios from 'axios';

import { createOnderzoek } from '/home/daan/ipmedt4/ipmedt4/src/actions.js';

import "./Sidebar.css";

class Sidebar extends Component {

    change = (event) =>{
        this.props.createOnderzoek(event.target.value);
    }

    submit(){
        axios.post('http://127.0.0.1:8000/api/store', {
                naam: this.props.onderzoek,                      
            }).then(function (response) {           
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });



        // fetch('http://127.0.0.1:8000/api/store',{
        //     method: 'post',
        //     body: JSON.stringify(
        //         this.props.onderzoek
        //     ),
        //     headers:{
        //         'Accept' : 'application/json',
        //         'Content-Type' : 'application/json',
        //     }
        // }).then(function(response){
        //     response.json().then(function(resp){
        //         console.log(resp)
        //     })
        // })
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

const mapStateToProps = state =>{
    return { onderzoek: state.onderzoek };
}

export default connect(
    mapStateToProps, 
    {createOnderzoek: createOnderzoek}
) (Sidebar);