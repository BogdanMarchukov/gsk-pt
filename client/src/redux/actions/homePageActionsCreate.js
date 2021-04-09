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

//            Отправка данных на сервер
export async function submitFormCreateObject(dispatch, content){
     await saveForm(content)

}

async function saveForm(content) {

    const formData = new FormData()
    formData.append('nameObj', content.name)
    formData.append('pvo', content.pvo)
    formData.append('rp', content.rp)
    try {
        const response = await fetch('/api/add/save',{
            method: 'POST',
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.json()
    } catch (e) {
        console.error(e)
    }
}

// *********************************************************