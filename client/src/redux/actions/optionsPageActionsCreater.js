import {CURRENT_OBJECT} from "../types";


export function currentInfoObject(dispatch, list) {
    dispatch({type: CURRENT_OBJECT, payload: list})
}