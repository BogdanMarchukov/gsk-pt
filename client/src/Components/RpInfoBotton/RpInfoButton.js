import React from 'react'
import {Link} from "react-router-dom";
import classes from './RpinfoButton.module.css'

const RpInfoButton = () => {

    return (
        <div className={classes.btn}>
            <Link
                to={'/rp'}
                className="waves-effect blue accent-3 btn-large"
            >
                <i
                    className="material-icons left"
                >
                    gps_fixed
                </i>
                    Репера
            </Link>
        </div>
    )
}

export default RpInfoButton