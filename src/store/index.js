import { createStore } from "redux";
import AllReducers from "./reducers/AllReducers";

const initialStates = {
    auth: {
        loggedIn: false,
        user: {} //empty object creeeren als initiele state
    },
    //hier maken we meerdere states aan, denk aan bijvoorbeeld onderzoek state
}
const store = createStore(
    AllReducers, 
    initialStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;