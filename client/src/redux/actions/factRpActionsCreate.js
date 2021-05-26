import {CURRENT_OBJECT, LOADER, TABLE_DATA_LOCAL, UPDATE_TABLE_DATA_LOCAL} from "../types";
import TableData from "../../Components/TablData/TableData";
import React from "react";


///=================== Отображение таблицы с лакальными данными=============
export function localData(dispatch, dataStore, objName) {
    let storageData = JSON.parse(localStorage.getItem(`${objName}Dh`))
    if (storageData) {
        let data = []
        for (let item in storageData) {
            let arr = []
            arr.push(+item)
            arr.push(+dataStore[item - 1].ugr)
            arr.push(+(+dataStore[item - 1].ugr + +storageData[item] / 1000).toFixed(3))
            arr.push(+storageData[item])
            data.push(arr)
        }

        dispatch({type: TABLE_DATA_LOCAL, payload: data})
    }
}

// ====================Отоброжение таблицы с глобальными данными=========================

export function showGlobalData(dispatch, fact) {
    let list = []
    if (fact) {
        for (let item in fact) {
            list.push((
                <TableData
                    key={Math.random()}
                    tableName={`${item}`}
                    columnName={['номер Rp', 'проект', 'факт', 'дельта Н']}
                    edit={null}
                    data={fact[item]}
                    id={null}
                    title={null}
                    funcIncrement={null}
                    funcDecrement={null}
                    buttonHandler={null}
                />
            ))
        }
        return list
    }
    return (
        <>
            <h6>Нет ни одной сохранненой съемки</h6>

        </>
    )

}

export function funcIncrement(dispatch, dataList, editColumn, index) {
    let updateData = []
    dataList[index][editColumn] = +(dataList[index][editColumn] + 0.001).toFixed(3)
    dataList[index][editColumn + 1] = +(dataList[index][editColumn + 1] + 1).toFixed(0)
    updateData = [...dataList]
    dispatch({type: UPDATE_TABLE_DATA_LOCAL, payload: updateData})
}

export function funcDecrement(dispatch, dataList, editColumn, index) {
    let updateData = []
    dataList[index][editColumn] = +(dataList[index][editColumn] - 0.001).toFixed(3)
    dataList[index][editColumn + 1] = +(dataList[index][editColumn + 1] - 1).toFixed(0)
    updateData = [...dataList]
    dispatch({type: UPDATE_TABLE_DATA_LOCAL, payload: updateData})
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =========================Сохранение съемки в БД=======================================

export async function saveShooting(dispatch, data, id, title) {
    const bodyData = {
        data,
        id
    }
    dispatch({type: LOADER, payload: true})
    try {
        const result = await fetch('api/save/shooting', {
            method: "POST",
            body: JSON.stringify(bodyData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({type: LOADER, payload: false})
        dispatch({type: TABLE_DATA_LOCAL, payload: [[]]})
        if (result.status === 200) {
            localStorage.removeItem(`${title}Dh`)
        }
        const resultData = await result.json()
        dispatch({type: CURRENT_OBJECT, payload: resultData})
    } catch (e) {
        console.log(e)
    }

}