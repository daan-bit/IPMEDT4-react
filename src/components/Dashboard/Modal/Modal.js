import './Modal.css';
import {connect} from "react-redux";
import { Component } from 'react';
import { changeShow } from '../../../store/Actions';

import axios from 'axios';

class Modal extends Component{

  closeModal(){
    this.props.changeShow(false);
  }

  submit = (e) =>{
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/destroy', {
            naam: this.props.verwijder,                     
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
        <section className="modal__textSection">
          <p>Weet je zeker dat je {this.props.verwijder} wilt verwijderen</p>
        </section>     

      <form className="modal__form" onSubmit={this.submit}>
        <section className="modal__buttonContainer">
          <button type="submit" className="modal__verwijderen primary">Verwijderen</button>   
          <button type="button" name="annuleren" className="modal__annuleren primary" onClick={() => this.closeModal()}>Annuleren</button>                    
        </section>
      </form>             
      </article>
    </div>
    );
  };
}



  const mapStateToProps = state => {
    return {verwijder: state.verwijder, show: state.show};
};

export default connect(mapStateToProps,
  {changeShow: changeShow})(Modal);

