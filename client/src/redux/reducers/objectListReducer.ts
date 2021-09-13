import {
    CALCULATION_GI_BEFORE,
    CALCULATION_GI_FROM, CREATE_DELTA_LIST,
    CURRENT_OBJECT, EXPECT_BEFORE_INPUT_FINISH_OFF,
    EXPECT_BEFORE_INPUT_OFF,
    EXPECT_BEFORE_INPUT_ON,
    EXPECT_FROM_INPUT_FINISH_OFF,
    EXPECT_FROM_INPUT_OFF,
    EXPECT_FROM_INPUT_ON, KILL_POINT,
    LOADER, RESTART_SORT_RP, SAVE_CLASS_LIST,
    SELECT_TAB,
    SORT_RP_PZ_DATA,
    START_PZ_BEFORE_HANDLER,
    START_PZ_FROM_HANDLER, UPDATE_DELTA_LIST,
    UPDATE_LIST_OBJECT, UPDATE_RP
} from "../types";
import classes from '../../pages/RpInfo/RpInfo.module.css'

type pvoType = {
    number?: string
    x?: string
    y?: string
    h?: string
    keyX?: string
    keyY?: string
    keyH: string | number
}
export type rpType = {
    number: string
    pk: string
    distance: string
    ugr: string
    elevation: string
    factH: string
    Indent: string
}


type objectListType = {
    pvo: Array<pvoType>
    rp: Array<rpType>
    _id: string
    title: string
    __v: number
}
export type currentObjectType = {
    pvo: Array<pvoType>
    rp?: rpType
    _id?: string
    title?: string
    __v?: string
    fact?: object


}
type pzType = {
    number: string
}
type countdownRpType = {
    name: string
    calculation: string
}

export interface InitStateType {
    objectList : Array<objectListType>
    update: boolean
    loading: boolean
    currentObject: currentObjectType
    rpInfoOption: boolean
    activeInstallationRp: string
    activeShootingRp: string
    startPzFrom:  number | string
    startPzBefore: number | string
    pzFrom: pzType | string
    pzFromGi: number | string
    pzBefore: pzType | string
    pzBeforeGi: number | string
    averageGi: number | string
    exactFrom: boolean
    exactBefore: boolean
    sortRp: Array<rpType>
    countdownRp: Array<countdownRpType>
    listClasses: []
    activeTab: boolean
    deltaH: Array<string>
}

const initState: InitStateType = {
    objectList : [],
    update: true,
    loading: false,
    currentObject: {pvo:[{keyH: 0}]},
    rpInfoOption: true,
    activeInstallationRp: classes.active,
    activeShootingRp: '',
    startPzFrom:   "Введите номер",
    startPzBefore:  "Введите номер",
    pzFrom: {number: 'нет данных'},
    pzFromGi: 0,
    pzBefore: {number: 'нет данных'},
    pzBeforeGi: 0,
    averageGi: 0,
    exactFrom: false,
    exactBefore: false,
    sortRp: [],
    countdownRp: [],
    listClasses : [],
    activeTab: false,
    deltaH: []
}

export const objectListReducer = (state = initState, action: any): InitStateType => {


    switch (action.type){
        case UPDATE_LIST_OBJECT:
            return {
                ...state, update: false, objectList: action.payload
            }
        case LOADER:
            return {
                ...state, loading: action.payload
            }
        case CURRENT_OBJECT:
            return {
                ...state, currentObject: action.payload
            }
        case SELECT_TAB:
            return {
                ...state,
                rpInfoOption: action.payload.rpInfoOption,
                activeInstallationRp: action.payload.activeInstallationRp,
                activeShootingRp: action.payload.activeShootingRp,
                exactFrom: false,
                exactBefore: false,
                countdownRp: [],
                pzFromGi: 0,
                pzBeforeGi: 0,
                averageGi:0,
                activeTab: !state.activeTab
            }
        case START_PZ_FROM_HANDLER:
            return {
                ...state,
                startPzFrom: action.payload
            }
        case START_PZ_BEFORE_HANDLER:
            return {
                ...state,
                startPzBefore: action.payload
            }
        case SORT_RP_PZ_DATA:
            return {
                ...state,
                pzFrom: action.payload.min,
                pzBefore: action.payload.max,
                sortRp: action.payload.sortRp

            }
        case SAVE_CLASS_LIST:
            return {
                ...state,
                listClasses: action.payload.cls,
                deltaH: action.payload.deltaH

            }
        case CALCULATION_GI_FROM:
            return {
                ...state,
                pzFromGi: action.payload


            }
        case CALCULATION_GI_BEFORE:
            return {
                ...state,
                pzBeforeGi: action.payload
            }
        case EXPECT_FROM_INPUT_ON:
            return {
                ...state,
                countdownRp: action.payload.list,
                exactFrom: true,
                averageGi: action.payload.gi
            }
        case EXPECT_BEFORE_INPUT_ON:
            return {
                ...state,
                countdownRp: action.payload.list,
                exactBefore: true,
                averageGi: action.payload.gi
            }
        case EXPECT_FROM_INPUT_OFF:
            return {
                ...state,
                countdownRp: [],
                exactFrom: false,
                averageGi: initState.averageGi
            }
        case EXPECT_BEFORE_INPUT_OFF:
            return {
                ...state,
                countdownRp: [],
                exactBefore: false,
                averageGi: initState.averageGi
            }
        case EXPECT_FROM_INPUT_FINISH_OFF:
            return {
                ...state,
                countdownRp: [],
                exactFrom: false,
                averageGi: state.pzBeforeGi
            }
        case EXPECT_BEFORE_INPUT_FINISH_OFF:
            return {
                ...state,
                countdownRp: [],
                exactBefore: false,
                averageGi: state.pzFromGi
            }
        case KILL_POINT:
            return {
                ...state,
                listClasses: action.payload

            }
        case CREATE_DELTA_LIST:
            return {
                ...state,
                deltaH: action.payload

            }
        case UPDATE_DELTA_LIST:
            return {
                ...state,
                deltaH: action.payload

            }
        case RESTART_SORT_RP:
            return {
                ...state,
                sortRp: initState.sortRp

            }
        case UPDATE_RP:
            return {
                ...state,
                    currentObject: {...state.currentObject, rp: action.payload}
            }


        default :
            return state
    }


}