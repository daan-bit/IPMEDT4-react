//auth reducer gemaakt door alex

const AuthReducer = (state = {}, actions) => {
    switch (actions.type) {
        case 'SET_LOGIN': //case nodig bij Login.js
            return {...state, loggedIn: true, user: actions.payload};
        case "SET_LOGOUT":     //uitloggen
        return {...state, loggedIn: false, user: {}};
        default:
            return state;
    }
};
export default AuthReducer;