import {INPUT_HANDLER_FILE, LOADER, SHOW_MODEL_EDIT_RP, UPDATE_RP} from "../types";


// ===========Сохранение файла из формы в store=======
export function inputHandler(dispatch, eventTarget) {

    dispatch({type: INPUT_HANDLER_FILE, payload: eventTarget.target.files[0]})
}
//***********************************************************

// =============== отправка файла RP на сервер==================
export async function saveFileRp(dispatch, file, idObject) {
    dispatch({type: LOADER, payload: true})
    const formData = new FormData()
    formData.append('id', idObject)
    formData.append('dataFile', file)
    try {
        const response = await fetch('api/rp/file', {
            method: "POST",
            body: formData
        })
        const resultData = await response.json()
        dispatch({type: LOADER, payload: false})
        if (!resultData.error) {
            dispatch({type: SHOW_MODEL_EDIT_RP, payload: false})
            // TODO разобраться с обновлением state
            dispatch({type: UPDATE_RP, payload: resultData.rp})
        }
        else console.log(resultData.error)

    } catch (e) {
        console.error(e)
    }
}
//******************************************************************

// ================ Проверка на наличие данных===================

export function chekData(dispatch, validateArr, dataArr) {
    for (let i = 0; i < dataArr.length; i++) {
        if (JSON.stringify(validateArr) === JSON.stringify(Object.keys(dataArr[i]))) {
            dispatch({type: SHOW_MODEL_EDIT_RP, payload: false})
            return true
        }
    }
    dispatch({type: SHOW_MODEL_EDIT_RP, payload: true})
}