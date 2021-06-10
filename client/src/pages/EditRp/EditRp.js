import React from 'react'
import classes from "./EditRp.module.css"
import ToHome from "../../Components/ToHome/ToHome"
import {connect} from "react-redux"
import Search from "../../Components/Search/Search";
import WindowLoadingFile from "../../Components/WindowLoadingFile/WindowLoadingFile";
import {inputHandler, saveFileRp} from "../../redux/actions/editRpActionsCreater";


const EditRp = (props) => {
    return (
        <div className={classes.editWrapper}>
            <h1>{props.title}</h1>
            <p>Рихтовка</p>
            <WindowLoadingFile
                title={'Отсутствуют данные Rp. Загрузить?'}
                inputHandler={props.inputHandler}
                submitHandler={props.saveFileRp}
                data={props.file}
                id={props.id}
            />
            <Search/>
            <hr/>
            <ToHome/>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        title: state.objectListReducer.currentObject.title,
        file: state.editRpReducer.rpFile,
        id: state.objectListReducer.currentObject._id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputHandler: eventTarget => dispatch(() => inputHandler(dispatch, eventTarget)),
        saveFileRp: (file, idObject) => dispatch(()=> saveFileRp(dispatch, file, idObject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRp)