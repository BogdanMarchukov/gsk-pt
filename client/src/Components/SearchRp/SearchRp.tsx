import React from 'react'
import classes from './SeatchRp.module.css'
import {Link} from "react-router-dom"

type Props = {
   // inputHandler: () => void
    searchInputHandler: (eventTarget: string) => void
}
const SearchRp = (props: Props) => {

    return (
        <>
            <div className={classes.displayFlex}>
                <div className="input-field">
                    <input onChange={event => props.searchInputHandler(event.target.value)} id="last_name" type="number" className="validate"/>
                        <label htmlFor="last_name">номер Rp</label>
                </div>
                <Link to={'#'} className="waves-effect waves-light btn-small">Найти</Link>
            </div>
        </>
    )
}

export default SearchRp