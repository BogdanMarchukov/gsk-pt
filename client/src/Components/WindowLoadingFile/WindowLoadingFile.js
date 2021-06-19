import React from 'react'
import classes from './WindowLoadingFile.module.css'
import {Link} from "react-router-dom";

const WindowLoadingFile = (props) => {
       return (
           <div className={classes.wrapper}>
               <h1>{props.title}</h1>
               <div className={`file-field input-field ${classes.inputWrapper}`}>
                   <div className="btn">
                       <span>Rp-проект/факт</span>
                       <input
                           type="file"
                           onChange={(event)=> props.inputHandler(event, "formSaveFile")}

                       />
                   </div>
                   <div className="file-path-wrapper">
                       <input className="file-path validate" type="text"/>
                   </div>
               </div>
               <div className={classes.btnBlock}>
                   <Link
                       to={'#'}
                       className="waves-effect waves-light btn"
                       onClick={()=> props.submitHandler(props.data, props.id)}
                   >
                       Сохранить
                   </Link>
                   <Link to={'#'} className="waves-effect deep-purple darken-4 btn">Отмена</Link>
               </div>
           </div>
       )

}

export default WindowLoadingFile