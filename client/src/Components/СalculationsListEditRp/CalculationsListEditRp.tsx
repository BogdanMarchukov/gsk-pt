import React from 'react'
import classes from './CalculationsListEditRp.module.css'
// @ts-ignore
import {Link} from 'react-router-dom'
import {sortRpObjectType} from "../../redux/reducers/editRpReducer";


interface CalculationsListEditRpType {
    columnName: Array<string>
    calculationDataList: [string, number, number][] | null
    classListData: string [][]
    activeClassOn: (classListData: string [][], indexArray: number, indexItem: number) => void
    further: '-' | '+'
    elevationRevers: (sortRp: Array<sortRpObjectType>, further: '-' | '+', inputValue: Array<number>) => void
    sortRp: Array<sortRpObjectType> | null
    inputValue: Array<number>
}




const CalculationsListEditRp: React.FC<CalculationsListEditRpType> = (props) => {



    return (
        <div className={classes.wrapper}>
            <Link onClick={()=> props.sortRp ? props.elevationRevers(props.sortRp, props.further, props.inputValue): null} to={'#'} className="waves-effect  green darken-1 btn">{`${props.further} ДР`}</Link>
            <table>
                <tbody>
                    {/*название столбцов*/}
                    <tr key={Math.random()}>
                        {props.columnName.map((itemName, index) => {
                            return (
                                <React.Fragment
                                    key={index}
                                >
                                    <th>{itemName}</th>
                                </React.Fragment>
                            )
                        })}
                    </tr>
                    {   props.calculationDataList?
                        props.calculationDataList.map((item, index) => {
                        return (
                            <React.Fragment
                                key={index}
                            >
                                <tr
                                    key={Math.random()}
                                >
                                    {
                                        item.map((i, indexItem) => {
                                            return (
                                                <React.Fragment
                                                    key={indexItem}
                                                >
                                                    <td
                                                        onClick={()=> props.activeClassOn(props.classListData, index, indexItem)}
                                                        className={props.classListData[index][indexItem]}
                                                        key={Math.random()}
                                                    >{i}</td>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        {/*// todo редактировать*/}
                                        <i>+</i>
                                    </td>


                                </tr>

                            </React.Fragment>
                        )

                    })
                    : null
                    }

                </tbody>
            </table>
        </div>
    )
}

export default CalculationsListEditRp