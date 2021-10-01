import React from 'react'
import classes from './NavBarMenu.module.css'
import {Link} from "react-router-dom";

interface PropType {
    btnName: string[]
    linkTo: string[]
}


const NavBarMenu = ({btnName, linkTo}: PropType) => {
    return (
        <div className={classes.wrapNav}>
            {btnName.map((item, index) => {
                return (
                    <Link
                        key={index}
                        to={linkTo[index]}
                    >{item}
                    </Link>

                )
            })}

                </div>
                )
            }

            export default NavBarMenu