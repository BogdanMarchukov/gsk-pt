import {combineReducers} from "redux";
import {objectListReducer} from "./objectListReducer";
import {homePageReducer} from "./homePageReducer";
import {factRpReducer} from "./factRpReducer";

export const rootReducer = combineReducers({
    objectListReducer,
    homePageReducer,
    factRpReducer
})