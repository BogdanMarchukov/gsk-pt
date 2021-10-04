import {currentObjectType, rpType} from "../reducers/objectListReducer";
import {
    ADD_DATA_LIST_DATA_RP,
    CLEAR_DATA_LIST_DATA_RP, ERROR_RESET_RP_LIST_PAGE,
    ERROR_RP_LIST_PAGE,
    SEARCH_RP_BUTTON_HANDLER,
    SEARCH_RP_INPUT_HANDLER
} from "../types";
import {currentInfoObject} from "./optionsPageActionsCreater";
import React from "react";

//=================Функция обработки фильтров ======================================================================
export type filter = ['№ Rp' | null, 'PK' | null, 'H-Пр.' | null, 'H-Факт' | null, 'Возвыш.' | null, 'Домер' | null]
export type listData = number[][] | string[][]
export type target = 'number' | 'pk' | 'distance' | 'ugr' | 'elevation' | 'factH' | 'Indent'

export function rpListInputHandler( // функция обработчик
    dispatch: any,
    indexHandler: number,
    filter: filter,
    checked: boolean[],
    rp: Array<rpType>,
    listData: listData
) {
    const newListData = JSON.stringify(listData) // создание новой ссылки
    const newFilter = JSON.parse(JSON.stringify(filter))  // создание новой ссылки
    const newChecked = JSON.parse(JSON.stringify(checked))  // создание новой ссылки
    switch (indexHandler) {
        case 0 :
            if (!filter[indexHandler + 1]) {
                newFilter[indexHandler + 1] = 'PK'
                newChecked[indexHandler] = true
                dispatch({
                    type: ADD_DATA_LIST_DATA_RP, payload: {
                        finishData: addData(JSON.parse(newListData), rp, indexHandler, 'pk'),
                        newFilter,
                        newChecked
                    }
                })
            } else {
                newFilter[indexHandler + 1] = null
                newChecked[indexHandler] = false
                dispatch({
                    type: CLEAR_DATA_LIST_DATA_RP, payload: {
                        finishData: cleatData(JSON.parse(newListData) ,indexHandler + 1),
                        newFilter,
                        newChecked
                    }
                })

            }

            break
        case 1 :
            if (!filter[indexHandler + 1]) {
                newFilter[indexHandler + 1] = 'H-Пр.'
                newChecked[indexHandler] = true
                dispatch({
                    type: ADD_DATA_LIST_DATA_RP, payload: {
                        finishData: addData(JSON.parse(newListData), rp, indexHandler, 'ugr'),
                        newFilter,
                        newChecked
                    }
                })
            } else {
                newFilter[indexHandler + 1] = null
                newChecked[indexHandler] = false
                dispatch({
                    type: CLEAR_DATA_LIST_DATA_RP, payload: {
                        finishData: cleatData(JSON.parse(newListData) ,indexHandler + 1),
                        newFilter,
                        newChecked
                    }
                })
            }

            break
        case 2 :
            if (!filter[indexHandler + 1]) {
                newFilter[indexHandler + 1] = 'H-Факт'
                newChecked[indexHandler] = true
                dispatch({
                    type: ADD_DATA_LIST_DATA_RP, payload: {
                        finishData: addData(JSON.parse(newListData), rp, indexHandler, 'factH'),
                        newFilter,
                        newChecked
                    }
                })
            } else {
                newFilter[indexHandler + 1] = null
                newChecked[indexHandler] = false
                dispatch({
                    type: CLEAR_DATA_LIST_DATA_RP, payload: {
                        finishData: cleatData(JSON.parse(newListData) ,indexHandler + 1),
                        newFilter,
                        newChecked
                    }
                })
            }

            break
        case 3 :
            if (!filter[indexHandler + 1]) {
                newFilter[indexHandler + 1] = 'Возвыш'
                newChecked[indexHandler] = true
                dispatch({
                    type: ADD_DATA_LIST_DATA_RP, payload: {
                        finishData: addData(JSON.parse(newListData), rp, indexHandler, 'elevation'),
                        newFilter,
                        newChecked
                    }
                })
            }
            else {
                newFilter[indexHandler + 1] = null
                newChecked[indexHandler] = false
                dispatch({
                    type: CLEAR_DATA_LIST_DATA_RP, payload: {
                        finishData: cleatData(JSON.parse(newListData) ,indexHandler + 1),
                        newFilter,
                        newChecked
                    }
                })
            }
            break
        case 4 :
            if (!filter[indexHandler + 1]) {
                newFilter[indexHandler + 1] = 'Домер'
                newChecked[indexHandler] = true
                dispatch({
                    type: ADD_DATA_LIST_DATA_RP, payload: {
                        finishData: addData(JSON.parse(newListData), rp, indexHandler, 'Indent'),
                        newFilter,
                        newChecked
                    }
                })
            } else {
                newFilter[indexHandler + 1] = null
                newChecked[indexHandler] = false
                dispatch({
                    type: CLEAR_DATA_LIST_DATA_RP, payload: {
                        finishData: cleatData(JSON.parse(newListData) ,indexHandler + 1),
                        newFilter,
                        newChecked
                    }
                })
            }

            break
        default:
            return true
    }
}

