import {
    OPEN_WINDOW_NEW_OBJ,
    SAVE_TO_STORE_INPUT_FILE_PVO,
    SAVE_TO_STORE_INPUT_FILE_RP,
    SAVE_TO_STORE_INPUT_NAME
} from "../types";

const initState = {
    isOpen: false,
    createObjectForm: {
        name: '',
        pvo: '',
        rp: ''
    }
}

export const homePageReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_WINDOW_NEW_OBJ:
            return {
                ...state, isOpen: !state.isOpen
            }
        case SAVE_TO_STORE_INPUT_NAME:
            return {
                ...state, createObjectForm: {...state.createObjectForm, name: action.payload}
            }
        case SAVE_TO_STORE_INPUT_FILE_PVO:
            return {
                ...state, createObjectForm: {...state.createObjectForm, pvo: action.payload}
            }
        case SAVE_TO_STORE_INPUT_FILE_RP:
            return {
                ...state, createObjectForm: {...state.createObjectForm, rp: action.payload}
            }
        default:
            return state
    }

}