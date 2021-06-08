import {combineReducers, createStore} from "redux";
import {verwijder, show} from "../store/reducers/Reducers";

export const store = createStore(
    combineReducers({
        verwijder,
        show,
    })
);