import {ADD_DATA_LIST_DATA_RP, CLEAR_DATA_LIST_DATA_RP, CURRENT_OBJECT, SEARCH_RP_INPUT_HANDLER} from "../types";

interface initStateType {
    listData: number[][] | null
    filter: ['№ Rp' | null, 'PK' | null, 'H-Пр.' | null, 'H-Факт' | null, 'Возвыш.' | null, 'Домер' | null]
    checked: boolean[]
    searchInput: string | null
}

const initState: initStateType = {
    listData: null,
    filter: ['№ Rp', 'PK', 'H-Пр.', null, null, null],
    checked: [true, true, false, false, false],
    searchInput: null

}

export const rpListReducer = (state = initState, action: any): initStateType => {

    switch (action.type) {
        case CURRENT_OBJECT:
            return {

                ...state, listData: action.payload.listData
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

                ...state, searchInput: action.payload
            }

        default:
            return state
    }
}