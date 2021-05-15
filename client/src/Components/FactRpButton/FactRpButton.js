import React from 'react'
import classes from "../RiggerButton/Rigger.module.css";
import {Link} from "react-router-dom";

const FactRpButton = () => {
    return (
        <div className={classes.Rigger}>
            <Link
                to={'/fact'}
                className="waves-effect indigo darken-3 btn"
            >
                <i
                    className="material-icons left"
                >
                    assignment
                </i>
                Съемка Rp
            </Link>
        </div>

    )
}

export default FactRpButton