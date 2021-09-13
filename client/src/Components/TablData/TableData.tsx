import React from 'react'
import classes from './TableData.module.css'
import {Link} from "react-router-dom";

interface TableDataPropType {
    tableName: string
    columnName: string[]
    edit?: any
    data:  number[][] | string[][]
    id?: number
    title?: string
    funcIncrement?: any
    funcDecrement?: any
    buttonHandler?: any

}

const TableData = (props: TableDataPropType) => {
       // праверяем наличие данных в таблице
    if (props.data[0].length) {
        return (
            <div className={classes.data}>
                <table>
                    {/*название таблицы*/}
                    <caption>{props.tableName}</caption>
                    <tbody>
                    <tr key={Math.random()}>
                        {props.columnName.map((item, index) => {
                            return (
                                <React.Fragment
                                    key={index * 100}
                                >
                                    <th>{item} </th>


                                </React.Fragment>

                            )
                        })}
                    </tr>
                    {props.data.map((itemK , indexK) => {
                        return (
                            <tr key={indexK * 22}>
                                {itemK.map((item, index) => {
                                    // проверка на наличие поля для редактирования
                                    if (props.edit) {
                                        for (let i = 0; i < props.edit.length; i++) {
                                            if (index === props.edit[i]) {
                                                return (
                                                    <React.Fragment
                                                        key={index * 2}

                                                    >
                                                        <td>
                                                            {item}
                                                            <div className={`${classes.flexColumn} ${classes.data}`}>
                                                                <i
                                                                    className={'material-icons'}

                                                                        onClick={
                                                                            ()=> props.funcIncrement(props.data,  props.edit[i], indexK)
                                                                        }



                                                                >
                                                                    keyboard_arrow_up
                                                                </i>
                                                                <i
                                                                    className={'material-icons'}
                                                                    onClick={()=> props.funcDecrement(props.data, props.edit[i], indexK)}
                                                                >
                                                                    keyboard_arrow_down
                                                                </i>
                                                            </div>
                                                        </td>
                                                    </React.Fragment>
                                                )
                                            }
                                            else return (
                                                // если нет спецыальных полей просто выводим данные
                                                <React.Fragment
                                                    key={index * 101}
                                                >
                                                    <td>{item}</td>
                                                </React.Fragment>
                                            )
                                        }
                                        return true
                                    }
                                    else return (
                                        // вывод табличных данных
                                        <React.Fragment
                                            key={index * 101}
                                        >
                                            <td>{item}</td>
                                        </React.Fragment>
                                    )

                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                {/*кнопка обработчик. Если есть*/}
                {props.buttonHandler ?
                    <Link
                        to={'#'}
                        className="waves-effect waves-light btn"
                        onClick={()=> props.buttonHandler(props.data, props.id, props.title)}
                    >
                        Сохранить
                    </Link>
                    :
                    null
                }

            </div>
        )
        // если данных нет выводим null
    } else return null

}

export default TableData