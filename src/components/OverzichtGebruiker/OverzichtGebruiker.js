import React from "react";
import "./OverzichtGebruiker.css";
import { connect } from 'react-redux';

class OverzichtGebruiker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          onderzoek_id: this.props.match.params.id,
        }; //loading zetten we op true eerst
      }

      render(){
        console.log(this.state.onderzoek_id)
        console.log(this.props)
        return(
            <h1>hello dashboard</h1>
            
        );
    }
}

function mapStateToProps(state){
  return {
      ans: state.ans
  };
}


export default connect(mapStateToProps)(OverzichtGebruiker);