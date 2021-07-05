import {combineReducers} from "redux";
import {objectListReducer} from "./objectListReducer.ts";
import {homePageReducer} from "./homePageReducer.ts";
import {factRpReducer} from "./factRpReducer.ts";
import {editRpReducer} from "./editRpReducer.ts";

export const rootReducer = combineReducers({
    objectListReducer,
    homePageReducer,
    factRpReducer,
    editRpReducer
})