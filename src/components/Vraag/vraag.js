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

class Vraag extends React.Component{
    state = {
        onderzoek_id: localStorage.getItem('onderzoek_id'),//this.props.match.params.id,
        vraag: "",
        type_vraag: "",
        cat_naam: "",
        vraag_index:   1,
        questions: localStorage.getItem('quests'),
        currentQuestion: 0,
        currentAns: ""
    }

    onderzoek = [
        { vraag: "1", flag: "1", cat_naam: 'awd'},
        { vraag: "2", flag: "0", cat_naam: 'awd1'},
        { vraag: "3", flag: "1", cat_naam: 'awd2'},
        { vraag: "4", flag: "1", cat_naam: 'awd3'},
        { vraag: "5", flag: "1", cat_naam: 'awd4'},
        { vraag: "6", flag: "1", cat_naam: 'awd5'}
    ]
    


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
            console.log('data', res.data)
            //this.stateUpdate(0);
            localStorage.setItem('quests', this.onderzoek.map(i => i.id))
            let LS = localStorage.getItem('ans')
            if(LS) {
                const vraag_id = this.props.match.params.quest_id - 1
                console.log(vraag_id,this.onderzoek )
                this.props.addAnswer( LS.split(',') ) 
                this.setState({
                    vraag: this.onderzoek[vraag_id].vraag,
                    type_vraag: this.onderzoek[vraag_id].type_vraag,
                    cat_naam: this.onderzoek[vraag_id].cat_naam,
                })
            }
        })

    }

    stateUpdate = vraag_id => {
        
        const { vraag_index, currentQuestion, currentAns } = this.state
        const active = this.props.ans[vraag_id  - 1] ?? 'vraag'

        if(this.onderzoek.length === vraag_id) {
            window.location.href = "/overzicht/"+ this.state.onderzoek_id
        }
        if(this.onderzoek.length < vraag_id) {
            console.log('The End!')
        }

        //Alex - DIT ZORGT ERVOOR DAT ER GEEN VRAAG VOOR EEN ANTWOORD STAAT, wil je het terug comment onderstaande uit
        //Alex - er wordt een string van gemaakt, dit hebben we nodig voor het verzenden van antwoorden
        this.props.ans[ vraag_id - 1 ] = currentAns ?  + currentAns  : active 
        //this.props.ans[ vraag_id - 1 ] = currentAns ?   + currentAns : active

        this.props.addAnswer( this.props.ans )
       
        localStorage.setItem('ans',this.props.ans)

        localStorage.setItem('antworden', [this.props.ans])
         //Alex

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
            localStorage.setItem('ans', this.props.ans);
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
    
    backOverzicht = e => {
        e.preventDefault()
        const { vraag_index, currentQuestion, currentAns } = this.state
        const active = this.props.ans[this.state.vraag_index  - 1] ?? 'vraag'
       
        this.props.ans[ this.state.vraag_index - 1 ] = currentAns ? 'vraag' + currentAns : active
        this.props.addAnswer( this.props.ans )
        localStorage.setItem('ans', this.props.ans)
        
        window.location.href = "/overzicht/"+ this.state.onderzoek_id
    }
 
    render(){
        console.log('state',this.state)
        return(
            <section className="u--grid">
                <article className="category">
                    <a onClick={ this.backOverzicht } href="" className="category__btn"><p className="category__text"><i className="category__icon"><MdKeyboardArrowLeft/></i>Terug naar overzicht</p></a>  
                    <h1 className="category__title">{ this.state.cat_naam }</h1> 
                </article>

                <article className="vraag">
                    <h3 className="vraag__title vraag__title--color">Vraag { this.state.currentQuestion + 1 } </h3>
                    <p className="vraag__text" >{this.state.vraag}</p> 
                        {  this.state.type_vraag === "openvraag" ? 
                                <OpenVraag ans={this.props.ans} current_id={this.state.vraag_index}  updateAnswer={this.updateAnswer}/> : 
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
    return { ans: state.ans }
}

export default connect(mapStateToProps, { addAnswer } )(Vraag);

