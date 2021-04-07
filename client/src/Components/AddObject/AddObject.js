import React from 'react'
import classes from './AddObject.module.css'
import {Link} from "react-router-dom";

const AddObject = () => {
    return (
        <div className={classes.Flex}>
            <div className={`row`}>
                <div className="col">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Создание нового объекта</span>
                        </div>
                        <div className="card-action">
                            <form action="#">
                                <div className="file-field input-field">
                                    <div className="btn">
                                        <span>ПВО.txt</span>
                                        <input type="file"/>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text"/>
                                    </div>
                                    <div className="btn">
                                        <span>RP.txt</span>
                                        <input type="file"/>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/' className="btn-floating btn-large waves-effect waves-light red"><i
                className="material-icons">add</i></Link>
        </div>
    )
}

export default AddObject