import {
    ERROR_SERVER,
    OPEN_WINDOW_NEW_OBJ,
    RESET_ERROR,
    SAVE_TO_STORE_INPUT_FILE_PVO,
    SAVE_TO_STORE_INPUT_FILE_RP,
    SAVE_TO_STORE_INPUT_NAME,
    VALIDATE_FORM_ERROR
} from "../types";



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
    if(content.name !== '' && content.pvo !=='' && content.rp !=='') {
        await saveForm(dispatch, content)
        dispatch({type: OPEN_WINDOW_NEW_OBJ})
    } else {
        dispatch({type: VALIDATE_FORM_ERROR})
        resetError(dispatch, 500)
    }
}

async function saveForm(dispatch, content) {

    const formData = new FormData()
    formData.append('nameObj', content.name)
    formData.append('csv', content.pvo[0])
    formData.append('csv', content.rp[0])

    try {
        const response = await fetch('/api/add/save',{
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        errorServerHandler(dispatch, data.errorMassage)
    } catch (e) {
        console.error(e)
    }
}

function errorServerHandler(dispatch, errorMassage) {
    switch (errorMassage) {
        case ("Ошибка: Загрузите \" имя.csv\" "):
            dispatch({type:ERROR_SERVER, payload:errorMassage})
            dispatch({type:RESET_ERROR})
            break
        case ("Файл не валидный"):
            dispatch({type:ERROR_SERVER, payload: "Ошибка: Содержимое файла не валидно!"})
            dispatch({type:RESET_ERROR})
            break
        default : return true

    }
}


// *********************************************************



// ==================== Сброс ошибок ==========
function resetError(dispatch, ms){
     setTimeout(()=>{
        dispatch({type:RESET_ERROR})
    }, ms)
}
//**********************************************


