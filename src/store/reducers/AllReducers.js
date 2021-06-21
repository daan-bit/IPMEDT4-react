import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import AnswerReducer from "./AnswerReducer";

export default combineReducers({
    auth: AuthReducer, 
    ans: AnswerReducer
}) //we noemen deze reducer auth ipv authreducer, makkelijker voor later