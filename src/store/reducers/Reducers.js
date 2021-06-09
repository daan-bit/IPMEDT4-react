import { CHANGE_VERWIJDER, CHANGE_SHOW} from "../Actions";

export const verwijder = (state = "", action) => {
    switch(action.type){
        case CHANGE_VERWIJDER:
            return action.payload;
        default:
            return state;
    }
};

export const show = (state = "", action) => {
    switch(action.type){
        case CHANGE_SHOW:
            return action.payload;
        default:
            return state;
    }
};


export const AuthReducer = (state = {}, actions) => {
    switch (actions.type) {
        case 'SET_LOGIN': //case nodig bij Login.js
            return {...state, loggedIn: true, user: actions.payload};
        case "SET_LOGOUT":     //uitloggen
        return {...state, loggedIn: false, user: {}};
        default:
            return state;
    }
};