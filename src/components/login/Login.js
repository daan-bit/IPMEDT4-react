import React,  { Component } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import { connect } from 'react-redux';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { email: '', password: '', errors: {}}
    }

    apiCall = () => {
        const DEFAULT_URL = 'http://localhost:8000/api/'
        const data = {email:this.state.email, password: this.state.password};
        axios.post(DEFAULT_URL + 'auth/login', data)
        .then(res => { 
        cookie.set('token', res.data.access_token); //cookie zetten
        this.props.setLogin(res.data.user); //redux toepassen
        this.props.history.push('/dashboard'); //stuur gebruiker naar dashboard
        }).catch(e => this.setState({errors: e.response.data}));
    }

    componentDidMount() {
    }

    handleForm = (e) => {
        e.preventDefault();
        this.apiCall(this.props.typeCall);
        //dispatch actie naar redux

        //this.props.history.push('/test');
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]:value})
        
    }
    render() {
        const error = this.state.errors;


        return(
            <article className="login-form">
                <section className="login-form__explain">
                <h2 className="login-form__title">Tevredenheidsonderzoek beheer</h2>
                <p className="login-form__paragraph">Log in met uw gegevens hieronder</p>
                </section>
                <form className="login-form__form" onSubmit={this.handleForm}>
                    <section className="login-form__section">
                        <label htmlFor="email">Uw e-mail</label><br />
                        <input type="text" className="login-form__input" id="email" name="email" placeholder="Uw Email" onChange={this.handleInput}></input>
                    </section>


                    <section className="login-form__section">
                        <label htmlFor="password">Uw wachtwoord</label><br />
                        <input type="password"  className="login-form__input"id="password" name="password" placeholder="************" onChange={this.handleInput}></input>
                    </section>

                    <section className="login-form__section">
                    <input type="submit" className="login-form__button primary" value="Inloggen" />
                    <p className="login-form__paragraph__error">{error.errors}</p>
                    </section>
                </form>
            </article>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setLogin: (user) => dispatch({type:"SET_LOGIN", payload:user})
    };
}
export default connect(null, mapDispatchToProps)(Login)