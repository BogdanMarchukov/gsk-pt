import {
    ERROR_SERVER,
    OPEN_WINDOW_NEW_OBJ, RESET_ERROR,
    SAVE_TO_STORE_INPUT_FILE_PVO,
    SAVE_TO_STORE_INPUT_FILE_RP,
    SAVE_TO_STORE_INPUT_NAME, VALIDATE_FORM_ERROR
} from "../types";

interface InitStateType {
    isOpen: boolean
    createObjectForm: {
        name: string
        pvo: string
        rp: string
    },
    errors: {
        errorState: boolean,
        errorMassage: null | string
    }

}

const initState: InitStateType = {
    isOpen: false,
    createObjectForm: {
        name: '',
        pvo: '',
        rp: ''
    },
    errors: {
        errorState: false,
        errorMassage: null
    }
}

export const homePageReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        case OPEN_WINDOW_NEW_OBJ:
            return {
                ...state, isOpen: !state.isOpen , createObjectForm: initState.createObjectForm
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
        case VALIDATE_FORM_ERROR:
            return {
                ...state, errors: {errorState: true, errorMassage: "Ошибка: \"заполните все поля формы\" "}
            }
        case RESET_ERROR:
            return {
                ...state, errors: initState.errors
            }
        case ERROR_SERVER:
            return {
                ...state, errors: {
                    errorState: true,
                    errorMassage: action.payload
                }
            }
        default:
            return state
    }

}