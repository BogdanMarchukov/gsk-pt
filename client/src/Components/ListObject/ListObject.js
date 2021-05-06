import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import classes from './listObject.module.css'
import Loader from "../Loader/Loader";


const ListObject = ({fetchObject, update, loading, objectList, currentInfoObject}) => {
    useEffect(() => fetchObject(update), [update, fetchObject])

    const list = (objectList) => {
        let arr = []
        if (objectList.length) {
            objectList.map(item => {
                arr.push(
                    <Link
                        onClick={()=>currentInfoObject(item)}
                        key={item._id}
                        to='/options'
                        className={`col l3 s12 waves-effect waves-light btn-large light-green accent-3 grey-text text-darken-4 `}
                    >
                        {item.title}
                    </Link>
                )
                return true
            })
        }
        return arr
    }

    if (loading) {
        return (
            <Loader loading={loading}/>
        )
    } else {
        return (

            <div className={`${classes.listObj} row`}>
                {
                    list(objectList)
                }
            </div>
        )
    }

}

export default ListObject
