import React from 'react';
import './vraagcomponent.css';
const VraagComponent = props => {
                return (
                    <article className="onderzoek-vraag" key={props.id}>
                        <section className="onderzoek-vraag__container">
                            <h2 className="onderzoek-vraag__container__title">Vraag naam: {props.vraag}</h2>
                            <p className="onderzoek-vraag__container__category">Categorie: {props.cat_naam}</p>
                            <p className="onderzoek-vraag__container__type">Type vraag: {props.type_vraag}</p>
                        </section>
                    </article>
                )
}
export default VraagComponent