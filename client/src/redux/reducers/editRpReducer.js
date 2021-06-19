import {
    EDIT_RP_INPUT_HANDLER_FROM,
    EDIT_RP_INPUT_HANDLER_TO,
    INPUT_HANDLER_FILE,
    SHOW_MODEL_EDIT_RP,
    SORT_RP_EDIT_PAGE
} from "../types";


const initState = {
    rpFile: {},
    showModelRp: false,
    sortRp: [],
    rpTo: 0,
    rpFrom: 0
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
        case (EDIT_RP_INPUT_HANDLER_TO):
            return {
                ...state, rpTo: action.payload
            }
        case (EDIT_RP_INPUT_HANDLER_FROM):
            return {
                ...state, rpFrom: action.payload
            }
        case (SORT_RP_EDIT_PAGE):
            console.log(action.payload)
            return {
                ...state, sortRp: action.payload
            }
        default:
            return state
    }
}