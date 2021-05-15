import React from 'react'
import classes from './optionsPage.module.css'
import {connect} from 'react-redux'
import RpInfoButton from "../../Components/RpInfoBotton/RpInfoButton";
import RiggerButton from "../../Components/RiggerButton/RiggerButton";
import ToHome from "../../Components/ToHome/ToHome";
import FactRpButton from "../../Components/FactRpButton/FactRpButton";


const OptionsPage = (props) => {
    return (
        <div className={classes.OptionsPage}>
            <h1>{props.currentObject.title}</h1>
            <div className={classes.displayFlex}>
                <RpInfoButton/>
                <RiggerButton/>
            </div>
            <div className={classes.displayFlex}>
                <FactRpButton/>
            </div>
            <ToHome/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentObject: state.objectListReducer.currentObject
    }
}


export default connect(mapStateToProps)(OptionsPage)