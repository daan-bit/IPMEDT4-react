import React, { Component } from 'react';
import { changeVragenOverzicht } from '../../../store/Actions';
import './Overzicht.css';
import {connect} from "react-redux";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


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
                        
                            <li className="overzicht__vragenContainer" key={i}>
                                    <h2 className="overzicht__vraagTitel">{i + 1}. {item.vraag}</h2>
                            </li>
                        ))}
                    </ul>   
                </article>
                ) : (
                    <article className="overzicht">
                        <h2 className="overzicht__ondertitel">Klik op een onderzoek om vragen te tonen</h2>
                    
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
