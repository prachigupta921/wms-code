import { useEffect, useState } from "react";
import {GetDetailsById} from "../api/axiosRequest"


export default(props)=>{
    const [detailById,setDetailById]=useState({});
    const GetDetailsByHooks=(requestId)=>{
        console.log(requestId,"reee")
            return GetDetailsById(requestId).then((res)=>{
                console.log("Response-------------",res.data.data)
                setDetailById(res.data.data);
            });
    };

    useEffect(()=>{
        GetDetailsByHooks(props)
    },[])
    return [detailById]
}

