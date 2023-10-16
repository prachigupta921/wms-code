import { useEffect, useState } from "react";
import { GetDetailsByAttribute } from "../api/axiosRequest";

export default(props)=>{
    const [detailById,setDetailById]=useState({});
    const GetDataByAttribute=(requestId)=>{
        console.log(requestId,"reee")
            return GetDetailsByAttribute(requestId).then((res)=>{
                console.log("Response-------------",res.data.data[0])
                setDetailById(res.data.data[0]);
            });
    };

    useEffect(()=>{
        GetDataByAttribute(props)
    },[])
    return [detailById]
}