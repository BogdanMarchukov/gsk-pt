import {OPEN_WINDOW_NEW_OBJ} from "../types";

const initState = {
    isOpen: false
}

export const homePageReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_WINDOW_NEW_OBJ:
            console.log('test')
            return {
                ...state, isOpen: !state.isOpen
            }
        default:
            return state
    }

}