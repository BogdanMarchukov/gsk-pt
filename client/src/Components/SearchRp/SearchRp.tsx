import React from 'react'
import classes from './SeatchRp.module.css'
import {Link} from "react-router-dom"
import {currentObjectType} from "../../redux/reducers/objectListReducer";

type Props = {
    searchInputHandler: (eventTarget: string, list: currentObjectType) => void
    buttonHandler: ()=> void
    list: currentObjectType
}
const SearchRp = (props: Props) => {

    return (
        <>
            <div className={classes.displayFlex}>
                <div className={`input-field ${classes.width}`}>
                    <input onChange={event => props.searchInputHandler(event.target.value, props.list)} id="last_name" type="number" className="validate"/>
                        <label htmlFor="last_name">номер Rp</label>
                </div>
                <Link onClick={()=> props.buttonHandler()} to={'#'} className="waves-effect waves-light btn-small">Найти</Link>
            </div>
        </>
    )
}

export default SearchRp