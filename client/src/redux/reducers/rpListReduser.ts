import {
    ADD_DATA_LIST_DATA_RP,
    CLEAR_DATA_LIST_DATA_RP,
    CURRENT_OBJECT, ERROR_RESET_RP_LIST_PAGE, ERROR_RP_LIST_PAGE,
    SEARCH_RP_BUTTON_HANDLER,
    SEARCH_RP_INPUT_HANDLER
} from "../types";

interface initStateType {
    listData: number[][] | null
    listDataCache: number[][] | null
    filter: ['№ Rp' | null, 'PK' | null, 'H-Пр.' | null, 'H-Факт' | null, 'Возвыш.' | null, 'Домер' | null]
    checked: boolean[]
    searchInput: number | null
    errorMassage: string | null
    error: boolean
}

const initState: initStateType = {
    listData: null,
    filter: ['№ Rp', 'PK', 'H-Пр.', null, null, null],
    checked: [true, true, false, false, false],
    searchInput: null,
    listDataCache: null,
    errorMassage: null,
    error: false

}

export const rpListReducer = (state = initState, action: any): initStateType => {

    switch (action.type) {
        case CURRENT_OBJECT:
            return {

                ...state, listData: action.payload.listData, listDataCache: JSON.parse(JSON.stringify(action.payload.listData))
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

                ...state, searchInput: +action.payload.eventTarget, listData: action.payload.listDataCache
            }
        case SEARCH_RP_BUTTON_HANDLER:
            return {

                ...state, listData: action.payload
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