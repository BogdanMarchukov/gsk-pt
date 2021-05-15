import React from 'react'
import classes from './NavBarMenu.module.css'
import {Link} from "react-router-dom";

const NavBarMenu = ({btnName, linkTo}) => {
    return (
        <div className={classes.wrapNav}>
                {btnName.map((item, index) => {
                    return (
                        <>
                            <Link
                                to={linkTo[index]}
                            >{item}
                            </Link>
                        </>
                    )
                })}

        </div>
    )
}

export default NavBarMenu