import {CURRENT_OBJECT, LOADER, UPDATE_LIST_OBJECT} from "../types";

const initState = {
    objectList : [],
    update: true,
    loading: false,
    currentObject: {}
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
        default :
            return state
    }


}