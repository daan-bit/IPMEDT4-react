import React, { Component } from "react";
import "./vraag.css";
import axios from "axios";
import GeslotenVraag from "./VragenKind/GeslotenVraag";
import OpenVraag from "./VragenKind/OpenVraag";
import StatusBar from "./StatusBar/StatusBar";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addAnswer from "../../store/actions/addAnswer";
import { Link } from "react-router-dom";

class Vraag extends React.Component{
    state = {
        onderzoek_id: 1,//this.props.match.params.id,
        vraag: "",
        type_vraag: "",
        cat_naam: "",
        vraag_index:   1,
        questions: ["1", "2", "3", "4", "5"],
        currentQuestion: 0,
        currentAns: ""
    }



    constructor(props) {
        super(props);

        this.makeApiCall();
        this.vorigeVraag()
               
        if(this.props.match.params.quest_id) {
            this.state.vraag_index =  Number ( this.props.match.params.quest_id ) 
            this.state.currentQuestion = Number ( this.props.match.params.quest_id ) - 1
        }
        

        
    } 

    next() {
        // this.setState({ 
        //   currentQuestion: this.state.currentQuestion+1,  
        // })
    }

    makeApiCall = event => {
        const BASE_URL = "http://madebydaniek-testwebsite3.nl/api/onderzoek/"+this.state.onderzoek_id+"/vragen";
        axios.get(BASE_URL).then(res =>{
            this.onderzoek = res.data;
            
            //this.stateUpdate(0);
            
        })

    }
    stateUpdate = vraag_id => {
        
        const { vraag_index, currentQuestion, currentAns } = this.state
        const active = this.props.ans[vraag_id  - 1] ?? 'vraag'
        
        if(this.onderzoek.length === vraag_id) {
            window.location.href = "/overzicht/"+ this.state.onderzoek_id
        }
        if(this.onderzoek.length < vraag_id) {
            return console.log('The End!')
        }

        this.props.ans[ vraag_id - 1 ] = currentAns ? 'vraag' + currentAns : active
        this.props.addAnswer( this.props.ans )

        
        this.setState({
            vraag: this.onderzoek[vraag_id].vraag,
            type_vraag: this.onderzoek[vraag_id].type_vraag,
            cat_naam: this.onderzoek[vraag_id].cat_naam,
            currentQuestion: currentQuestion + 1,
            vraag_index: vraag_index + 1,
            currentAns: ""
        })
    }
    stateUpdateBackward = vraag_id => {
        const { vraag_index, currentQuestion, currentAns } = this.state
        if(this.onderzoek.length > 0 && !vraag_id) 
            return console.log('The Start!')
         
        if(currentAns)  {
            this.props.ans[vraag_id-1] = 'vraag' + currentAns
            this.props.addAnswer( this.props.ans )
        }
    
        this.setState({
            vraag: this.onderzoek[vraag_id].vraag,
            type_vraag: this.onderzoek[vraag_id].type_vraag,
            cat_naam: this.onderzoek[vraag_id].cat_naam,
            currentQuestion: currentQuestion - 1,
            vraag_index: vraag_index - 1,
            currentAns: ""
        });
    }

    volgendeVraag = () => {
            
        this.stateUpdate(this.state.vraag_index)
    }

    vorigeVraag = () => {
        if(this.state.vraag_index - 1 <= 0) return
        //console.log(this.state.vraag_index)
     
        this.stateUpdateBackward(this.state.vraag_index -1)
    }

    updateAnswer = then => {
        this.setState({ currentAns: then.target.dataset.type })
    }
    
 
    render(){
        console.log('state start render',this.state)
        return(
            <section className="u--grid">
                <article className="category">
                <Link to={'/overzicht/:id'}>
                <button className="category__btn"><p className="category__text"><i className="category__icon"><MdKeyboardArrowLeft/></i>Terug naar overzicht</p></button>  
                </Link>
                    <h1 className="category__title">{ this.state.cat_naam }</h1> 
                </article>

                <article className="vraag">
                    <h3 className="vraag__title vraag__title--color">Vraag { this.state.currentQuestion + 1 } </h3>
                    <p className="vraag__text" >{this.state.vraag}</p> 
                        { 
                            this.type_vraag === "openvraag" ? 
                                <OpenVraag updateAnswer={this.updateAnswer} /> : 
                                <GeslotenVraag ans={this.props.ans} current_id={this.state.vraag_index} updateAnswer={this.updateAnswer}  /> 
                        }
                </article>

                <StatusBar 
                    progress={ 100 / this.state.questions.length * (this.state.currentQuestion+1) } 
                    next={this.next.bind(this)} 
                    aantal={this.state.questions.length} 
                    huidige={this.state.currentQuestion+1} 
                    volgendeVraag={this.volgendeVraag} 
                    vorigeVraag={this.vorigeVraag}
                />
            </section>
        );
    }
}

function mapStateToProps(state){
    return {
        ans: state.ans
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ addAnswer }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Vraag);