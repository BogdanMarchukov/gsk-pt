import {SAVE_TO_STORE_INPUT_FILE_PVO, SAVE_TO_STORE_INPUT_FILE_RP, SAVE_TO_STORE_INPUT_NAME} from "../types";



// ======================форма создания объекта
export function inputNameObjectHandler(dispatch, event) {
    dispatch({type: SAVE_TO_STORE_INPUT_NAME, payload: event.target.value})
}
export function inputFilePvoHandler(dispatch, event) {
    dispatch({type: SAVE_TO_STORE_INPUT_FILE_PVO, payload: event.target.files})
}
export function inputFileRpHandler(dispatch, event) {
    dispatch({type: SAVE_TO_STORE_INPUT_FILE_RP, payload: event.target.files})
}

//            Отправка данных на сервер
export async function submitFormCreateObject(dispatch, content){
     await saveForm(content)

}

async function saveForm(content) {

    const formData = new FormData()
    formData.append('nameObj', content.name)
    formData.append('csv', content.pvo[0])
    formData.append('csv', content.rp[0])

    try {
        const response = await fetch('/api/add/save',{
            method: 'POST',
            body: formData
        })
        return response.json()
    } catch (e) {
        console.error(e)
    }
}

// *********************************************************