import React,  { Component } from 'react';
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { email: '', password: '', errors: {}}
    }

    handleForm = (e) => {
        e.preventDefault();
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]:value})
        
    }
    render() {
        return(
            <section className="login">
            <article>
                <h2>Inloggen</h2>
                <p>Op deze pagina kunt u inloggen</p>
            </article>

            <form className="login__form" onSubmit={this.handleForm}>
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