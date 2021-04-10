import React, {useEffect} from 'react'
import {toast} from 'materialize-css'

const Errors = (props) => {

    useEffect(()=>{
        if (props.error) {
            toast({html: props.errorMassage})
        }
    }, [props.error, props.errorMassage])

   return (
       <>
       </>
   )

}

export default Errors