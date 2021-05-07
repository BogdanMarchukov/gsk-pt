import {ERROR_SERVER, RESET_ERROR, SELECT_TAB, START_PZ_BEFORE_HANDLER, START_PZ_FROM_HANDLER} from "../types";
import classes from "../../pages/RpInfo/RpInfo.module.css";

//============Переключение TAB====================
export function selectTab(dispatch, payload) {
    console.log(payload)
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
    console.log(from, before)
    let rangePvo = []
    pvo.map((item, index) => {

        if (+item.number === from || +item.number === before) {
            console.log(+item.number)
            rangePvo.push(item)
        }
        if (index + 1 === pvo.length) {
            console.log('test')
            if (rangePvo.length < 2) {
                dispatch({type: ERROR_SERVER, payload: "Не верный номер PZ"})

                setTimeout(() => {
                    dispatch({type: RESET_ERROR})
                }, 100)


            } else console.log(rangePvo)

        }


        return true
    })

}