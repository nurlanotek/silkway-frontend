import {combineReducers} from "redux";
import store from "./visReducer";
import store1 from "./loginReducer";
import registration from "./authReducer";
import switchRegTypes from "./SwitchRegTypesReducer";


const rootReducer = () => combineReducers({
    store, store1, registration, switchRegTypes

});
export default rootReducer;