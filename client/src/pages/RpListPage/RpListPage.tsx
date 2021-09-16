import React from 'react'
import ToHome from "../../Components/ToHome/ToHome";
import TableData from "../../Components/TablData/TableData";
import classes from './RpListPage.module.css'
import FilterData from "../../Components/FilterData/FilterData";
import {connect} from "react-redux";
import {rpType} from "../../redux/reducers/objectListReducer";
import {filter} from "../../redux/actions/rpListActionCreater";
import {listData} from "../../redux/actions/rpListActionCreater";
import {rpListInputHandler} from "../../redux/actions/rpListActionCreater";

type Props = {
    checked: boolean[]
    title: string
    filter: filter
    listData: number[][]
    rpListInputHandler: (
        indexHandler: number,
        filter: filter,
        checked: boolean[],
        rp: Array<rpType>,
        listData: listData

    )=> void
    rp: Array<rpType>
}
const RpListPage = (props: Props) => {


    return (
        <div className={classes.wrapper}>
            <FilterData
                inputList={[

                    {
                        checkDefault: props.checked[0], inputHandler: () => {
                            props.rpListInputHandler(0, props.filter, props.checked, props.rp, props.listData)
                        }, inputName: 'PK'
                    },
                    {
                        checkDefault: props.checked[1], inputHandler: () => {
                            props.rpListInputHandler(1, props.filter, props.checked, props.rp, props.listData)
                        }, inputName: 'H-Пр.'
                    },
                    {
                        checkDefault: props.checked[2], inputHandler: () => {
                            props.rpListInputHandler(2, props.filter, props.checked, props.rp, props.listData)
                        }, inputName: 'H-Факт'
                    },
                    {
                        checkDefault: props.checked[3], inputHandler: () => {
                            props.rpListInputHandler(3, props.filter, props.checked, props.rp, props.listData)
                        }, inputName: 'Возвыш.'
                    },
                    {
                        checkDefault: props.checked[4], inputHandler: () => {
                            props.rpListInputHandler(4, props.filter, props.checked, props.rp, props.listData)
                        }, inputName: 'Домер'
                    }

                ]}
            />
            <TableData
                tableName={props.title}
                columnName={props.filter}
                data={props.listData}
            />

            <ToHome/>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        checked: state.rpListReducer.checked,
        title: state.objectListReducer.currentObject.title,
        filter: state.rpListReducer.filter,
        listData: state.rpListReducer.listData,
        rp: state.objectListReducer.currentObject.rp
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        rpListInputHandler: (
            indexHandler: number,
            filter: filter,
            checked: boolean[],
            rp: Array<rpType>,
            listData: listData
        )=> dispatch (()=> rpListInputHandler(dispatch, indexHandler, filter, checked, rp, listData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RpListPage)