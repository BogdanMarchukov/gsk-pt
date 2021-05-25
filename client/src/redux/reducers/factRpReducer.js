import {TABLE_DATA_LOCAL, UPDATE_TABLE_DATA_LOCAL} from "../types";

const initState = {
    localDataTable:[
        []
    ]
}

export const factRpReducer = (state = initState, action) => {

    switch (action.type) {
        case (TABLE_DATA_LOCAL):
            return {
                ...state, localDataTable: action.payload
            }
        case (UPDATE_TABLE_DATA_LOCAL):
            return {
                ...state, localDataTable: action.payload
            }
        default:
            return state
    }

}