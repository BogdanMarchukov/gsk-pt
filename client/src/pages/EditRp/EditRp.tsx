import React, {useEffect} from 'react'
import classes from "./EditRp.module.css"
import ToHome from "../../Components/ToHome/ToHome"
import {connect} from "react-redux"
import Search from "../../Components/Search/Search";
import WindowLoadingFile from "../../Components/WindowLoadingFile/WindowLoadingFile";
import {
    calculationList,
    chekData,
    deltaComputed,
    inputHandler, mayEvent,
    saveFileRp,
    submitHandler
} from "../../redux/actions/editRpActionsCreater";
import Loader from "../../Components/Loader/Loader";
import Errors from "../../Components/Errors/Errors";
import {rpType} from "../../redux/reducers/objectListReducer";
import {InputList} from "../../Components/InputList/InputList";
import {sortRpObjectType} from "../../redux/reducers/editRpReducer";
import CalculationsListEditRp from "../../Components/СalculationsListEditRp/CalculationsListEditRp";

type EditRpType = {
    dataArr: rpType
    title: string
    loading: boolean
    saveFileRp: any
    file: any
    id: any
    showModelRp: any
    chekData: any
    error: any
    errorMassage: any
    submitHandler: any
    toRp: any
    fromRp: any
    sortRp: Array<sortRpObjectType> | null
    deltaH_EditRp: Array<number>
    inputValue: Array<number>
    deltaComputed: (event: string, sortRp: Array<sortRpObjectType>, deltaH: Array<number>, inputValue: Array<number>, index: number, deltaH_EditRp: Array<number>) => void
    inputHandler: (eventTarget: mayEvent, inputName: string) => boolean
    calculationList: (sortRp: Array<sortRpObjectType>, inputValue: Array<number>) => void
    calculationDataList: Array<number>[] | null

}

const EditRp: React.FC<EditRpType> = ({
                                          dataArr,
                                          title,
                                          loading,
                                          inputHandler,
                                          saveFileRp,
                                          file,
                                          id,
                                          showModelRp,
                                          chekData,
                                          error,
                                          errorMassage,
                                          submitHandler,
                                          toRp,
                                          fromRp,
                                          sortRp,
                                          deltaH_EditRp,
                                          inputValue,
                                          deltaComputed,
                                          calculationList,
                                          calculationDataList

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
                                deltaComputed={deltaComputed}
                                inputValue={inputValue}
                                calculationList={calculationList}
                            />
                            <CalculationsListEditRp
                                columnName={['№ПП', 'Б.P', 'Д.Р', 'ок']}
                                calculationDataList={calculationDataList}

                            />
                            <ToHome/>
                        </>
                    }

                </>
            }

        </div>
    )

}

function mapStateToProps(state: any) {
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
        deltaH_EditRp: state.editRpReducer.deltaH_EditRp,
        inputValue: state.editRpReducer.inputValue,
        calculationDataList: state.editRpReducer.calculationDataList
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        saveFileRp: (file: any, idObject: any) => dispatch(() => saveFileRp(dispatch, file, idObject)),
        chekData: (validateArr: any, dataArr: any) => dispatch(() => chekData(dispatch, validateArr, dataArr)),
        submitHandler: (toRp: any, fromRp: any, rpList: any) => dispatch(() => submitHandler(dispatch, toRp, fromRp, rpList)),
        deltaComputed: (event: string, sortRp: Array<sortRpObjectType>, deltaH: Array<number>, inputValue: Array<number>, index: number, deltaH_EditRp: Array<number>) => dispatch(() => deltaComputed(dispatch, event, sortRp, deltaH, inputValue, index, deltaH_EditRp)),
        inputHandler: (eventTarget: mayEvent, inputName: string) => dispatch(() => inputHandler(dispatch, eventTarget, inputName)),
        calculationList: (sortRp: Array<sortRpObjectType>, inputValue: Array<number>) => dispatch(() => calculationList(dispatch, sortRp, inputValue))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditRp)