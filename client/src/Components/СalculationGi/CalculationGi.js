import React from 'react'
import classes from "../InstallationRp/InstallationRp.module.css";

const CalculationGi = ({
                           calculationGi,
                           pzFrom,
                           keyH,
                           pzFromGi,
                           exactFrom,
                           calculationRpList,
                           rpList,
                           averageGi,
                           exactBefore,
                           countdownRp,
                           itemClass,
                           pzBeforeGi,
                           pzBefore,
                           activeTab
                       }) => {
    return (
        <>
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
                                    if (activeTab === false) {
                                        calculationRpList('From', rpList, pzFromGi, averageGi, exactFrom, exactBefore, countdownRp, itemClass)

                                    }
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
                                    if (activeTab === false) {
                                        calculationRpList('Before', rpList, pzBeforeGi, averageGi, exactFrom, exactBefore, countdownRp, itemClass)

                                    }
                                }
                                }
                            />
                            <span>Принять</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalculationGi