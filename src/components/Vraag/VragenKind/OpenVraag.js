import React from "react";
import "./OpenVraag.css";

class GeslotenVraag extends React.Component{


    render(){
        
        return(
            <form className="openvraag" action="" method="POST">
                <label for="openvraag"></label>
                <textarea className="openvraag__text" name="openvraag" id="openvraag" placeholder="jouw antwoord.."></textarea>
            </form>  
        );
    }
}

export default GeslotenVraag;