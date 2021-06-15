import {INPUT_HANDLER_FILE, SHOW_MODEL_EDIT_RP} from "../types";


const initState = {
    rpFile: {},
    showModelRp: false
}

export const editRpReducer = (state = initState, action) => {

    switch (action.type){
        case (INPUT_HANDLER_FILE):
            return {
                ...state, rpFile: action.payload
            }
        case (SHOW_MODEL_EDIT_RP):
            return {
                ...state, showModelRp: action.payload
            }
        default:
            return state
    }
}