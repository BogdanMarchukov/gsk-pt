import React from 'react'
import {Link} from "react-router-dom";

const RpInfo = () => {

    return (
        <div>
            <Link
                to={'/'}
                className="waves-effect blue accent-3 btn-large"
            >
                <i
                    className="material-icons left"
                >
                    gps_fixed
                </i>
                    Репера
            </Link>
        </div>
    )
}

export default RpInfo