import React from 'react'
import classes from './FilterData.module.css'

interface obj {
    inputName: string
    inputHandler: any
    checkDefault: boolean
}

type Props = {
    inputList: obj[]
}
const FilterData = (props: Props) => {

    // функция сортирует общий масив в масивы с 3-мя элиментами для разбивания на строки
    const sortRow = (arr: obj[]): obj[][] => {
        let rows: obj[][] = []
        let row: obj[] = []
        let count = 0
        arr.forEach((item, index) => {
            if (count === 3) {
                count = 0
                rows.push(row)
                row = []
            }
            count++
            row.push(item)
            if (index === arr.length - 1) {
                rows.push(row)
            }
        })

        return rows
    }
    //*************************************************************************


    return (
        <>
            {

                sortRow(props.inputList).map((item, index) => {
                    return (
                        <div key={(index + 1) * 100} className={classes.flex}>
                            {
                                item.map((i, indexI) => {
                                    return (
                                        <p key={(indexI + 1) * 5}>
                                            <label key={(indexI + 1) * 2}>
                                                <input onChange={() => i.inputHandler()}  checked={i.checkDefault} key={(indexI + 1) * 3} type="checkbox" className="filled-in"/>
                                                <span key={(indexI + 1) * 4}>{i.inputName}</span>
                                            </label>
                                        </p>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default FilterData
