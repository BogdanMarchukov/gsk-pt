import React from 'react'
import {connect} from "react-redux";
import classes from './RpInfo.module.css'
import ToHome from "../../Components/ToHome/ToHome";
import {
    calculationGi,
    calculationRpList, contentInit,
    searchPZ,
    selectTab, showList,
    startPzChengHandler
} from "../../redux/actions/rpInfoPageActionCreater";
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
                                     calculationGi={props.calculationGi}
                                     calculationRpList={props.calculationRpList}
                                     rpList={props.rpList}
                                     exactFrom={props.exactFrom}
                                     exactBefore={props.exactBefore}
                                     averageGi={props.averageGi}
                                     keyH={props.keyH}
                                     countdownRp={props.countdownRp}
                                     itemClass={props.itemClass}
                                     countdownRpList={props.countdownRpList}
                                     contentInit={props.contentInit}
                                     activeTab={props.activeTab}


                                 />
                                 :
                                 <ShootingRp
                                     calculationGi={props.calculationGi}
                                     pzFrom={props.pzFrom}
                                     keyH={props.keyH}
                                     pzFromGi={props.pzFromGi}
                                     exactFrom={props.exactFrom}
                                     calculationRpList={props.calculationRpList}
                                     rpList={props.rpList}
                                     averageGi={props.averageGi}
                                     exactBefore={props.exactBefore}
                                     countdownRp={props.countdownRp}
                                     itemClass={props.itemClass}
                                     pzBeforeGi={props.pzBeforeGi}
                                     pzBefore={props.pzBefore}
                                     activeTab={props.activeTab}
                                     showList={props.showList}
                                     sortRp={props.rpList}
                                 />
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
        keyH: state.objectListReducer.currentObject.pvo[0].keyH,
        rp: state.objectListReducer.currentObject.rp,
        pvo: state.objectListReducer.currentObject.pvo,
        startPzFrom: state.objectListReducer.startPzFrom,
        startPzBefore: state.objectListReducer.startPzBefore,
        error: state.homePageReducer.errors.errorState,
        errorMassage: state.homePageReducer.errors.errorMassage,
        rpList: state.objectListReducer.sortRp,
        exactFrom: state.objectListReducer.exactFrom,
        exactBefore: state.objectListReducer.exactBefore,
        averageGi: state.objectListReducer.averageGi,
        countdownRp: state.objectListReducer.countdownRp,
        itemClass: state.objectListReducer.listClasses,
        countdownRpList: state.objectListReducer.countdownRpList,
        activeTab: state.objectListReducer.activeTab

    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectTab: payload => dispatch(() => selectTab(dispatch, payload)),
        startPzChengHandler: (name, event)=> dispatch(()=>startPzChengHandler(dispatch, name, event)),
        searchPZ: (from, before, pvo, rp) => dispatch(()=>searchPZ(dispatch, from, before, pvo, rp)),
        calculationGi: (name, dataPz, countdownInput, keyH)=> dispatch(()=> calculationGi(dispatch,name, dataPz, countdownInput, keyH)),
        calculationRpList: (name, rpList, gi, averageGi, exactFrom, exactBefore, countdownRp, itemClass) => dispatch(()=> calculationRpList(dispatch, name, rpList, gi, averageGi, exactFrom, exactBefore, countdownRp, itemClass)),
        contentInit: (countdownRp, listClasses) => dispatch(()=> contentInit(dispatch, countdownRp, listClasses)),
        showList: (sortRp) => dispatch(()=> showList(dispatch, sortRp))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RpInfo)