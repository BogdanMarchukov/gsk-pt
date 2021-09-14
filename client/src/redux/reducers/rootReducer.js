import {combineReducers} from "redux";
import {objectListReducer} from "./objectListReducer.ts";
import {homePageReducer} from "./homePageReducer.ts";
import {factRpReducer} from "./factRpReducer.ts";
import {editRpReducer} from "./editRpReducer.ts";
import {rpListReducer} from "./rpListReduser";

export const rootReducer = combineReducers({
    objectListReducer,
    homePageReducer,
    factRpReducer,
    editRpReducer,
    rpListReducer
})