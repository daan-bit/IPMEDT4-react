import {combineReducers, createStore} from "redux";
import {verwijder, show, AuthReducer} from "../store/reducers/Reducers";

const initialStates = {
    auth: {
        loggedIn: false,
        user: {} //empty object creeeren als initiele state
    },
    //hier maken we meerdere states aan, denk aan bijvoorbeeld onderzoek state
}

export const store = createStore(
    combineReducers({
        verwijder,
        show,
        auth:AuthReducer,
        initialStates,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);