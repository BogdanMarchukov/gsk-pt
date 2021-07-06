import React, {useEffect} from 'react'
import classes from "./EditRp.module.css"
import ToHome from "../../Components/ToHome/ToHome"
import {connect} from "react-redux"
import Search from "../../Components/Search/Search";
import WindowLoadingFile from "../../Components/WindowLoadingFile/WindowLoadingFile";
import {chekData, inputHandler, saveFileRp, submitHandler} from "../../redux/actions/editRpActionsCreater";
import Loader from "../../Components/Loader/Loader";
import Errors from "../../Components/Errors/Errors";
import {rpType} from "../../redux/reducers/objectListReducer";
import {InputList} from "../../Components/InputList/InputList";
import {sortRpObjectType} from "../../redux/reducers/editRpReducer";

type EditRpType = {
    dataArr : rpType
    title : string
    loading : boolean
    inputHandler : any
    saveFileRp : any
    file : any
    id : any
    showModelRp : any
    chekData : any
    error : any
    errorMassage : any
    submitHandler : any
    toRp : any
    fromRp : any
    sortRp: Array<sortRpObjectType> | null
    deltaH_EditRp: Array<number>
}

const EditRp: React.FC<EditRpType> = ({
                    dataArr, title, loading, inputHandler, saveFileRp, file, id, showModelRp, chekData,
                    error, errorMassage, submitHandler, toRp, fromRp, sortRp, deltaH_EditRp
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
                            <InputList
                                sortRp={sortRp}
                                deltaH_EditRp={deltaH_EditRp}
                            />
                            <ToHome/>
                        </>
                    }

                </>
            }

        </div>
    )

}

function mapStateToProps(state: any)  {
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
        sortRp: state.editRpReducer.sortRp,
        deltaH_EditRp: state.editRpReducer.deltaH_EditRp
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        inputHandler: (eventTarget: any, inputName: any) => dispatch(() => inputHandler(dispatch, eventTarget, inputName)),
        saveFileRp: (file: any, idObject: any) => dispatch(() => saveFileRp(dispatch, file, idObject)),
        chekData: (validateArr: any, dataArr: any) => dispatch(() => chekData(dispatch, validateArr, dataArr)),
        submitHandler: (toRp: any, fromRp: any, rpList: any) => dispatch(() => submitHandler(dispatch, toRp, fromRp, rpList))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(EditRp)