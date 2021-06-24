import React from "react";
import "./OpenVraag.css";
import { withRouter } from "react-router-dom";

class GeslotenVraag extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            textareaValue: "",
        }

    }

    handleOnChange(event) {
        this.setState({
          textareaValue: event.target.value
        });
        localStorage.setItem('ans' + [this.props.current_id], this.state.textareaValue)
      }

    render(){
        const { ans, current_id } = this.props
        const active = ans ? ans[current_id-1] : 0
        return(
            <form className="openvraag">
                <label htmlFor="openvraag"></label>
                <textarea className="openvraag__text" name="openvraag" id="openvraag" placeholder="Uw antwoord.." onChange={this.handleOnChange.bind(this)}></textarea>
            </form>  
        );
    }
}

export default withRouter(GeslotenVraag);