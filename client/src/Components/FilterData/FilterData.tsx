import React from 'react'
import classes from './FilterData.module.css'

type Props = {

}
const FilterData = (props: Props) => {
    return (
        <div className={classes.flex}>
            <p>
                <label>
                    <input type="checkbox" className="filled-in" />
                    <span>Filled in</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" className="filled-in" />
                    <span>Filled in</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" className="filled-in" />
                    <span>Filled in</span>
                </label>
            </p>
        </div>
    )
}

export default FilterData
