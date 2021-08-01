import React from 'react'
import classes from './CalculationsListEditRp.module.css'

interface CalculationsListEditRpType {
    columnName: Array<string>
}


const CalculationsListEditRp: React.FC<CalculationsListEditRpType> = (props) => {
    return (
        <div className={classes.wrapper}>
            <table>
                <tbody>
                {/*название столбцов*/}
                    <tr key={Math.random()}>
                        {props.columnName.map((itemName, index)=> {
                            return (
                                <React.Fragment
                                    key={index}
                                >
                                    <th>{itemName}</th>
                                </React.Fragment>
                            )
                        })}
                    </tr>
                {/*//todo продолжить тут*/}
                </tbody>

            </table>
        </div>
    )
}

export default CalculationsListEditRp