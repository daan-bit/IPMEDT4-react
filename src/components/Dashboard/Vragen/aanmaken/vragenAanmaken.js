import React, { Component } from 'react';
import {connect} from 'react-redux';
import InfoOnderzoek from '../infoOnderzoek/InfoOnderzoek';
class vragenAanmaken extends Component{

    render(){
        return(
            <article className="onderzoek">
                <InfoOnderzoek />
            <article className="vragen" />
            </article>
        )
    }
}

export default vragenAanmaken;