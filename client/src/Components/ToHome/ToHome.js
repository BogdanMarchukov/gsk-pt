import React from 'react'
import {Link} from "react-router-dom";
import classes from './ToHome.module.css'

const ToHome = () => {
    return (
        <div className={classes.ToHome}>
            <Link
                to={'/'}
                className="waves-effect black btn-large"
            >
                <i
                    className="material-icons left"
                >
                    apps
                </i>
                Главная
            </Link>
        </div>
    )
}

export default ToHome