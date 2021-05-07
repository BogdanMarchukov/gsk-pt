import {
    CURRENT_OBJECT,
    LOADER,
    SELECT_TAB,
    START_PZ_BEFORE_HANDLER,
    START_PZ_FROM_HANDLER,
    UPDATE_LIST_OBJECT
} from "../types";
import classes from '../../pages/RpInfo/RpInfo.module.css'

const initState = {
    objectList : [],
    update: true,
    loading: false,
    currentObject: {},
    rpInfoOption: true,
    activeInstallationRp: classes.active,
    activeShootingRp: '',
    startPzFrom: "",
    startPzBefore: "",
    pzFrom: 'нет данных',
    pzFromGi: 0,
    pzBefore: 'нет данных',
    pzBeforeGi: 0
}

export const objectListReducer = (state = initState, action) => {

    switch (action.type){
        case(UPDATE_LIST_OBJECT):
            return {
                ...state, update: false, objectList: action.payload
            }
        case(LOADER):
            return {
                ...state, loading: action.payload
            }
        case(CURRENT_OBJECT):
            return {
                ...state, currentObject: action.payload
            }
        case(SELECT_TAB):
            return {
                ...state,
                rpInfoOption: action.payload.rpInfoOption,
                activeInstallationRp: action.payload.activeInstallationRp,
                activeShootingRp: action.payload.activeShootingRp
            }
        case(START_PZ_FROM_HANDLER):
            return {
                ...state,
                startPzFrom: action.payload
            }
        case(START_PZ_BEFORE_HANDLER):
            return {
                ...state,
                startPzBefore: action.payload
            }
        default :
            return state
    }


}