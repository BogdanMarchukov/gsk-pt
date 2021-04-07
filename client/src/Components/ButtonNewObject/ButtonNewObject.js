import React from 'react'
import {Link} from "react-router-dom";
import classes from "./buttonNewObject.module.css"

const ButtonNewObject = ({openWindowObj}) => {
    return (
        <div className={classes.displayFlex}>
            <Link to='/' className={` my-auto btn-floating btn-large waves-effect waves-light red`} onClick={openWindowObj}><i
                className="material-icons">add</i>
            </Link>
        </div>
    )
}

export default ButtonNewObject