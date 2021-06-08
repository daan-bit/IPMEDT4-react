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
