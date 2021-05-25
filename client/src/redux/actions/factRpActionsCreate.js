import {TABLE_DATA_LOCAL, UPDATE_TABLE_DATA_LOCAL} from "../types";


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

export async function saveShooting(dispatch, data) {
    const result = await fetch('api/save/shooting', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    console.log(result)
}