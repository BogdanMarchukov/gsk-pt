import React from 'react'
import ToHome from "../../Components/ToHome/ToHome";
import TableData from "../../Components/TablData/TableData";
import classes from './RpListPage.module.css'
import FilterData from "../../Components/FilterData/FilterData";

type Props = {
    
}
const RpListPage = (props: Props) => {
    return (
        <div className={classes.wrapper}>
            <FilterData/>
            <TableData
                tableName={'title'}
                columnName={['1', '2', '3', '4', '5']}
                data={[[1,2,3,4,5]]}
            />

            <ToHome/>
        </div>
    )
}

export default RpListPage