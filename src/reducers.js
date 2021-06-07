import {CREATE_ONDERZOEK} from './actions';

export const onderzoek = (state = "", action) => {
    switch(action.type){
        case CREATE_ONDERZOEK:
            return action.payload;
        default:
            return state;
    }
};