import {
    CALCULATION_GI_BEFORE,
    CALCULATION_GI_FROM,
    ERROR_SERVER, EXPECT_BEFORE_INPUT_FINISH_OFF,
    EXPECT_BEFORE_INPUT_OFF,
    EXPECT_BEFORE_INPUT_ON,
    EXPECT_FROM_INPUT_FINISH_OFF,
    EXPECT_FROM_INPUT_OFF,
    EXPECT_FROM_INPUT_ON, KILL_POINT,
    RESET_ERROR, SAVE_CLASS_LIST,
    SELECT_TAB,
    SORT_RP_PZ_DATA,
    START_PZ_BEFORE_HANDLER,
    START_PZ_FROM_HANDLER
} from "../types";
import classes from "../../pages/RpInfo/RpInfo.module.css";
import React from "react";

//============Переключение TAB====================
export function selectTab(dispatch, payload) {
    if (payload === true) {
        dispatch({
            type: SELECT_TAB, payload: {
                rpInfoOption: true,
                activeInstallationRp: classes.active,
                activeShootingRp: ''
            }
        })
    } else if (payload === false) {
        dispatch({
            type: SELECT_TAB, payload: {
                rpInfoOption: false,
                activeInstallationRp: '',
                activeShootingRp: classes.active
            }
        })
    }

}

//*************************************************

// ================Установка реперов===============

// Записываем в Store номера PZ
export function startPzChengHandler(dispatch, name, event) {

    if (name === 'from') {
        dispatch({type: START_PZ_FROM_HANDLER, payload: event})
    }
    if (name === 'before') {
        dispatch({type: START_PZ_BEFORE_HANDLER, payload: event})
    }
}

// Поиск PZ из списка текущего проекта
export function searchPZ(dispatch, from, before, pvo, rp) {


    let rangePvo = []
    let sortRp = []
    let min = 0
    let max = 0

    pvo.map((item, index) => {

        if (+item.number === from || +item.number === before) {
            rangePvo.push(item)
        }
        if (index + 1 === pvo.length) {
            if (rangePvo.length < 2) {
                dispatch({type: ERROR_SERVER, payload: "Не верный номер PZ"})

                setTimeout(() => {
                    dispatch({type: RESET_ERROR})
                }, 100)
                return true

            }

        }
        return true
    })
    if (rangePvo.length === 2) {
        if (+rangePvo[0].number > +rangePvo[1].number) {
            max = rangePvo[0]
            min = rangePvo[1]
        } else {
            max = rangePvo[1]
            min = rangePvo[0]
        }

        rp.forEach(item => {
            if (+item.pk > +min.number && +item.pk < +max.number) {
                sortRp.push(item)
            }
        })

        dispatch({
            type: SORT_RP_PZ_DATA, payload: {
                sortRp,
                min,
                max
            }
        })
    }
    clsCreate(dispatch, sortRp)

}


// создание массива с классами
function clsCreate(dispatch, list) {
    let cls = []
    list.forEach(() => {
        cls.push(classes.content)
    })
    dispatch({type: SAVE_CLASS_LIST, payload: cls})
}

// вычесление ГИ прибора
export function calculationGi(dispatch, name, dataPz, countdownInput, keyH) {

    switch (name) {
        case ('From'):
            const giFrom = (+dataPz * 1000 + +countdownInput) / 1000 - +-keyH
            dispatch({type: CALCULATION_GI_FROM, payload: giFrom})
            break
        case ('Before'):
            const giBefore = (+dataPz * 1000 + +countdownInput) / 1000 - +-keyH
            dispatch({type: CALCULATION_GI_BEFORE, payload: giBefore})
            break
        default:
            return true
    }
}

// вычесление отсчетов

