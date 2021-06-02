import React, { Component } from 'react';



import './Overzicht.css';

class Overzicht extends Component{

    render(){
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
    
}

export default Overzicht;