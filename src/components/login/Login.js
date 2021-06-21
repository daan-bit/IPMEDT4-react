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
        this.props.history.push('/admin/dashboard'); //stuur gebruiker naar dashboard
        window.location.reload(); // Alex - dit is nodig, anders krijgen we bij sommige API calls 401 unauthorized, omdat sommige API Calls beveiligd zijn
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
                    <h2 className="login-form__title">Inloggen</h2>
                </section>

                <form className="login-form__form" onSubmit={this.handleForm}>
                    <p className="login-form__paragraph__error">{error.errors}</p>
                    
                    <section className="login-form__section">
                        <input type="text" className="login-form__input" id="email" name="email" placeholder="Gebruikersnaam" onChange={this.handleInput}></input>
                        <input type="password"  className="login-form__input"id="password" name="password" placeholder="Wachtwoord" onChange={this.handleInput}></input>
                    </section>

                    <section className="login-form__textContainer">
                        <a href="" className="login-form__text login-form__text--vergeten">Wachtwoord vergeten?</a>
                    </section>

                    <section className="login-form__section login-form__section--inloggen">
                        <button type="submit" className="login-form__button primary">Login</button>
                    </section>

                    <section className="login-form__textContainer login-form__textContainer--registreren">
                        <p className="login-form__text login-form__text--registreren">Nog geen account?</p><a href="#" className="login-form__maken"> Registreer</a>
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