// добавление данных
const addData = (listData: listData, rp: Array<rpType>, indexHandler: number, target: target) => {
    return listData.map((item, index) => {
        item[indexHandler + 1] = rp[index][target] ?? '-'
        return item
    })

}
// удаление данных
const cleatData = (data: listData, index: number) => {
    return data.map(item => {
        const itemData = item.map((i, indexItem) => {
            if (indexItem === index) {
                return null
            }
            else return i
        })
        return itemData
    })
}

// ================ поиск репера из списка============================
interface searchInputHandlerPayload {
    eventTarget: string
    rpList: rpType[]

}

interface searchInputHandlerDispatch {
    type: typeof SEARCH_RP_INPUT_HANDLER
    payload: searchInputHandlerPayload
}
// сохранение event в store
export function searchInputHandler (dispatch: (object: searchInputHandlerDispatch) => void, eventTarget: string, list: currentObjectType) {
    const rpList = JSON.parse(JSON.stringify(list.rp))
    currentInfoObject(dispatch, list)
    dispatch({type: SEARCH_RP_INPUT_HANDLER, payload: {eventTarget, rpList}})
}

interface errorType {
    errorMassage: string | null
    error: boolean
}

interface buttonHandlerPayloadType {
    outData: number[][]
    outRpList: rpType[]
}

interface buttonHandlerDispatchType {
    type: typeof SEARCH_RP_BUTTON_HANDLER | typeof ERROR_RP_LIST_PAGE | typeof ERROR_RESET_RP_LIST_PAGE
    payload: buttonHandlerPayloadType | errorType
}

// обработчик кнопки поиск
export function buttonHandler (dispatch: (object: buttonHandlerDispatchType)=> void, listData: number[][], numberRp: number, rpList: rpType[]) {
    const outData: number[][] = []
        listData.forEach(item => {
        if (item[0] >= numberRp) {
            outData.push(item)
        }
    })
    const outRpList = rpList.filter(i => +i.number >= numberRp)

    if (outData.length) {
        dispatch({type: SEARCH_RP_BUTTON_HANDLER, payload: {outData, outRpList} })
    } else {
        dispatch({type: ERROR_RP_LIST_PAGE, payload: {errorMassage: 'Репер не найден', error: true} })
        setTimeout(()=> {
            dispatch({type: ERROR_RESET_RP_LIST_PAGE, payload: {errorMassage: null, error: false}})
        }, 200)
    }
}

// ===============Добавление данных в БД ================================

export async function addFactDataHandler(
    dispatch: ()=> void,
    inputH: React.MutableRefObject<null>,
    inputD: React.MutableRefObject<null>,
    file: React.MutableRefObject<HTMLInputElement | null>,
    id: number
){
    // @ts-ignore
    if (file.current.files[0] && inputD.current.checked | inputH.current.checked) {
        // @ts-ignore
        console.log(file.current.files[0])
       const formData = new FormData()
        // @ts-ignore
        formData.append('inputH', inputH.current.checked)
        // @ts-ignore
        formData.append('inputD', inputD.current.checked)
        // @ts-ignore
        formData.append('file', file.current.files[0])
        // @ts-ignore
        formData.append('id', id)
        const response = await fetch('api/add-fact-data', {
            method: 'POST',
            body: formData
        })
        console.log(response)

    }
    // todo обработать ошибку
}