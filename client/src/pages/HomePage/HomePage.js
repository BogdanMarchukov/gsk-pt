import React from 'react'
import ListObject from "../../Components/ListObject/ListObject";
import classes from './homePage.module.css'
import AddObject from "../../Components/AddObject/AddObject";
import {connect} from 'react-redux'
import ButtonNewObject from "../../Components/ButtonNewObject/ButtonNewObject";
import {OPEN_WINDOW_NEW_OBJ} from "../../redux/types";
import {
    fetchObject,
    inputFilePvoHandler,
    inputFileRpHandler,
    inputNameObjectHandler, submitFormCreateObject
} from "../../redux/actions/homePageActionsCreate";
import Errors from "../../Components/Errors/Errors";



const HomePage = (props) => {

    return (
        <>
            <h1 className={classes.home}>
                Выбрать объект
            </h1>

            <ListObject
                fetchObject={props.fetchObject}
                update={props.update}
                loading={props.loading}
                objectList={props.objectList}
            />


            <Errors
                error={props.error}
                errorMassage={props.errorMassage}
            />
            {
                props.isOpen ?
                    <AddObject
                        openWindowObj={props.openWindowObj}
                        inputNameObjectHandler={props.inputNameObjectHandler}
                        inputFilePvoHandler={props.inputFilePvoHandler}
                        inputFileRpHandler={props.inputFileRpHandler}
                        submitFormCreateObject={props.submitFormCreateObject}
                        content={props.content}
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
        isOpen: state.homePageReducer.isOpen,
        content: state.homePageReducer.createObjectForm,
        error: state.homePageReducer.errors.errorState,
        errorMassage: state.homePageReducer.errors.errorMassage,
        update: state.objectListReducer.update,
        loading: state.objectListReducer.loading,
        objectList: state.objectListReducer.objectList

    }
}

function mapDispatchToProps(dispatch) {
    return {
        openWindowObj: () => dispatch({type: OPEN_WINDOW_NEW_OBJ}),
        inputNameObjectHandler: (event) => dispatch(() => inputNameObjectHandler(dispatch, event)),
        inputFilePvoHandler: (event) => dispatch(() => inputFilePvoHandler(dispatch, event)),
        inputFileRpHandler: (event) => dispatch(() => inputFileRpHandler(dispatch, event)),
        submitFormCreateObject: (content) => dispatch(() => submitFormCreateObject(dispatch, content)),
        fetchObject: (update) => dispatch(() => fetchObject(dispatch, update))
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(HomePage)