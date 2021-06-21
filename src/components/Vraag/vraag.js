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
        onderzoek_id: 1,//this.props.match.params.id,
        vraag: "",
        type_vraag: "",
        cat_naam: "",
        vraag_index: 1,
        questions: ["1", "2", "3", "4", "5"],
        currentQuestion: -1,
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
        // console.log(this.state.onderzoek_id);
        this.makeApiCall();
        this.vorigeVraag()
        // this.state = {
            
        //     // questions: this.onderzoek.length, /* hier het AANTAL vragen in zetten */
        //     currentQuestion: -1,
        // };
        
    } 

    next() {
        this.setState({ 
            currentQuestion: this.state.currentQuestion+1,
        })
    }

    makeApiCall = event => {
        const BASE_URL = "http://madebydaniek-testwebsite3.nl/api/onderzoek/"+this.state.onderzoek_id+"/vragen";
        axios.get(BASE_URL).then(res =>{
            this.onderzoek = res.data;
            // console.log(this.onderzoek.data);
            this.stateUpdate(0);
            // console.log(this.onderzoek);
        })
    }

    stateUpdate = vraag_id => {
        const { vraag_index, currentQuestion, currentAns } = this.state
        const active = this.props.ans[vraag_id  - 1] ?? 'vraag'
        
        if(this.onderzoek.length < vraag_id) 
            return console.log('The End!')

        

        this.props.ans[ vraag_id - 1 ] = currentAns ? 'vraag' + currentAns : active
        this.props.addAnswer( this.props.ans )

        console.log(this.props.ans)

        this.setState({
            vraag: this.onderzoek[vraag_id].vraag,
            type_vraag: this.onderzoek[vraag_id].type_vraag,
            cat_naam: this.onderzoek[vraag_id].cat_naam,
            currentQuestion: currentQuestion + 1,
            vraag_index: vraag_index + 1,
            currentAns: "" 
        });

        
    }
    stateUpdateBackward = vraag_id => {
    
        if(this.onderzoek.length > 0 && !vraag_id) 
            return console.log('The Start!')
         
        if(this.state.currentAns)  {
            this.props.ans[vraag_id-1] = 'vraag' + this.state.currentAns
            this.props.addAnswer( this.props.ans )
        }
    
        this.setState({
            vraag: this.onderzoek[vraag_id].vraag,
            type_vraag: this.onderzoek[vraag_id].type_vraag,
            cat_naam: this.onderzoek[vraag_id].cat_naam,
            currentQuestion: this.state.currentQuestion-1,
            currentAns: ""
        });
    }

    volgendeVraag = () => {
        
        this.stateUpdate(this.state.vraag_index);
    }

    vorigeVraag = () => {
        if(this.state.vraag_index - 1 <= 0) return
        console.log(this.state.vraag_index)
        this.setState({ vraag_index: this.state.vraag_index - 1 });
        this.stateUpdateBackward(this.state.vraag_index);
    }

    updateAnswer = then => {
        this.setState({ currentAns: then.target.dataset.type })
    }
    
 
    render(){
        return(
            <section className="vragen">
                <article className="category">
                    <button className="category__btn"><p className="category__text"><i className="category__icon"><MdKeyboardArrowLeft/></i>Terug naar overzicht</p></button>  
                    <h1 className="category__title">{ this.state.cat_naam }</h1> 
                </article>

                <article className="vraag">
                    <h3 className="vraag__title vraag__title--color">Vraag { this.state.currentQuestion + 1 } </h3>
                    <p className="vraag__text" >{ this.state.vraag }</p> 
                        { 
                            this.type_vraag === "openvraag" ? 
                                <OpenVraag updateAnswer={this.updateAnswer} /> : 
                                <GeslotenVraag ans={this.props.ans} current_id={this.state.vraag_index} updateAnswer={this.updateAnswer}  /> 
                        }
                        {/* <button onClick={this.typeVraag} className="statusbar__btn">Volgende vraag</button> */}
                </article>

                <StatusBar 
                    progress={ 100 / this.state.questions.length * (this.state.currentQuestion + 1) } 
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