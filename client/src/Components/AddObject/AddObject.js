import React from 'react'
import classes from './AddObject.module.css'

const AddObject = (props) => {

    return (
        <div className={`${classes.Flex} row`}>
            <div className={`${classes.margin} col l6`}>
                <div className="card light-blue darken-4">
                    <div className="card-content white-text">
                        <span className="card-title">Создание нового объекта</span>
                        <div>
                            <div className="input-field">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="validate"
                                    onChange={(event) => props.inputNameObjectHandler(event)}
                                />
                                <label htmlFor="name">Название объекта</label>
                                <div className="file-field input-field">
                                    <div className="btn">
                                        <span>ПВО.CSV</span>
                                        <input
                                            type="file"
                                            onChange={(event) => props.inputFilePvoHandler(event)}
                                        />

                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text"/>
                                    </div>
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>RP.CSV</span>
                                            <input
                                                type="file"
                                                onChange={(event) => props.inputFileRpHandler(event)}
                                            />
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
                        <button
                            className={`${classes.marginRight} btn yellow darken-4`}
                            onClick={()=> props.submitFormCreateObject(props.content)}
                        >
                            Создать
                        </button>
                        <button
                            className='btn grey lighten-1 black-text'
                            onClick={props.openWindowObj}
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddObject