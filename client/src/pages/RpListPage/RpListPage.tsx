import React from 'react'
import ToHome from "../../Components/ToHome/ToHome";
import TableData from "../../Components/TablData/TableData";
import classes from './RpListPage.module.css'
import FilterData from "../../Components/FilterData/FilterData";
import {connect} from "react-redux";

type Props = {
    checked: boolean[]
}
const RpListPage = (props: Props) => {
    return (
        <div className={classes.wrapper}>
            <FilterData
                inputList={[
                    {
                        checkDefault: props.checked[0], inputHandler: () => {
                        }, inputName: '№ Rp'
                    },
                    {
                        checkDefault: props.checked[1], inputHandler: () => {
                        }, inputName: 'PK'
                    },
                    {
                        checkDefault: props.checked[2], inputHandler: () => {
                        }, inputName: 'H-Пр.'
                    },
                    {
                        checkDefault: props.checked[3], inputHandler: () => {
                        }, inputName: 'H-Факт'
                    },
                    {
                        checkDefault: props.checked[4], inputHandler: () => {
                        }, inputName: 'Возвыш.'
                    },
                    {
                        checkDefault: props.checked[5], inputHandler: () => {
                        }, inputName: 'Домер'
                    }

                ]}
            />
            <TableData
                tableName={'title'}
                columnName={['1', '2', '3', '4', '5']}
                data={[[1,2,3,4,5]]}
            />

            <ToHome/>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        checked: state.rpListReducer.checked
    }
}

function mapDispatchToProps(dispatch: any) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(RpListPage)