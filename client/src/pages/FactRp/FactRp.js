import React, {useEffect} from 'react'
import NavBarMenu from "../../Components/NavBarMenu/NavBarMenu.tsx";
import {connect} from 'react-redux'
import classes from './FactRp.module.css'
import TableData from "../../Components/TablData/TableData.tsx";
import {
    funcDecrement,
    funcIncrement,
    localData,
    saveShooting,
    showGlobalData
} from "../../redux/actions/factRpActionsCreate";
import Loader from "../../Components/Loader/Loader";


const FactRp = ({
                    dataStore, title,
                    localData, localDataTable,
                    funcIncrement, funcDecrement,
                    saveShooting, id,
                    loading,
                    showGlobalData,
                    fact
                }) => {


    useEffect(() => {
        localData(dataStore, title)
    }, [dataStore, title, localData])

    return (
        <>
            {
                loading ?
                    <Loader loading={loading}/>
                    :
                    <div className={classes.fact}>
                        <NavBarMenu
                            btnName={["Главная", 'Репера', 'Рихтовка', 'Каталог_RP', 'Назад']}
                            linkTo={['/', '/rp','/edit-rp' ,'/rp-list',  '/options']}
                        />
                        <h1>{title}</h1>
                        <TableData
                            tableName={'Съемка на вашем устройстве'}
                            columnName={['номер Rp', 'проект', 'факт', 'дельта Н']}
                            edit={[2]}
                            data={localDataTable}
                            id={id}
                            title={title}
                            funcIncrement={funcIncrement}
                            funcDecrement={funcDecrement}
                            buttonHandler={saveShooting}
                        />

                        <hr/>
                        {showGlobalData(fact)}
                    </div>

            }

        </>
    )
}


function mapStateToProps(state) {

    return {
        title: state.objectListReducer.currentObject.title,
        localDataTable: state.factRpReducer.localDataTable,
        dataStore: state.objectListReducer.currentObject.rp,
        id: state.objectListReducer.currentObject._id,
        loading: state.objectListReducer.loading,
        fact: state.objectListReducer.currentObject.fact
    }
}

function mapDispatchToProps(dispatch) {
    return {
        localData: (dataStore, objName) => dispatch(() => localData(dispatch, dataStore, objName)),
        funcIncrement: (dataList, editColumn, index) => dispatch(() => funcIncrement(dispatch, dataList, editColumn, index)),
        funcDecrement: (dataList, editColumn, index) => dispatch(() => funcDecrement(dispatch, dataList, editColumn, index)),
        saveShooting: (data, id, title) => dispatch(() => saveShooting(dispatch, data, id, title)),
        showGlobalData: (fact) => dispatch(()=> showGlobalData(dispatch, fact))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FactRp)
