import './Modal.css';
import {connect} from "react-redux";
import { Component } from 'react';
import { changeModalNaam, changeShow, changeUpdate, changeVerwijder } from '../../../store/Actions';

import axios from 'axios';

class Modal extends Component{

  closeModal(){
    this.props.changeShow(false);
    this.props.changeUpdate(true);
  }

  submit = (e) =>{
    e.preventDefault();
    axios.put('http://madebydaniek-testwebsite3.nl/api/update', {
            id: this.props.verwijder,                     
        }).then(function (response) {           
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    this.closeModal();    
}
  
  render(){
  const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
 
  return (
    <div className={showHideClassName}>
      <article className="modal">
          <section className="modal__content">
          <section className="modal__textSection">
            <h2 className="modal__text">Weet je zeker dat je het onderzoek: {this.props.modalNaam} wilt verwijderen</h2>
          </section>     

          <form className="modal__form" onSubmit={this.submit}>
            <section className="modal__buttonContainer">
              <button type="submit" className="modal__button red">Verwijderen</button>   
              <button type="button" name="annuleren" className="modal__button ghost" onClick={() => this.closeModal()}>Annuleren</button>                    
            </section>
          </form>             
        </section>
      </article>
    </div>
    );
  };
}



  const mapStateToProps = state => {
    return {verwijder: state.verwijder, show: state.show, update: state.update, modalNaam: state.modalNaam};
};

export default connect(mapStateToProps,
  {changeShow: changeShow, changeVerwijder: changeVerwijder, changeUpdate: changeUpdate, changeModalNaam: changeModalNaam})(Modal);

