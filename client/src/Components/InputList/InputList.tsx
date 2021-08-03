import React from 'react'
import {sortRpObjectType} from "../../redux/reducers/editRpReducer"
import classes from './InputList.module.css'
// @ts-ignore
import {Link} from "react-router-dom";

type Props = {
    sortRp: Array<sortRpObjectType> | null
    deltaH_EditRp: Array<number>
    deltaComputed: (event: string, sortRp: Array<sortRpObjectType>, deltaH: Array<number>, inputValue: Array<number>, index: number, deltaH_EditRp: Array<number>) => void
    inputValue: Array<number>
    calculationList: (sortRp: Array<sortRpObjectType>, inputValue: Array<number>) => void
}
export const InputList: React.FC<Props> = ({sortRp, deltaH_EditRp, deltaComputed, inputValue, calculationList}) => {


    return (
        <div className={`container ${classes.wrapper}`}>
            {sortRp?.map((item, index) => {
                return (
                    <div className={'row'} key={index}>
                        <div className={'col s12'}>
                            <div className="input-field col s12">
                                <input
                                    id={`inp ${index}`} type="number" autoComplete={'off'}
                                    onChange={event => deltaComputed(event.target.value, sortRp, deltaH_EditRp, inputValue, index, deltaH_EditRp)}
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
                                <h5>Дельта_H: {deltaH_EditRp[index + 1]}</h5>
                        }
                    </div>
                )
            })}
            <Link
                to={'#'}
                className="waves-effect waves-light btn-small"
                onClick={()=> sortRp ? calculationList(sortRp, inputValue): null}
            >
                Посчитать
            </Link>
        </div>
    )
}
