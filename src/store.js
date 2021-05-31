import { combineReducers, createStore } from 'redux';
import { onderzoek } from './reducers';

export const store = createStore(
    combineReducers({
        onderzoek,
    })
);