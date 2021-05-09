import React from 'react'
import {Link} from "react-router-dom";
import classes from './InstallationRp.module.css'

const InstallationRp = ({
                            pzFrom,
                            pzBefore,
                            pzFromGi,
                            pzBeforeGi,
                            startPzChengHandler,
                            searchPZ,
                            rp,
                            pvo,
                            startPzFrom,
                            startPzBefore,
                            calculationGi,
                            calculationRpList,
                            rpList,
                            exactFrom,
                            exactBefore,
                            averageGi,
                            keyH,
                            countdownRp,
                            itemClass,
                            contentInit
                        }) => {



    return (
        <>
            <div className={'row'}>
                <div className={'col s6'}>
                    <div className="input-field col s12">
                        <input
                            onChange={event => startPzChengHandler('from', event.target.value)}
                            id="email" type="number" autoComplete={'off'}
                        />
                        <label htmlFor="email">Введите номер</label>
                        <span className="helper-text" data-error="wrong" data-success="right">От PZ Номер</span>
                    </div>
                </div>
                <div className={'col s6'}>
                    <div className="input-field col s12">
                        <input
                            onChange={event => startPzChengHandler('before', event.target.value)}
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
                    onClick={() => searchPZ(+startPzFrom, +startPzBefore, pvo, rp)}
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
                            onChange={(event) => calculationGi('From', pzFrom.h, event.target.value, keyH)}
                        />
                        <label htmlFor="email-3">отсчет</label>
                        <span className="helper-text" data-error="wrong" data-success="right">{pzFrom.number}</span>
                    </div>
                    <div className={'col s8'}>
                        <div className={`${classes.Wrap}`}>
                            <p>ГИ-</p>
                            <p>{pzFromGi}</p>
                            <label>
                                <input
                                    id="indeterminate-checkbox"
                                    type="checkbox"
                                    checked={exactFrom}
                                    onChange={event => {
                                        calculationRpList('From', rpList, pzFromGi, averageGi, exactFrom, exactBefore, countdownRp, itemClass)
                                    }
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
                            onChange={(event) => calculationGi('Before', pzBefore.h, event.target.value, keyH)}

                        />
                        <label htmlFor="email-4">отсчет</label>
                        <span className="helper-text" data-error="wrong" data-success="right">{pzBefore.number}</span>
                    </div>
                    <div className={'col s8'}>
                        <div className={`${classes.Wrap}`}>
                            <p>ГИ-</p>
                            <p>{pzBeforeGi}</p>
                            <label>
                                <input
                                    id="indeterminate-checkbox"
                                    type="checkbox"
                                    checked={exactBefore}
                                    onChange={event => {
                                        calculationRpList('Before', rpList, pzBeforeGi, averageGi, exactFrom, exactBefore, countdownRp, itemClass)
                                    }
                                    }
                                />
                                <span>Принять</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={classes.flexColumn}>
                    {contentInit(countdownRp, itemClass)}
                </div>
            </div>

        </>
    )
}

export default InstallationRp