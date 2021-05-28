import { createStore } from "redux";
import AllReducers from "./reducers/AllReducers";

const initialStates = {
    auth: {
        loggedIn: false,
        user: {} //empty object creeeren als initiele state
    }
}
const store = createStore(AllReducers, initialStates);

export default store;