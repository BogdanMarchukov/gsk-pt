import React, {useEffect} from 'react'
import NavBarMenu from "../../Components/NavBarMenu/NavBarMenu";
import {connect} from 'react-redux'
import classes from './FactRp.module.css'
import TableData from "../../Components/TablData/TableData";
import {funcDecrement, funcIncrement, localData} from "../../redux/actions/factRpActionsCreate";


const FactRp = ({dataStore, title, localData,localDataTable, funcIncrement,funcDecrement  }) => {


    useEffect(() => {
        localData(dataStore, title)
    }, [dataStore, title, localData])

    return (
        <div className={classes.fact}>
            <NavBarMenu
                btnName={["Главная", 'Репера', 'Рихтовка', "Назад"]}
                linkTo={['/', '/rp', '/', '/options']}
            />
            <h1>{title}</h1>
            <TableData
                tableName={'Съемка на вашем устройстве'}
                columnName={['номер Rp','проект', 'факт', 'дельта Н']}
                edit={[2]}
                data={localDataTable}
                funcIncrement={funcIncrement}
                funcDecrement={funcDecrement}
            />
        </div>
    )
}

function mapStateToProps(state) {

    return {
        title: state.objectListReducer.currentObject.title,
        localDataTable: state.factRpReducer.localDataTable,
        dataStore: state.objectListReducer.currentObject.rp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        localData: (dataStore, objName) => dispatch(() => localData(dispatch, dataStore, objName)),
        funcIncrement: (dataList, editColumn, index) => dispatch(()=> funcIncrement(dispatch, dataList, editColumn, index)),
        funcDecrement: (dataList, editColumn, index) => dispatch(()=> funcDecrement(dispatch, dataList, editColumn, index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FactRp)
