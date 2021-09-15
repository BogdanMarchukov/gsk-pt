import React from 'react'
import ToHome from "../../Components/ToHome/ToHome";
import TableData from "../../Components/TablData/TableData";
import classes from './RpListPage.module.css'
import FilterData from "../../Components/FilterData/FilterData";
import {connect} from "react-redux";

type Props = {
    checked: boolean[]
    title: string
    filter: string[]
    listData: number[][]
}
const RpListPage = (props: Props) => {
    return (
        <div className={classes.wrapper}>
            <FilterData
                inputList={[

                    {
                        checkDefault: props.checked[0], inputHandler: () => {
                        }, inputName: 'PK'
                    },
                    {
                        checkDefault: props.checked[1], inputHandler: () => {
                        }, inputName: 'H-Пр.'
                    },
                    {
                        checkDefault: props.checked[2], inputHandler: () => {
                        }, inputName: 'H-Факт'
                    },
                    {
                        checkDefault: props.checked[3], inputHandler: () => {
                        }, inputName: 'Возвыш.'
                    },
                    {
                        checkDefault: props.checked[4], inputHandler: () => {
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
        listData: state.rpListReducer.listData
    }
}

function mapDispatchToProps(dispatch: any) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(RpListPage)