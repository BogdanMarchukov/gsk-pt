import {SAVE_TO_STORE_INPUT_FILE_PVO, SAVE_TO_STORE_INPUT_FILE_RP, SAVE_TO_STORE_INPUT_NAME} from "../types";

// ======================форма создания объекта
export function inputNameObjectHandler(dispatch, event) {
    dispatch({type: SAVE_TO_STORE_INPUT_NAME, payload: event.target.value})
}
export function inputFilePvoHandler(dispatch, event) {
    dispatch({type: SAVE_TO_STORE_INPUT_FILE_PVO, payload: event.target.value})
}
export function inputFileRpHandler(dispatch, event) {
    dispatch({type: SAVE_TO_STORE_INPUT_FILE_RP, payload: event.target.value})
}
// *********************************************************