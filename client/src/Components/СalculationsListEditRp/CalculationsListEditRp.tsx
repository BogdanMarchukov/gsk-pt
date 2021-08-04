import React from 'react'
import classes from './CalculationsListEditRp.module.css'

interface CalculationsListEditRpType {
    columnName: Array<string>
    calculationDataList: Array<number>[] | null
}




const CalculationsListEditRp: React.FC<CalculationsListEditRpType> = (props) => {
    return (
        <div className={classes.wrapper}>
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
                                                        key={Math.random()}
                                                    >{i}</td>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td>
                                        {/*// todo редактировать*/}
                                        <i>121</i>
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