import React from 'react'
import ToHome from "../../Components/ToHome/ToHome";
import TableData from "../../Components/TablData/TableData";

type Props = {
    
}
const RpListPage = (props: Props) => {
    return (
        <div>
            <h1>Hello RpListPage</h1>
            <TableData
                tableName={'test'}
                columnName={['1', '2', '3', '4', '5']}
                data={[[1,2,3,4,5]]}
            />
            <ToHome/>
        </div>
    )
}

export default RpListPage