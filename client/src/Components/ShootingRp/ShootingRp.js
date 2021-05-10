import React from 'react'
import CalculationGi from "../СalculationGi/CalculationGi";
import classes from "./ShootingRp.module.css"


const ShootingRp = (props) => {
    return (
        <div className={classes.ShootingRp}>
            <CalculationGi
                calculationGi={props.calculationGi}
                pzFrom={props.pzFrom}
                keyH={props.keyH}
                pzFromGi={props.pzFromGi}
                exactFrom={props.exactFrom}
                calculationRpList={props.calculationRpList}
                rpList={props.rpList}
                averageGi={props.averageGi}
                exactBefore={props.exactBefore}
                countdownRp={props.countdownRp}
                itemClass={props.itemClass}
                pzBeforeGi={props.pzBeforeGi}
                pzBefore={props.pzBefore}
                activeTab={props.activeTab}
            />
            <hr/>
            <div className={classes.content}>
                {props.showList(props.sortRp)}
            </div>

        </div>
    )
}

export default ShootingRp