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

        console.log(ans, active)
        return(
            <form className="openvraag">
                <label htmlFor="openvraag"></label>
                <textarea className="openvraag__text" name="openvraag" id="openvraag" placeholder="Uw antwoord.."   defaultValue={active ?? ''} onChange={this.props.updateAnswer}></textarea>
            </form>  
        );
    }
}

export default withRouter(GeslotenVraag);