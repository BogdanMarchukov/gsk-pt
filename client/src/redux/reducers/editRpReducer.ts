import {
    EDIT_RP_INPUT_HANDLER_FROM,
    EDIT_RP_INPUT_HANDLER_TO,
    INPUT_HANDLER_FILE,
    SHOW_MODEL_EDIT_RP,
    SORT_RP_EDIT_PAGE
} from "../types";

interface sortRpObjectType {
    number: number
    pk: number
    distance: number
    ugr: number
    elevation: number
    factH: number
    Indent: number
}

interface initStateType {
    rpFile: object | null
    showModelRp: boolean
    sortRp: Array<sortRpObjectType> | null
    rpTo: number
    rpFrom: number
    type?: string
    payload?: boolean | Array<sortRpObjectType>
}


const initState: initStateType = {
    rpFile: null,
    showModelRp: false,
    sortRp: null,
    rpTo: 0,
    rpFrom: 0
}

export const editRpReducer = (state = initState, action: any): initStateType => {

    switch (action.type) {
        case (INPUT_HANDLER_FILE)!:
            return {
                ...state, rpFile: action.payload
            }
        case (SHOW_MODEL_EDIT_RP)!:
            return {
                ...state, showModelRp: action.payload
            }
        case (EDIT_RP_INPUT_HANDLER_TO)!:
            return {
                ...state, rpTo: action.payload
            }
        case (EDIT_RP_INPUT_HANDLER_FROM)!:
            return {
                ...state, rpFrom: action.payload
            }
        case (SORT_RP_EDIT_PAGE)!:

            return {
                ...state, sortRp: action.payload
            }
        default:
            return state
    }
}