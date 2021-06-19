import React, {useEffect} from 'react'
import classes from "./EditRp.module.css"
import ToHome from "../../Components/ToHome/ToHome"
import {connect} from "react-redux"
import Search from "../../Components/Search/Search";
import WindowLoadingFile from "../../Components/WindowLoadingFile/WindowLoadingFile";
import {chekData, inputHandler, saveFileRp, submitHandler} from "../../redux/actions/editRpActionsCreater";
import Loader from "../../Components/Loader/Loader";
import Errors from "../../Components/Errors/Errors";


const EditRp = ({
                    dataArr, title, loading, inputHandler, saveFileRp, file, id, showModelRp, chekData,
                    error, errorMassage, submitHandler, toRp, fromRp
                }) => {

    useEffect(() => {
        chekData(['number', 'pk', 'distance', 'ugr', 'elevation', 'factH', 'Indent'], dataArr)
    }, [dataArr, chekData, title])

    return (
        <div className={classes.editWrapper}>
            <h1>{title}</h1>
            <p>Рихтовка</p>
            <Errors
                error={error}
                errorMassage={errorMassage}
            />
            {loading ?
                <Loader loading={loading}/>
                :
                <>
                    {showModelRp ?
                        <>
                            <WindowLoadingFile
                                title={'Отсутствуют данные Rp. Загрузить?'}
                                inputHandler={inputHandler}
                                submitHandler={saveFileRp}
                                data={file}
                                id={id}
                            />

                        </>
                        :
                        <>
                            <Search
                                inputHandler={inputHandler}
                                submitHandler={submitHandler}
                                toRp={toRp}
                                fromRp={fromRp}
                                rpLIst={dataArr}
                            />
                            <hr/>
                            <ToHome/>
                        </>
                    }

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
        dataArr: state.objectListReducer.currentObject.rp,
        error: state.homePageReducer.errors.errorState,
        errorMassage: state.homePageReducer.errors.errorMassage,
        toRp: state.editRpReducer.rpTo,
        fromRp: state.editRpReducer.rpFrom,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputHandler: (eventTarget, inputName) => dispatch(() => inputHandler(dispatch, eventTarget, inputName)),
        saveFileRp: (file, idObject) => dispatch(() => saveFileRp(dispatch, file, idObject)),
        chekData: (validateArr, dataArr) => dispatch(() => chekData(dispatch, validateArr, dataArr)),
        submitHandler: (toRp, fromRp, rpList) => dispatch(() => submitHandler(dispatch, toRp, fromRp, rpList))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditRp)