import {
    ACTIVE_CLASS_LIST,
    CALCULATION_LIST,
    EDIT_RP_INPUT_HANDLER_FROM,
    EDIT_RP_INPUT_HANDLER_TO,
    ERROR_SERVER,
    INPUT_HANDLER_FILE,
    INPUT_VALUE_UPDATE,
    LOADER,
    RESET_ERROR,
    SHOW_MODEL_EDIT_RP,
    SORT_RP_EDIT_PAGE,
    UPDATE_DELTA_H_EDIT_RP,
    UPDATE_RP
} from "../types";
import {sortRpObjectType} from "../reducers/editRpReducer";
import classes from '../../Components/СalculationsListEditRp/CalculationsListEditRp.module.css';


// ===========Обработка Inputs==============================


export interface inputHandlerType {
    type: typeof INPUT_HANDLER_FILE | typeof EDIT_RP_INPUT_HANDLER_TO | typeof EDIT_RP_INPUT_HANDLER_FROM
    payload: object | number
}

export interface mayEvent {
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
    return startObject.map((item: any) => {
        for (let key in item) {
            if (item.hasOwnProperty(key)) {
                item[key] = +item[key]
            }
        }
        return item
    })
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
    deltaH?: Array<number>
    inputValue?: Array<number>
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
    const deltaH = payloadArr.map(() => 0) // создание массива длинной отсортированного массива со значением 0
    const inputValue = payloadArr.map(() => 0) // создание массива длинной отсортированного массива со значением 0
    const newObject = JSON.stringify(payloadArr)
    dispatch({type: SORT_RP_EDIT_PAGE, payload: JSON.parse(newObject), deltaH, inputValue})
}

//***********************************************************************************************

// ==================================Вычесление дельты ============================================
interface DeltaComputedActionType {
    type: typeof INPUT_VALUE_UPDATE | typeof UPDATE_DELTA_H_EDIT_RP
    payload: Array<number>
}

export function deltaComputed(dispatch: (object: DeltaComputedActionType) => void, event: string, sortRp: Array<sortRpObjectType>, deltaH: Array<number>, inputValue: Array<number>, index: number, deltaH_EditRp: Array<number>) {
    inputValue[index] = +event
    const inputValueFinisData = JSON.stringify(inputValue)
    dispatch({type: INPUT_VALUE_UPDATE, payload: JSON.parse(inputValueFinisData)})
    if (index > 0) {
        const deltaProject = Math.round((sortRp[index].factH - sortRp[index - 1].factH) * 1000)
        const deltaFact = inputValue[index] - inputValue[index - 1]
        deltaH_EditRp[index] = deltaProject - deltaFact

        const finishData = JSON.stringify(deltaH_EditRp)
        dispatch({type: UPDATE_DELTA_H_EDIT_RP, payload: JSON.parse(finishData)})

    }

}

// ============================ Вычесление списка расчетов===================================
interface payloadCalcType {
    data: [string, number, number][]
    classData: string[][]
    further: '-'| '+'
}

interface CalculationListActionType {
    type: typeof CALCULATION_LIST
    payload: payloadCalcType
}

