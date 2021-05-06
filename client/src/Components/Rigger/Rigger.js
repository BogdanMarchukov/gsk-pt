import React from 'react'
import classes from './Rigger.module.css'
import {Link} from "react-router-dom";

const Rigger = () => {
    return (
        <div className={classes.Rigger}>
            <Link
                to={'/'}
                className="waves-effect orange darken-1 btn-large"
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

export default Rigger