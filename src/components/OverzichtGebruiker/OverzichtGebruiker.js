import React from "react";
import "./OverzichtGebruiker.css";
import axios from "axios";
import Lijstmetvragen from "./Lijstmetvragen/Lijstmetvragen";
import { connect } from 'react-redux';

class OverzichtGebruiker extends React.Component{  
  constructor(props) {
        super(props);
        
        this.state = {
          //opvragen van varialble in de url van de ingevoerde code
          onderzoek_id: this.props.match.params.id,
        }; 
        
        // we maken van het onderzoek id een vaste const
        const onderzoek_code = this.state.onderzoek_id; 
    }


   render(){
      
      return(
        <section id="overzichtGebruiker">
          <Lijstmetvragen></Lijstmetvragen> 
        </section>       
      )
        
    }
}

function mapStateToProps(state){
  return {
      ans: state.ans
  };
}


export default connect(mapStateToProps)(OverzichtGebruiker);