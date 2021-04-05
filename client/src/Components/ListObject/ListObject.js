import React from 'react'
import {Link} from "react-router-dom";
import classes from './listObject.module.css'


const ListObject = () => {

    return (
        <div className= {`${classes.listObj} row`}>
            <Link
                to='/' className={`col l3 s12 waves-effect waves-light btn-large light-green accent-3 grey-text text-darken-4 `}
            >
                Мажайская-Терехова
            </Link>
            <Link
                to='/' className=" col l3 s12 waves-effect waves-light btn-large light-green accent-3 grey-text text-darken-4"
            >
                Мажайская-Давыдкова
            </Link>
            <Link
                to='/' className=" col l3 s12 waves-effect waves-light btn-large light-green accent-3 grey-text text-darken-4"
            >
                Мажайская-Давыдкова
            </Link>
            <Link
                to='/' className=" col l3 s12 waves-effect waves-light btn-large light-green accent-3 grey-text text-darken-4"
            >
                Мажайская-Давыдкова
            </Link>
            <Link
                to='/' className=" col l4 s12 waves-effect waves-light btn-large light-green accent-3 grey-text text-darken-4"
            >
                Мажайская-Давыдкова
            </Link>
        </div>
    )
}

export default ListObject
