import React from 'react'
import ListObject from "../../Components/ListObject/ListObject";
import classes from './homePage.module.css'
import AddObject from "../../Components/AddObject/AddObject";
import {connect} from 'react-redux'
import ButtonNewObject from "../../Components/ButtonNewObject/ButtonNewObject";
import {OPEN_WINDOW_NEW_OBJ} from "../../redux/types";
import {
    inputFilePvoHandler,
    inputFileRpHandler,
    inputNameObjectHandler
} from "../../redux/actions/homePageActionsCreate";


const HomePage = (props) => {
    return (
        <>
            <h1 className={classes.home}>
                Выбрать объект
            </h1>
            <ListObject/>
            {
                props.isOpen ?
                    <AddObject
                        openWindowObj={props.openWindowObj}
                        inputNameObjectHandler={props.inputNameObjectHandler}
                        inputFilePvoHandler={props.inputFilePvoHandler}
                        inputFileRpHandler={props.inputFileRpHandler}
                    />
                    : null
            }
            {
                !props.isOpen ?
                    <ButtonNewObject openWindowObj={props.openWindowObj}/>
                    : null
            }

        </>
    )
}

function mapSateToProps(state) {
    return {
        isOpen: state.homePageReducer.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openWindowObj: () => dispatch({type: OPEN_WINDOW_NEW_OBJ}),
        inputNameObjectHandler: (event) => dispatch(()=> inputNameObjectHandler(dispatch, event)),
        inputFilePvoHandler: (event) => dispatch(()=> inputFilePvoHandler(dispatch, event)),
        inputFileRpHandler: (event) => dispatch(()=> inputFileRpHandler(dispatch, event))
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(HomePage)