import React, { Component } from 'react';
import { changeVragenOverzicht } from '../../../store/Actions';
import './Overzicht.css';
import {connect} from "react-redux";
import { Link, Redirect } from 'react-router-dom'

class Overzicht extends Component{

    constructor(props){
        super(props)
        
        this.state = {
        }
    }

    // <Link className="sidebar__onderzoekLink" to={`/admin/onderzoek/${item.id}/vragen`}></Link>

        render(){
            const vragen = this.props.onderzoekVragenId;
            
            return(   
                vragen.length > 0 ?(    
                <article className="overzicht">
                    <ul className="overzicht__vragenlijst">
                        
                            <h1 className="overzicht__titel">Vragen bij onderzoek</h1>
                        {vragen.map((item, i) => (
                        
                        <section className="overzicht__vragen" key={i}>
                            <li className="overzicht__vragenContainer">
                                    <h2 className="overzicht__vraagTitel">{i + 1}. {item.vraag}</h2>                
                            </li>
                            <div className="overzicht__content">
                                <div className="overzicht__textWrapper">
                                    <p className="overzicht__text">Categorie: {item.cat_naam}</p>
                                    <p className="overzicht__text">Soort vraag: {item.type_vraag}</p>
                                </div>
                                <div className="overzicht__buttonContainer">
                                    <Link className="overzicht__button" to={`/admin/vraag/${item.id}/statistiek`}><button className="overzicht__statButton primary">Statistiek bekijken</button></Link>
                                </div>
                            </div>
                        </section>
                            
                        ))}
                    </ul>   
                </article>
                ) : (
                    <article className="overzicht overzicht__blank">
                        <h2 className="overzicht__ondertitel">Klik op de titel van een onderzoek om de vragen te tonen en statistieken te bekijken</h2>
                    
                    </article>
                )
        )

        
        }
        
    
    
}

const mapStateToProps = state =>{
    return { onderzoekVragenId: state.onderzoekVragenId};
}

export default connect(
    mapStateToProps, 
    {changeVragenOverzicht: changeVragenOverzicht}
) (Overzicht);
