import React from 'react'
import {connect} from "react-redux";
import classes from './RpInfo.module.css'
import ToHome from "../../Components/ToHome/ToHome";
import {searchPZ, selectTab, startPzChengHandler} from "../../redux/actions/rpInfoPageActionCreater";
import InstallationRp from "../../Components/InstallationRp/InstallationRp";
import ShootingRp from "../../Components/ShootingRp/ShootingRp";
import Errors from "../../Components/Errors/Errors";


const RpInfo = (props) => {

    return (
        <div className={`container ${classes.RpInfo}`}>
            <h1>{props.title}</h1>
            <div className={'card'}>
                <div className={'row'}>
                    <div
                        className={`col s6 ${classes.btn} ${classes.border} ${props.activeInstallationRp}`}
                        onClick={() => props.selectTab(true)}
                    >
                        <span>Установка RP</span>
                    </div>
                    <div
                        onClick={() => props.selectTab(false)}
                        className={`col s6 ${classes.btn} ${classes.border} ${props.activeShootingRp}`}

                    >
                        <span>Съемка RP</span>
                    </div>
                    <div className={`col s12 light-blue lighten-4 ${classes.card}`}>
                        {
                             props.rpInfoOption ?
                                 <InstallationRp
                                     pzFrom={props.pzFrom}
                                     pzBefore={props.pzBefore}
                                     pzFromGi={props.pzFromGi}
                                     pzBeforeGi={props.pzBeforeGi}
                                     startPzChengHandler={props.startPzChengHandler}
                                     searchPZ={props.searchPZ}
                                     rp={props.rp}
                                     pvo={props.pvo}
                                     startPzFrom={props.startPzFrom}
                                     startPzBefore={props.startPzBefore}
                                 />
                                 :
                                 <ShootingRp/>
                        }
                    </div>

                </div>
            </div>
            <Errors
                error={props.error}
                errorMassage={props.errorMassage}
            />
            <ToHome/>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        title: state.objectListReducer.currentObject.title,
        rpInfoOption: state.objectListReducer.rpInfoOption,
        activeInstallationRp: state.objectListReducer.activeInstallationRp,
        activeShootingRp: state.objectListReducer.activeShootingRp,
        pzFrom: state.objectListReducer.pzFrom,
        pzBefore: state.objectListReducer.pzBefore,
        pzFromGi: state.objectListReducer.pzFromGi,
        pzBeforeGi: state.objectListReducer.pzBeforeGi,
        rp: state.objectListReducer.currentObject.rp,
        pvo: state.objectListReducer.currentObject.pvo,
        startPzFrom: state.objectListReducer.startPzFrom,
        startPzBefore: state.objectListReducer.startPzBefore,
        error: state.homePageReducer.errors.errorState,
        errorMassage: state.homePageReducer.errors.errorMassage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectTab: payload => dispatch(() => selectTab(dispatch, payload)),
        startPzChengHandler: (name, event)=> dispatch(()=>startPzChengHandler(dispatch, name, event)),
        searchPZ: (from, before, pvo, rp) => dispatch(()=>searchPZ(dispatch, from, before, pvo, rp))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RpInfo)