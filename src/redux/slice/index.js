import { combineReducers } from "redux";
import  AuthSlice  from "./auth.slice";

export default combineReducers({
    auth: AuthSlice,
})