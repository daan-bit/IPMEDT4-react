import React,  { Component } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { email: '', password: '', errors: {}}
    }

    apiCall = () => {
        const data = {email:this.state.email, password: this.state.password};
        axios.post('http://localhost:8000/api/auth/login', data)
        .then(res => console.log(res))
        .catch(e => this.setState({errors: e.response.data}));
    }

    componentDidMount() {
    }

    handleForm = (e) => {
        e.preventDefault();
        this.apiCall(this.props.typeCall);

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
            <section className="login">
            <article>
                <h2>Inloggen</h2>
                <p>Op deze pagina kunt u inloggen</p>
            </article>

            <form className="login__form" onSubmit={this.handleForm}>
               <p>{error.errors}</p>

                <article>
                    <label htmlFor="email">Uw e-mail</label>
                    <input type="text" id="email" name="email" placeholder="email" onChange={this.handleInput}></input>
                </article>
                <article>
                    <label htmlFor="password">Uw wachtwoord</label>
                    <input type="password" id="password" name="password" placeholder="password" onChange={this.handleInput}></input>
                </article>
                <input type="submit" value="Log in" />
            </form>
            </section>
        );
    }
};