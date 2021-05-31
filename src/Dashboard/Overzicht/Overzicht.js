import React from 'react';
import {connect} from 'react-redux';

import './Overzicht.css';

const Overzicht = (props) => {
    return(
        <article className="overzicht">
            <section className="overzicht__container">
                <figure className="container__figure">Gemiddelde</figure>
                <figure className="container__figure">Totaal</figure>
                <figure className="container__figure">Mediaan</figure>
                <figure className="container__figure">Modus</figure>
            </section>
        </article>
    )
}

export default Overzicht;