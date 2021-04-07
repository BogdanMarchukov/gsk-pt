import {combineReducers} from "redux";
import {objectListReducer} from "./objectListReducer";
import {homePageReducer} from "./homePageReducer";

export const rootReducer = combineReducers({
    objectListReducer,
    homePageReducer
})