import {
    CALCULATION_LIST,
    EDIT_RP_INPUT_HANDLER_FROM,
    EDIT_RP_INPUT_HANDLER_TO,
    INPUT_HANDLER_FILE, INPUT_VALUE_UPDATE,
    SHOW_MODEL_EDIT_RP,
    SORT_RP_EDIT_PAGE, UPDATE_DELTA_H_EDIT_RP
} from "../types";

export interface sortRpObjectType {
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
    deltaH_EditRp: Array<number>
    inputValue: Array<number>
    calculationDataList: Array<number>[] | null

}


const initState: initStateType = {
    rpFile: null,
    showModelRp: false,
    sortRp: null,
    rpTo: 0,
    rpFrom: 0,
    deltaH_EditRp: [],
    inputValue: [],
    calculationDataList: null
}

export const editRpReducer = (state = initState, action: any): initStateType => {

    switch (action.type) {

        case INPUT_HANDLER_FILE:
            return {
                ...state, rpFile: action.payload
            }
        case SHOW_MODEL_EDIT_RP:
            return {
                ...state, showModelRp: action.payload
            }
        case EDIT_RP_INPUT_HANDLER_TO:
            return {
                ...state, rpTo: action.payload
            }
        case EDIT_RP_INPUT_HANDLER_FROM:
            return {
                ...state, rpFrom: action.payload
            }
        case SORT_RP_EDIT_PAGE:

            return {
                ...state, sortRp: action.payload, deltaH_EditRp:action.deltaH, inputValue: action.inputValue
            }
        case INPUT_VALUE_UPDATE:

            return {
                ...state, inputValue : action.payload
            }
        case UPDATE_DELTA_H_EDIT_RP:

            return {
                ...state, deltaH_EditRp : action.payload
            }
        case CALCULATION_LIST:

            return {
                ...state, calculationDataList: action.payload
            }
        default:
            return state
    }
}