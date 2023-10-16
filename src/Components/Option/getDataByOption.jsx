import { useEffect, useState } from "react";
import { GetDetailsByOption } from "../api/axiosRequest";

export default(props)=>{
    const [detailById,setDetailById]=useState({});
    const GetDataByOption=(requestId)=>{
        console.log(requestId,"reee")
            return GetDetailsByOption(requestId).then((res)=>{
                console.log("Response-------------",res.data.data[0])
                setDetailById(res.data.data[0]);
            });
    };

    useEffect(()=>{
        GetDataByOption(props)
    },[])
    return [detailById]
}