import {INPUT_HANDLER_FILE, LOADER, UPDATE_RP} from "../types";


// ===========Сохранение файла из формы в store=======
export function inputHandler(dispatch, eventTarget) {

    dispatch({type: INPUT_HANDLER_FILE, payload: eventTarget.target.files[0]})
}
//***********************************************************


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
            dispatch({type: UPDATE_RP, payload: resultData.rp})
        }
        else console.log(resultData.error)

    } catch (e) {
        console.error(e)
    }

}