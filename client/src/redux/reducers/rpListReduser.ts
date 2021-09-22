import {
    ADD_DATA_LIST_DATA_RP,
    CLEAR_DATA_LIST_DATA_RP,
    CURRENT_OBJECT, ERROR_RESET_RP_LIST_PAGE, ERROR_RP_LIST_PAGE,
    SEARCH_RP_BUTTON_HANDLER,
    SEARCH_RP_INPUT_HANDLER
} from "../types";
import {rpType} from "./objectListReducer";

interface initStateType {
    listData: number[][] | null
    filter: ['№ Rp' | null, 'PK' | null, 'H-Пр.' | null, 'H-Факт' | null, 'Возвыш.' | null, 'Домер' | null]
    checked: boolean[]
    searchInput: number | null
    errorMassage: string | null
    error: boolean
    rpList: rpType[] | null
}

const initState: initStateType = {
    listData: null,
    filter: ['№ Rp', 'PK', 'H-Пр.', null, null, null],
    checked: [true, true, false, false, false],
    searchInput: null,
    errorMassage: null,
    error: false,
    rpList: null

}

export const rpListReducer = (state = initState, action: any): initStateType => {

    switch (action.type) {
        case CURRENT_OBJECT:
            return {

                ...state, listData: action.payload.listData, rpList: action.payload.list.rp
            }
        case ADD_DATA_LIST_DATA_RP:
            return {

                ...state, listData: action.payload.finishData, filter: action.payload.newFilter, checked: action.payload.newChecked
            }
        case CLEAR_DATA_LIST_DATA_RP:
            return {

                ...state, listData: action.payload.finishData, filter: action.payload.newFilter, checked: action.payload.newChecked
            }
        case SEARCH_RP_INPUT_HANDLER:
            return {

                ...state, searchInput: +action.payload.eventTarget, rpList: action.payload.rpList, filter: initState.filter, checked: initState.checked
            }
        case SEARCH_RP_BUTTON_HANDLER:
            return {

                ...state, listData: action.payload.outData, rpList: action.payload.outRpList, filter: initState.filter, checked: initState.checked
            }
        case ERROR_RP_LIST_PAGE:
            return {

                ...state, errorMassage: action.payload.errorMassage, error: action.payload.error
            }
        case ERROR_RESET_RP_LIST_PAGE:
            return {

                ...state, errorMassage: action.payload.errorMassage, error: action.payload.error
            }

        default:
            return state
    }
}