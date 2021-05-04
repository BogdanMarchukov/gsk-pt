import React from 'react'
import classes from './Loader.module.css'

const Loader = ({loading}) => {
    if (loading) {
        return (
            <div className={classes.DisFlex}>
                <div className="preloader-wrapper active">
                    <div className="spinner-layer spinner-red-only">
                        <div className="circle-clipper left">
                            <div className="circle"/>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"/>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else return null

}

export default Loader