import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected=(props)=>{
    let Cmp=props.Cmp
    const navigate=useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem('token')){
            navigate(`${process.env.PUBLIC_URL}/login`)
        }
    })
    return(
        <Fragment>
            <Cmp/>
        </Fragment>
    )
}

export default Protected