import React from 'react'
import classes from './Rigger.module.css'
import {Link} from "react-router-dom";

const RiggerButton = () => {
    return (
        <div className={classes.Rigger}>
            <Link
                to={'/'}
                className="waves-effect orange darken-1 btn"
            >
                <i
                    className="material-icons left"
                >
                    subway
                </i>
                Рихтовка
            </Link>
        </div>
    )
}

export default RiggerButton