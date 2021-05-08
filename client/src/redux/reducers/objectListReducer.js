import {
    CALCULATION_GI_BEFORE,
    CALCULATION_GI_FROM,
    CURRENT_OBJECT, EXPECT_BEFORE_INPUT_FINISH_OFF,
    EXPECT_BEFORE_INPUT_OFF,
    EXPECT_BEFORE_INPUT_ON,
    EXPECT_FROM_INPUT_FINISH_OFF,
    EXPECT_FROM_INPUT_OFF,
    EXPECT_FROM_INPUT_ON,
    LOADER,
    SELECT_TAB,
    SORT_RP_PZ_DATA,
    START_PZ_BEFORE_HANDLER,
    START_PZ_FROM_HANDLER,
    UPDATE_LIST_OBJECT
} from "../types";
import classes from '../../pages/RpInfo/RpInfo.module.css'

const initState = {
    objectList : [],
    update: true,
    loading: false,
    currentObject: {pvo:[{keyH: 0}]},
    rpInfoOption: true,
    activeInstallationRp: classes.active,
    activeShootingRp: '',
    startPzFrom: "",
    startPzBefore: "",
    pzFrom: {number: 'нет данных'},
    pzFromGi: 0,
    pzBefore: {number: 'нет данных'},
    pzBeforeGi: 0,
    averageGi: 0,
    exactFrom: false,
    exactBefore: false,
    sortRp: [],
    countdownRp: []
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
        case(SORT_RP_PZ_DATA):
            return {
                ...state,
                pzFrom: action.payload.min,
                pzBefore: action.payload.max,
                sortRp: action.payload.sortRp


            }
        case(CALCULATION_GI_FROM):
            return {
                ...state,
                pzFromGi: action.payload


            }
        case(CALCULATION_GI_BEFORE):
            return {
                ...state,
                pzBeforeGi: action.payload
            }
        case(EXPECT_FROM_INPUT_ON):
            return {
                ...state,
                countdownRp: action.payload.list,
                exactFrom: true,
                averageGi: action.payload.gi
            }
        case(EXPECT_BEFORE_INPUT_ON):
            return {
                ...state,
                countdownRp: action.payload.list,
                exactBefore: true,
                averageGi: action.payload.gi
            }
        case(EXPECT_FROM_INPUT_OFF):
            return {
                ...state,
                countdownRp: [],
                exactFrom: false,
                averageGi: initState.averageGi
            }
        case(EXPECT_BEFORE_INPUT_OFF):
            return {
                ...state,
                countdownRp: [],
                exactBefore: false,
                averageGi: initState.averageGi
            }
        case(EXPECT_FROM_INPUT_FINISH_OFF):
            return {
                ...state,
                countdownRp: [],
                exactFrom: false,
                averageGi: state.pzBeforeGi
            }
        case(EXPECT_BEFORE_INPUT_FINISH_OFF):
            return {
                ...state,
                countdownRp: [],
                exactBefore: false,
                averageGi: state.pzFromGi
            }
        default :
            return state
    }


}