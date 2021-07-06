import React from 'react'
import classes from "../InstallationRp/InstallationRp.module.css";
import {Link} from "react-router-dom";

const Search = (props) => {
    return (
        <>
            <div className={'row'}>
                <div className={'col s6'}>
                    <div className="input-field col s12">
                        <input
                            onChange={event => props.inputHandler(event, "toRp")}
                            id="email" type="number" autoComplete={'off'}
                        />
                        <label htmlFor="email">номер RP</label>
                        <span className="helper-text" data-error="wrong" data-success="right">От RP Номер</span>
                    </div>
                </div>
                <div className={'col s6'}>
                    <div className="input-field col s12">
                        <input
                            onChange={event => props.inputHandler(event, "toFrom")}
                            id="email-2" type="number" autoComplete={'off'}
                        />
                        <label htmlFor="email-2">номер RP</label>
                        <span className="helper-text" data-error="wrong" data-success="right">До RP Номер</span>
                    </div>

                </div>

            </div>
            <div className={classes.flex}>
                <Link
                    to={'#'}
                    className=" waves-effect waves-light btn"
                    onClick={()=> props.submitHandler(props.toRp, props.fromRp, props.rpLIst)}

                >
                    Найти
                </Link>
            </div>
        </>
    )

}

export default Search