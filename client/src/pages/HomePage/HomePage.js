import React from 'react'
import ListObject from "../../Components/ListObject/ListObject";
import classes from './homePage.module.css'
import AddObject from "../../Components/AddObject/AddObject";


const HomePage = () => {
    return (
        <>
            <h1 className={classes.home}>
                Выбрать объект
            </h1>
            <ListObject/>
            <AddObject/>
        </>
    )
}

export default HomePage