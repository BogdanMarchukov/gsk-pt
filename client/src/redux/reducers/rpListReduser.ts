import {ADD_DATA_LIST_DATA_RP, CLEAR_DATA_LIST_DATA_RP, CURRENT_OBJECT} from "../types";

interface initStateType {
    listData: number[][] | null
    filter: ['№ Rp' | null, 'PK' | null, 'H-Пр.' | null, 'H-Факт' | null, 'Возвыш.' | null, 'Домер' | null]
    checked: boolean[]
}

const initState: initStateType = {
    listData: null,
    filter: ['№ Rp', 'PK', 'H-Пр.', null, null, null],
    checked: [true, true, false, false, false]

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

        default:
            return state
    }
}