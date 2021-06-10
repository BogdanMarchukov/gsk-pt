import {INPUT_HANDLER_FILE} from "../types";


// ===========Сохранение файла из формы в store=======
export function inputHandler(dispatch, eventTarget) {

    dispatch({type: INPUT_HANDLER_FILE, payload: eventTarget.target.files[0]})
}
//***********************************************************


export async function saveFileRp(dispatch, file, idObject) {
    const formData = new FormData()
    formData.append('id', idObject)
    formData.append('dataFile', file)
    try {
        const response = await fetch('api/rp/file', {
            method: "POST",
            body: formData
        })
        console.log(response)
    } catch (e) {
        console.error(e)
    }

}