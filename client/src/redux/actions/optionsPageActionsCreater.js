import {CURRENT_OBJECT} from "../types";


export function currentInfoObject(dispatch, list) {
    const listData = []
    list.rp.forEach( item => {
        const data = []
        data.push(+item.number)
        data.push(+item.pk)
        data.push(+item.ugr)
        listData.push(data)
    })
    console.log(listData)

    dispatch({type: CURRENT_OBJECT, payload: {list, listData} })
}