import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const AllReducers = combineReducers(({auth: AuthReducer})) //we noemen deze reducer auth ipv authreducer, makkelijker voor later


export default AllReducers;