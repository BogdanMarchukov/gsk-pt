import React from 'react'
import {Link} from "react-router-dom";
import classes from './InstallationRp.module.css'
import CalculationGi from "../СalculationGi/CalculationGi";

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
                            contentInit,
                            activeTab
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
                        <label htmlFor="email">{startPzFrom}</label>
                        <span className="helper-text" data-error="wrong" data-success="right">От PZ Номер</span>
                    </div>
                </div>
                <div className={'col s6'}>
                    <div className="input-field col s12">
                        <input
                            onChange={event => startPzChengHandler('before', event.target.value)}
                            id="email-2" type="number" autoComplete={'off'}
                        />
                        <label htmlFor="email-2">{startPzBefore}</label>
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
                <CalculationGi
                    calculationGi={calculationGi}
                    pzFrom={pzFrom}
                    keyH={keyH}
                    pzFromGi={pzFromGi}
                    exactFrom={exactFrom}
                    calculationRpList={calculationRpList}
                    rpList={rpList}
                    averageGi={averageGi}
                    exactBefore={exactBefore}
                    countdownRp={countdownRp}
                    itemClass={itemClass}
                    pzBeforeGi={pzBeforeGi}
                    pzBefore={pzBefore}
                    activeTab={activeTab}
                />
                <div className={classes.flexColumn}>
                    {contentInit(countdownRp, itemClass)}
                </div>
            </div>

        </>
    )
}

export default InstallationRp