import React from 'react'
import classes from './AddObject.module.css'

const AddObject = ({openWindowObj}) => {

    return (
        <div className={`${classes.Flex} row`}>
            <div className={`${classes.margin} col l6`}>
                <div className="card light-blue darken-4">
                    <div className="card-content white-text">
                        <span className="card-title">Создание нового объекта</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Введите название" id="name" name="name" type="text"
                                       className="validate"/>
                                <label htmlFor="name">Название объекта</label>
                                <div className="file-field input-field">
                                    <div className="btn">
                                        <span>ПВО.txt</span>
                                        <input type="file"/>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text"/>
                                    </div>
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>RP.txt</span>
                                            <input type="file"/>
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className={`${classes.marginRight} btn yellow darken-4`}>Создать</button>
                        <button
                            className='btn grey lighten-1 black-text'
                            onClick={openWindowObj}
                        >Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddObject