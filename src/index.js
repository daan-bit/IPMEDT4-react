//altijd 4 stappen om werkend

//1. react zelf importeren
import React from "react";

//2. react dom importeren
import ReactDOM from "react-dom";

//3. app
import App from "./App";

import store from './store/index' // store en provider importen
import {Provider} from 'react-redux';
import axios from 'axios'
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';

const jwt_secret = '9dcMnIwU9x6XOCUCelXFJdMdwFsLgXJB0S0pJgFTF2fE88CvCJ2cQd8h6NtiXe0V';
let token = cookie.get('token');


if(token) { //bevat token
    jwt.verify(token, jwt_secret, (err, decoded) => { //json webtoken verifieren
        if (err) { //error? cookie verwijderen en token op null zetten. beheerder moet inloggen
            cookie.remove('token');
            token = null;
        } else {
            if(decoded.iss !== 'http://localhost:8000/api/auth/login') { //token komt niet overheen met die van api/auth/login?
            cookie.remove('token'); //cookie verwijderen en token op null zetten
            token = null;
            }
        }
        console.log('decoded');
    });
    }

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}
if(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.post("http://localhost:8000/api/auth/me")
    .then(res => {
        store.dispatch({type:"SET_LOGIN", payload: res.data});
        render()
    });
   
} else {
    render()
}

//4. App component in DOM schieten
