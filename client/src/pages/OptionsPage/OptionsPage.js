import React from 'react'
import classes from './optionsPage.module.css'
import {connect} from 'react-redux'
import RpInfo from "../../Components/RpInfo/RpInfo";
import Rigger from "../../Components/Rigger/Rigger";
import ToHome from "../../Components/ToHome/ToHome";


const OptionsPage = (props) => {
    return (
        <div className={classes.OptionsPage}>
            <h1>{props.currentObject.title}</h1>
            <div className={classes.displayFlex}>
                <RpInfo/>
                <Rigger/>
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

function mapDispatchToProps(dispatch) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(OptionsPage)