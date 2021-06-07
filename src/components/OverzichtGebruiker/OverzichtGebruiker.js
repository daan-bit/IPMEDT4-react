import React from "react";
import "./OverzichtGebruiker.css";

class OverzichtGebruiker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          onderzoek_id: this.props.match.params.id,
        }; //loading zetten we op true eerst
        const onderzoek_code = this.state.onderzoek_id;
        
    }


      render(){
        console.log(this.state.onderzoek_id)
        return(
            <h1>hello dashboard</h1>
            
        );
    }
}

export default OverzichtGebruiker;