export function calculationList(dispatch: (object: CalculationListActionType) => void, sortRp: Array<sortRpObjectType>, inputValue: Array<number>, further: '-'| '+' = '-') {
    let data: [string, number, number][] = [] // создаем пустой массив, для формирования строк расчетов в таблицу

    sortRp.forEach((item, index) => { // перебераем отсортерованный массив

            // ===== формеруем первую строку расчетов=========
            data.push([`Rp${item.number}`, Math.round(inputValue[index] - (item.ugr - item.factH) * 1000), Math.round((inputValue[index] - (item.ugr - item.factH) * 1000) - item.elevation)])
            // ================================================

            const numberOfLines = Math.round(sortRp[index].distance / 2.5) // вычесляем колличество промежутоцных строк
            let countValue = 0
            let countElevation = 0
            if (index < sortRp.length - 1) { // исключаем добовление промежуточных строк после последней строки

                for (let i = 0; i < numberOfLines - 1; i++) { // цикл добавления промежуточных точек
                    const lines: any = [] // массив с промежуточной строкой
                    const valueMinIndex = Math.round(inputValue[index] - (item.ugr - item.factH) * 1000) // данные из input введенные пользователем (минимальный индекс)
                    const valueMaxIndex = Math.round(inputValue[index + 1] - (sortRp[index + 1].ugr - sortRp[index + 1].factH) * 1000) // данные из input введенные пользователем (максимальный индекс)
                    const elevationMinIndex = Math.round((inputValue[index] - (item.ugr - item.factH) * 1000) - item.elevation) // возвышение (минимальный индекс)
                    const elevationMaxIndex = Math.round((inputValue[index + 1] - (sortRp[index + 1].ugr - sortRp[index + 1].factH) * 1000) - sortRp[index + 1].elevation) // возвышение (максимальный индекс)

                    if (numberOfLines < 3) { // блок добавления одной строки
                        if (valueMinIndex > valueMaxIndex) { // проверка на возростание отсчета
                            lines.push(`${i + 1}`)
                            lines.push(valueMinIndex - ((valueMinIndex - valueMaxIndex) / (numberOfLines)))
                            lines.push(elevationMinIndex - ((elevationMinIndex - elevationMaxIndex) / (numberOfLines)))

                        } else {
                            lines.push(`${i + 1}`)
                            lines.push(valueMaxIndex - ((valueMaxIndex - valueMinIndex) / (numberOfLines)))
                            lines.push(elevationMaxIndex - ((elevationMaxIndex - elevationMinIndex) / (numberOfLines)))

                        }
                    } else { // блок добавления множества промежуточных строк

                        if (valueMinIndex > valueMaxIndex) { // проверка на возростание

                            if (countValue < valueMaxIndex) { // сохраняем в счетчик минимальное значение затем будем к нему прибавлять
                                countValue = valueMinIndex - ((valueMinIndex - valueMaxIndex) / (numberOfLines))
                                countElevation = elevationMinIndex - ((elevationMinIndex - elevationMaxIndex) / (numberOfLines))
                                lines.push(`${i + 1}`)
                                lines.push(countValue)
                                lines.push(countElevation)

                            } else { // прибавляем к минимальному значению каафициент
                                countValue = countValue - ((valueMinIndex - valueMaxIndex) / (numberOfLines))
                                countElevation = countElevation - ((elevationMinIndex - elevationMaxIndex) / (numberOfLines))
                                lines.push(`${i + 1}`)
                                lines.push(countValue)
                                lines.push(countElevation)

                            }

                        } else {
                            if (valueMinIndex < valueMaxIndex) { // строки на убывание
                                if (countValue < valueMinIndex) {
                                    countValue = valueMinIndex + ((valueMaxIndex - valueMinIndex) / (numberOfLines))
                                    countElevation = elevationMinIndex + ((elevationMaxIndex - elevationMinIndex) / (numberOfLines))
                                    lines.push(`${i + 1}`)
                                    lines.push(countValue)
                                    lines.push(countElevation)

                                } else {
                                    countValue = countValue + ((valueMaxIndex - valueMinIndex) / (numberOfLines))
                                    countElevation = countElevation + ((elevationMaxIndex - elevationMinIndex) / (numberOfLines))
                                    lines.push(`${i + 1}`)
                                    lines.push(countValue)
                                    lines.push(countElevation)

                                }
                            }


                        }
                    }
                    data.push(lines)
                }
            }
        }
    )
    // создаем массив css классов для дальнейсего изменения
    const classData = data.map(item => {
        const out = item.map(i => classes.activeNo)
        return out
    })

    dispatch({type: CALCULATION_LIST, payload: {data, classData, further}})
}

// =============подсветка элемента таблицы при нажатии================
interface activeClassOnPayloadType {
    type: typeof ACTIVE_CLASS_LIST
    payload: string [][]
}

export function activeClassOn(dispatch: (object: activeClassOnPayloadType) => void, classListData: string [][], indexArray: number, indexItem: number) {

    if (classListData[indexArray][indexItem] === classes.active) {
        classListData[indexArray][indexItem] = classes.activeNo
    } else {
        classListData[indexArray][indexItem] = classes.active
    }
    const updateClassList = JSON.stringify(classListData) // изменение ссылки

    dispatch({type: ACTIVE_CLASS_LIST, payload: JSON.parse(updateClassList)})
}
//***********************************************************************************

// ======================изменение знака в поле elevation на противоположный===============================


export function elevationRevers(dispatch: any, sortRp: Array<sortRpObjectType>, further: '-' | '+', inputValue: Array<number> ) {
    let furtherPayload: '-' | '+' = '-'
    const reversData = sortRp.map(item => {
        if (further === '+') {
            furtherPayload = '-'
            item.elevation = +item.elevation
        } else {
            item.elevation = -item.elevation
            furtherPayload = '+'
        }
        return item
    })
    dispatch(()=> calculationList(dispatch, reversData, inputValue, furtherPayload))

}


