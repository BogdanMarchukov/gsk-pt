import {rpType} from "../reducers/objectListReducer";
import {ADD_DATA_LIST_DATA_RP, CLEAR_DATA_LIST_DATA_RP} from "../types";

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