export function calculationRpList(dispatch, name, rpList, gi, averageGi, exactFrom, exactBefore, countdownRp, itemClass) {
    let list = []

    switch (name) {
        case ('From'):
            if (exactBefore === false && exactFrom === false) {
                rpList.forEach(item => {
                    list.push({name: item.number, calculation: concat(gi, item)})

                })
                dispatch({type: EXPECT_FROM_INPUT_ON, payload: {list, gi: +gi}})
                dispatch(() => contentInit(dispatch, countdownRp, itemClass))
            }
            if (exactBefore === false && exactFrom === true) {
                dispatch({type: EXPECT_FROM_INPUT_OFF})
            }
            if (exactBefore === true && exactFrom === false) {

                let srGi = (+gi + +averageGi) / 2
                rpList.forEach(item => {
                    list.push({name: item.number, calculation: concat(srGi, item)})
                })
                dispatch({type: EXPECT_FROM_INPUT_ON, payload: {list, gi: +srGi}})
                dispatch(() => contentInit(dispatch, countdownRp, itemClass))
            }
            if (exactBefore === true && exactFrom === true) {
                dispatch({type: EXPECT_FROM_INPUT_FINISH_OFF})

            }
            break
        case ('Before'):
            if (exactFrom === false && exactBefore === false) {
                rpList.forEach(item => {
                    list.push({name: item.number, calculation: concat(gi, item)})

                })
                dispatch({type: EXPECT_BEFORE_INPUT_ON, payload: {list, gi: +gi}})
                dispatch(() => contentInit(dispatch, countdownRp, itemClass))
            }
            if (exactFrom === false && exactBefore === true) {
                dispatch({type: EXPECT_BEFORE_INPUT_OFF})
            }
            if (exactFrom === true && exactBefore === false) {
                let srGi = (+gi + +averageGi) / 2
                rpList.forEach(item => {
                    list.push({name: item.number, calculation: concat(srGi, item)})
                })
                dispatch({type: EXPECT_BEFORE_INPUT_ON, payload: {list, gi: +srGi}})
                dispatch(() => contentInit(dispatch, countdownRp, itemClass))
            }
            if (exactBefore === true && exactFrom === true) {
                dispatch({type: EXPECT_BEFORE_INPUT_FINISH_OFF})

            }

            break
        default:
            return true
    }
}

/// добавляет 0 если число трехзначное
function concat(gi, item) {
    let i = +gi * 1000 - +item.ugr * 1000
    if (i < 1000 && i >= 100) {
        return "0" + i
    } else if (i < 100) {
        return "00" + i
    } else {
        return i
    }

}


// отображение списка расчета
export function contentInit(dispatch, countdownRp, listClasses) {

    let content = []
    countdownRp.forEach((item, index) => {
        content.push(
            <div key={index} className={listClasses[index]}>
                <p>Rp{item.name}</p>
                <p>{item.calculation.toString().substr(-20, 6)}</p>
                <label>
                    <input
                        id="indeterminate-checkbox" type="checkbox"
                        onChange={(event) => killPoint(dispatch, index, listClasses, event.target.checked)}
                    />
                    <span>Ок</span>
                </label>
            </div>
        )
    })
    return content

}

// изменение класс (перечеркивание пункта списка)

export function killPoint(dispatch, index, listClasses, checked) {
    let arrClass = []
    listClasses.forEach((item, indexItem) => {
        if (checked) {
            if (item === classes.activeText || indexItem === index) {
                arrClass.push(classes.activeText)
            } else arrClass.push(classes.content)
        } else if (indexItem === index) {
            arrClass.push(classes.content)
        }else arrClass.push(item)

    })
    dispatch({type: KILL_POINT, payload: arrClass})
}

///******************************************************************************************

//================================= TAB Съемка ==============================================


// отображение полей
export function showList(dispatch, sortRp) {
    let list = []
   sortRp.forEach((item, index)=> {
       list.push(
           <div key={index} className={`row ${classes.ShootingRpWrapper}`}>
               <p className={'col s4'}>Rp-{item.number}</p>
               <div className="input-field col s4">
                   <input
                       id={`${index}`}
                       type="number"
                       autoComplete={'off'}
                   />
                   <label htmlFor={`${index}`}>введите</label>
                   <span className="helper-text" data-error="wrong" data-success="right">отсчет</span>
               </div>
               <p className={'col s4'}>Дельта</p>
           </div>
       )
   })
    return list
}