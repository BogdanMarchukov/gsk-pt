import {
    EDIT_RP_INPUT_HANDLER_FROM,
    EDIT_RP_INPUT_HANDLER_TO,
    ERROR_SERVER,
    INPUT_HANDLER_FILE,
    LOADER,
    RESET_ERROR,
    SHOW_MODEL_EDIT_RP, SORT_RP_EDIT_PAGE,
    UPDATE_RP
} from "../types";


// ===========Обработка Inputs==============================
export function inputHandler(dispatch, eventTarget, inputName) {

    switch (inputName) {

        case("formSaveFile"):
            dispatch({type: INPUT_HANDLER_FILE, payload: eventTarget.target.files[0]})
            break
        case("toRp"):
            dispatch({type: EDIT_RP_INPUT_HANDLER_TO, payload: eventTarget.target.value})
            break
        case("toFrom"):
            dispatch({type: EDIT_RP_INPUT_HANDLER_FROM, payload: eventTarget.target.value})
            break

        default :
            return true
    }
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
            dispatch({type: UPDATE_RP, payload: resultData.rp})
        } else {
            dispatch({type: ERROR_SERVER, payload: "содержимое не соответствует"})
            setTimeout(() => {
                dispatch({type: RESET_ERROR})
            }, 100)
        }

    } catch (e) {
        console.error(e)
    }
}

//******************************************************************

// ================ Проверка на наличие данных===================

export function chekData(dispatch, validateArr, dataArr) {
    for (let i = 0; i < dataArr.length; i++) {
        if (validator(validateArr, dataArr[i])) {
            dispatch({type: SHOW_MODEL_EDIT_RP, payload: false})
            return true
        }
    }
    dispatch({type: SHOW_MODEL_EDIT_RP, payload: true})
}

function validator(validArr, object) {
    return JSON.stringify(validArr) === JSON.stringify(Object.keys(object));
}

//****************************************************************

// ======================= Поиск данных и сортировка================
export function submitHandler(dispatch, toRp, fromRp, rpList) {
    let min = ''
    let max = ''
    if (+toRp < +fromRp) {
        min = +toRp
        max = +fromRp
    } else {
        min = +fromRp
        max = +toRp
    }
    const sortRp = rpList.filter(item => {
        return +item.number >= min && +item.number <= max;
    })
    const validArr = []
    for (let i = 0; i < sortRp.length; i++) {
        if (validator(['number', 'pk', 'distance', 'ugr', 'elevation', 'factH', 'Indent'], sortRp[i])) {
            validArr.push(sortRp[i])
        } else {
            dispatch({type: ERROR_SERVER, payload: "отсутствуют фактические данные"})
            setTimeout(()=> {
                dispatch({type: RESET_ERROR})
            }, 100)
            return false
        }
    }
    dispatch({type: SORT_RP_EDIT_PAGE, payload: validArr})

}

