import React from 'react'
import classes from './NavBarMenu.module.css'
import {Link} from "react-router-dom";

const NavBarMenu = ({btnName, linkTo}) => {
    return (
        <div className={classes.wrapNav}>
                {btnName.map((item, index) => {
                    return (
                        <div
                            key={index}
                        >
                            <Link
                                to={linkTo[index]}
                            >{item}
                            </Link>
                        </div>
                    )
                })}

        </div>
    )
}

export default NavBarMenu