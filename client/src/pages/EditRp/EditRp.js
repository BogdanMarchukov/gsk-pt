import React, {useEffect} from 'react'
import classes from "./EditRp.module.css"
import ToHome from "../../Components/ToHome/ToHome"
import {connect} from "react-redux"
import Search from "../../Components/Search/Search";
import WindowLoadingFile from "../../Components/WindowLoadingFile/WindowLoadingFile";
import {chekData, inputHandler, saveFileRp} from "../../redux/actions/editRpActionsCreater";
import Loader from "../../Components/Loader/Loader";


const EditRp = ({dataArr, title, loading, inputHandler, saveFileRp, file, id, showModelRp, chekData}) => {

    useEffect(()=> {
        chekData(['number', 'pk', 'distance', 'ugr', 'elevation', 'factH', 'Indent'], dataArr)
    }, [dataArr, chekData, title])

    return (
        <div className={classes.editWrapper}>
            <h1>{title}</h1>
            <p>Рихтовка</p>
            {loading ?
                <Loader loading={loading}/>
                :
                <>

                    <WindowLoadingFile
                        title={'Отсутствуют данные Rp. Загрузить?'}
                        inputHandler={inputHandler}
                        submitHandler={saveFileRp}
                        data={file}
                        id={id}
                        show={showModelRp}
                    />
                    <Search/>
                    <hr/>
                    <ToHome/>
                </>
            }

        </div>
    )

}

function mapStateToProps(state) {
    return {
        title: state.objectListReducer.currentObject.title,
        file: state.editRpReducer.rpFile,
        id: state.objectListReducer.currentObject._id,
        loading: state.objectListReducer.loading,
        showModelRp: state.editRpReducer.showModelRp,
        dataArr: state.objectListReducer.currentObject.rp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputHandler: eventTarget => dispatch(() => inputHandler(dispatch, eventTarget)),
        saveFileRp: (file, idObject) => dispatch(() => saveFileRp(dispatch, file, idObject)),
        chekData: (validateArr, dataArr) => dispatch(() => chekData(dispatch, validateArr, dataArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRp)