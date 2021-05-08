import React from 'react'
import {Link} from "react-router-dom";
import classes from './InstallationRp.module.css'

const InstallationRp = (props) => {

    function contentInit() {
        let content = []
            props.countdownRp.forEach((item, index) => {
                content.push(
                    <div key={index} className={classes.content}>
                        <p>Rp{item.name}</p>
                        <p>{item.calculation.toString().substr(-20, 6)}</p>
                        <label>
                            <input
                                id="indeterminate-checkbox" type="checkbox"
                            />
                            <span>Ок</span>
                        </label>
                    </div>
                )
            })
        return content

    }




    return (
        <>
            <div className={'row'}>
                <div className={'col s6'}>
                    <div className="input-field col s12">
                        <input
                            onChange={event => props.startPzChengHandler('from', event.target.value)}
                            id="email" type="number" autoComplete={'off'}
                        />
                        <label htmlFor="email">Введите номер</label>
                        <span className="helper-text" data-error="wrong" data-success="right">От PZ Номер</span>
                    </div>
                </div>
                <div className={'col s6'}>
                    <div className="input-field col s12">
                        <input
                            onChange={event => props.startPzChengHandler('before', event.target.value)}
                            id="email-2" type="number" autoComplete={'off'}
                        />
                        <label htmlFor="email-2">Введите номер</label>
                        <span className="helper-text" data-error="wrong" data-success="right">До PZ Номер</span>
                    </div>
                </div>

            </div>
            <div className={classes.flex}>
                <Link
                    to={'#'}
                    className=" waves-effect waves-light btn"
                    onClick={()=> props.searchPZ(+props.startPzFrom, +props.startPzBefore, props.pvo, props.rp)}
                >
                    Найти
                </Link>
            </div>
            <hr/>
            <div className={classes.flexColumn}>
                <div className={`row ${classes.marginBottom}`}>
                    <div className="input-field col s4">
                        <input
                            id="email-3"
                            type="number"
                            autoComplete={'off'}
                            onChange={(event)=> props.calculationGi('From', props.pzFrom.h, event.target.value, props.keyH)}
                        />
                        <label htmlFor="email-3">отсчет</label>
                        <span className="helper-text" data-error="wrong" data-success="right">{props.pzFrom.number}</span>
                    </div>
                    <div className={'col s8'}>
                        <div className={`${classes.Wrap}`}>
                            <p>ГИ-</p>
                            <p>{props.pzFromGi}</p>
                            <label>
                                <input
                                    id="indeterminate-checkbox"
                                    type="checkbox"
                                    checked={props.exactFrom}
                                    onChange={event => {
                                        props.calculationRpList('From', props.rpList, props.pzFromGi, props.averageGi , props.exactFrom, props.exactBefore )}
                                    }
                                />
                                <span>Принять</span>
                            </label>
                        </div>
                    </div>
                </div>
                <p className={`${classes.marginNull} ${classes.textAlign}`}>Для среднего значения примите оба ГИ</p>
                <div className={`row ${classes.marginBottom}`}>
                    <div className="input-field col s4">
                        <input
                            id="email-4"
                            type="number"
                            autoComplete={'off'}
                            onChange={(event)=> props.calculationGi('Before', props.pzBefore.h, event.target.value, props.keyH)}

                        />
                        <label htmlFor="email-4">отсчет</label>
                        <span className="helper-text" data-error="wrong" data-success="right">{props.pzBefore.number}</span>
                    </div>
                    <div className={'col s8'}>
                        <div className={`${classes.Wrap}`}>
                            <p>ГИ-</p>
                            <p>{props.pzBeforeGi}</p>
                            <label>
                                <input
                                    id="indeterminate-checkbox"
                                    type="checkbox"
                                    checked={props.exactBefore}
                                    onChange={event => {
                                        props.calculationRpList('Before', props.rpList, props.pzBeforeGi, props.averageGi , props.exactFrom, props.exactBefore )}
                                    }
                                />
                                <span>Принять</span>
                            </label>
                        </div>
                    </div>
                </div>
               <div className={classes.flexColumn}>

                   {contentInit()}
               </div>
            </div>

        </>
    )
}

export default InstallationRp