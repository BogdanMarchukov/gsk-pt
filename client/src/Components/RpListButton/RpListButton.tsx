import React from 'react'
import classes from "../RiggerButton/Rigger.module.css";
import {Link} from "react-router-dom";

const RpListButton = () => {
    return (
        <div className={classes.Rigger}>
            <Link
                to={'/rp-list'}
                className="waves-effect light-blue darken-1 btn"
            >
                <i
                    className="material-icons left"
                >
                    format_list_numbered
                </i>
                Каталог Rp
            </Link>
        </div>

    )
}

export default RpListButton