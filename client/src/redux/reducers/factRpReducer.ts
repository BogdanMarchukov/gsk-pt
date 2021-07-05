import {TABLE_DATA_LOCAL, UPDATE_TABLE_DATA_LOCAL} from "../types";

interface InitStateType {
    localDataTable: [Array<number>]
}

const initState: InitStateType = {
    localDataTable:[
        []
    ]
}

export const factRpReducer = (state = initState, action: any): InitStateType => {

    switch (action.type) {
        case  TABLE_DATA_LOCAL:
            return {
                ...state, localDataTable: action.payload
            }
        case UPDATE_TABLE_DATA_LOCAL:
            return {
                ...state, localDataTable: action.payload
            }
        default:
            return state
    }

}