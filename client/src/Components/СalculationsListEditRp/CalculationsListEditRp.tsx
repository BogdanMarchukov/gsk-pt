import React from 'react'
import classes from './CalculationsListEditRp.module.css'

interface CalculationsListEditRpType {
    columnName: Array<string>
}


const testData = [
    [ 111, '1111', '1111'],
    [ 22, '222', '2222']

]


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
                    {testData.map((item, index) => {
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

                    })}

                </tbody>
            </table>
        </div>
    )
}

export default CalculationsListEditRp