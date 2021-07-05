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


interface inputHandlerType {
    type: typeof INPUT_HANDLER_FILE | typeof EDIT_RP_INPUT_HANDLER_TO | typeof EDIT_RP_INPUT_HANDLER_FROM
    payload: object | number
}

interface mayEvent {
    target: {
        value: number
        files: [object]
    }
}


export function inputHandler(dispatch: (object: inputHandlerType) => void, eventTarget: mayEvent, inputName: string): boolean | void {

    switch (inputName) {

        case("formSaveFile"):
            dispatch({type: INPUT_HANDLER_FILE, payload: eventTarget.target.files[0]})
            break
        case("toRp"):
            dispatch({type: EDIT_RP_INPUT_HANDLER_TO, payload: +eventTarget.target.value})
            break
        case("toFrom"):
            dispatch({type: EDIT_RP_INPUT_HANDLER_FROM, payload: +eventTarget.target.value})
            break

        default :
            return true
    }
}

//***********************************************************

// =============== отправка файла RP на сервер==================
interface resultDataType {
    number: number
    pk: number
    distance: number
    ugr: number
    elevation: number
    factH?: number
    Indent?: number
}

interface saveFileRpActionType {
    type: typeof LOADER | typeof SHOW_MODEL_EDIT_RP | typeof UPDATE_RP | typeof ERROR_SERVER | typeof RESET_ERROR
    payload?: boolean | Array<resultDataType> | string
}

export async function saveFileRp(dispatch: (object: saveFileRpActionType) => void, file: string, idObject: string) {
    dispatch({type: LOADER, payload: true})// включаем лоадер
    const formData = new FormData() // готовим файл к отправки
    formData.append('id', idObject)
    formData.append('dataFile', file)
    try {
        const response = await fetch('api/rp/file', { // отправка файла
            method: "POST",
            body: formData
        })
        const resultData = await response.json() // изменненые данные с сервера
        const numberData = stringToNumber(resultData.rp)  // преобразование from string to number

        dispatch({type: LOADER, payload: false})// выключаем лоадер
        if (!resultData.error) {
            dispatch({type: SHOW_MODEL_EDIT_RP, payload: false}) // прячим модальное окно загрузки файла
            dispatch({type: UPDATE_RP, payload: numberData}) // обновляем state с rp
        } else {
            dispatch({type: ERROR_SERVER, payload: "содержимое не соответствует"})// вызываем компонент ошибки
            setTimeout(() => {
                dispatch({type: RESET_ERROR}) // сброс ошибки
            }, 100)
        }

    } catch (e) {
        console.error(e)
    }
}

//******************************************************************

// ================ Проверка на наличие данных===================

interface showModelEditRpType {
    type: typeof SHOW_MODEL_EDIT_RP
    payload: boolean
}

export function chekData(dispatch: (object: showModelEditRpType) => void | boolean, validateArr: Array<string>, dataArr: Array<object>) {
    for (let i = 0; i < dataArr.length; i++) {
        if (validator(validateArr, dataArr[i])) {
            dispatch({type: SHOW_MODEL_EDIT_RP, payload: false})
            return true
        }
    }
    dispatch({type: SHOW_MODEL_EDIT_RP, payload: true})
}

function validator(validArr: Array<string>, object: object): boolean {
    return JSON.stringify(validArr) === JSON.stringify(Object.keys(object))
}

//****************************************************************

// =======================Преобразование строк обьекта а number===================

function stringToNumber(startObject: Array<object>): Array<resultDataType> {
    const finish =  startObject.map((item: any) => {
        for (let key in item) {
            item[key] = +item[key]
        }
        return item
    })
    return finish
}
//*************************************************************************

// ======================= Поиск данных и сортировка================

interface RpListObjectType {
    number: number
    pk: number
    distance: number
    ugr: number
    elevation: number
    factH?: number
    Indent?: number
}

interface ErrorServerActionType {
    type: typeof ERROR_SERVER | typeof RESET_ERROR | typeof SORT_RP_EDIT_PAGE
    payload?: string | Array<RpListObjectType>
}

export function submitHandler(dispatch: (object: ErrorServerActionType) => boolean, toRp: number, fromRp: number, rpList: Array<RpListObjectType>) {
    let min = 0
    let max = 0
    if (toRp < fromRp) {
        min = toRp
        max = fromRp
    } else {
        min = fromRp
        max = toRp
    }
    const sortRp = rpList.filter((item: any) => {
        return +item.number >= min && +item.number <= max;
    })
    const validArr = []
    for (let i = 0; i < sortRp.length; i++) {
        if (validator(['number', 'pk', 'distance', 'ugr', 'elevation', 'factH', 'Indent'], sortRp[i])) {
            validArr.push(sortRp[i])
        } else {
            dispatch({type: ERROR_SERVER, payload: "отсутствуют фактические данные"})
            setTimeout(() => {
                dispatch({type: RESET_ERROR})
            }, 100)
            return false
        }
    }
    const payloadArr = stringToNumber(validArr) // преобразование from string to number
    dispatch({type: SORT_RP_EDIT_PAGE, payload: payloadArr})

}
//***********************************************************************************************

