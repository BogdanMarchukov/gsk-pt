import React from 'react'
import AddObject from "../../Components/AddObject";
import classes from './homePage.module.css'


const HomePage = () => {
    return (
        <>
            <h1 className={classes.home}>
                Выбрать объект
            </h1>
            <AddObject/>
        </>
    )
}

export default HomePage