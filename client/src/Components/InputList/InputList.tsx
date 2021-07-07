import React from 'react'
import {sortRpObjectType} from "../../redux/reducers/editRpReducer"
import classes from './InputList.module.css'

type Props = {
    sortRp: Array<sortRpObjectType> | null
    deltaH_EditRp: Array<number>
    deltaComputed: (event: string, sortRp: Array<sortRpObjectType>, deltaH: Array<number>,inputValue: Array<number>, index: number) => void
    inputValue: Array<number>
    inputHandler: (eventTarget: any, inputName: string, index: number)=> boolean
}
export const InputList: React.FC<Props> = ({sortRp, deltaH_EditRp, deltaComputed, inputValue, inputHandler}) => {


    return (
        <div className={`container ${classes.wrapper}`}>
            {sortRp?.map((item, index) => {
                return (
                    <div className={'row'} key={index}>
                        <div className={'col s12'}>
                            <div className="input-field col s12">
                                <input
                                    onChange={(event) => inputHandler(event, "inputList", index )}
                                    id={`inp ${index}`} type="number" autoComplete={'off'}
                                />
                                <label htmlFor={`inp ${index}`}>отсчет</label>
                                <span className="helper-text" data-error="wrong"
                                      data-success="right"><p>{`Rp-${item.number}`}</p></span>
                            </div>
                        </div>
                        {
                            sortRp.length - 1 === index ?
                                null
                                :
                                <h5>Дельта_H: {deltaH_EditRp[index]}</h5>
                        }
                    </div>
                )
            })}
        </div>
    )
}
