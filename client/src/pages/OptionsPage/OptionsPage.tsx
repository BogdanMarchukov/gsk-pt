import React from 'react'
import classes from './optionsPage.module.css'
import {connect} from 'react-redux'
import RpInfoButton from "../../Components/RpInfoBotton/RpInfoButton";
import RiggerButton from "../../Components/RiggerButton/RiggerButton";
import ToHome from "../../Components/ToHome/ToHome";
import FactRpButton from "../../Components/FactRpButton/FactRpButton";
import {currentObjectType, InitStateType} from "../../redux/reducers/objectListReducer";
import RpListButton from "../../Components/RpListButton/RpListButton";

interface optionsPage {
    currentObject: currentObjectType
}

const OptionsPage = (props: optionsPage) => {
    return (
        <div className={classes.OptionsPage}>
            <h1>{props.currentObject.title}</h1>
            <div className={classes.displayFlex}>
                <RpInfoButton/>
                <RiggerButton/>
            </div>
            <div className={classes.displayFlex}>
                <FactRpButton/>
                <RpListButton/>
            </div>
            <ToHome/>
        </div>
    )
}

interface mapStateType {
    objectListReducer: InitStateType
}

function mapStateToProps(state: mapStateType) {
    return {
        currentObject: state.objectListReducer.currentObject
    }
}


export default connect(mapStateToProps)(OptionsPage)