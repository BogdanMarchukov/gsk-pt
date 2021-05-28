import React from 'react'
import classes from "./EditRp.module.css"
import ToHome from "../../Components/ToHome/ToHome"
import {connect} from "react-redux"
import Search from "../../Components/Search/Search";
import WindowLoadingFile from "../../Components/WindowLoadingFile/WindowLoadingFile";


const EditRp = (props) => {
    return (
        <div className={classes.editWrapper}>
            <h1>{props.title}</h1>
            <p>Рихтовка</p>
            <WindowLoadingFile
                title={'Отсутствуют данные Rp. Загрузить?'}
            />
            <Search/>
            <hr/>
            <ToHome/>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        title: state.objectListReducer.currentObject.title
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRp)