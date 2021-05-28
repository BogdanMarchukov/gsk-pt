import React from 'react'
import classes from "../InstallationRp/InstallationRp.module.css";
import {Link} from "react-router-dom";

const Search = ({startPzChengHandler, startPzFrom, startPzBefore}) => {
    return (
        <>
            <div className={'row'}>
                <div className={'col s6'}>
                    <div className="input-field col s12">
                        <input

                            id="email" type="number" autoComplete={'off'}
                        />
                        <label htmlFor="email">test</label>
                        <span className="helper-text" data-error="wrong" data-success="right">От PZ Номер</span>
                    </div>
                </div>
                <div className={'col s6'}>
                    <div className="input-field col s12">
                        <input

                            id="email-2" type="number" autoComplete={'off'}
                        />
                        <label htmlFor="email-2">test</label>
                        <span className="helper-text" data-error="wrong" data-success="right">До PZ Номер</span>
                    </div>

                </div>

            </div>
            <div className={classes.flex}>
                <Link
                    to={'#'}
                    className=" waves-effect waves-light btn"

                >
                    Найти
                </Link>
            </div>
        </>
    )

}

export default Search