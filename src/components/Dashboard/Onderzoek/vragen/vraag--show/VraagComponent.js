import { React } from 'react';
import { Link } from 'react-router-dom'

import './vraagcomponent.css';
const VraagComponent = props => {
                return (
                    <article className="onderzoek-vraag" key={props.id}>
                        <section className="onderzoek-vraag__container">
                            <h3 className="onderzoek-vraag__container__title">{props.index + 1}. {props.vraag}</h3>
                            <p className="onderzoek-vraag__container__category">Categorie: {props.cat_naam}</p>
                            <p className="onderzoek-vraag__container__type">Type vraag: {props.type_vraag}</p>
                            <Link className="sidebar__onderzoek" to={`/admin/vraag/${props.link}/statistiek`}>Bekijk statistieken</Link>
                        </section>
                    </article>
                )
}
export default VraagComponent


