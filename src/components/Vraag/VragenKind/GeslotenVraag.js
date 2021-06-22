import React from "react";
import "./GeslotenVraag.css";

class GeslotenVraag extends React.Component{

    btn = [
        { id: 1, title: "Oneens", letter: "A" },
        { id: 2, title: "Beetje oneens", letter: "B" },
        { id: 3, title: "Weet ik niet", letter: "C" },
        { id: 4, title: "Beetje eens", letter: "D" },
        { id: 5, title: "Eens", letter: "E" }
    ]

    render(){
        const { ans, current_id } = this.props
        const active = ans ? ans[current_id-1] : 0

        return(
            <article className="vragenInput">
                {this.btn.map(i => 
                    <button onClick={ this.props.updateAnswer } key={i.id} data-type={i.id} data-active={ (active === "vraag"+i.id) ? 1 : 0} className="vragenInput__btn vragenInput__btn--color">
                        {i.title} 
                        <div className="vragenInput__btnlabel">{i.letter}</div>
                    </button>
                )}
            </article>  
        );
    }
}

export default GeslotenVraag;