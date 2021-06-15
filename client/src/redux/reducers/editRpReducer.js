import {INPUT_HANDLER_FILE} from "../types";


const initState = {
    rpFile: {}
}

export const editRpReducer = (state = initState, action) => {

    switch (action.type){
        case (INPUT_HANDLER_FILE):
            return {
                ...state, rpFile: action.payload
            }
        default:
            return state
    }
}