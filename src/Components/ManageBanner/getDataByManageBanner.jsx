import { useEffect, useState } from "react";
import {GetDetailsByManageBanner} from "../api/axiosRequest"


export default(props)=>{
    const [detailById,setDetailById]=useState({});
    const GetDataByManageBanner=(requestId)=>{
        console.log(requestId,"reee")
            return GetDetailsByManageBanner(requestId).then((res)=>{
                console.log("Response-------------",res.data.data[0])
                setDetailById(res.data.data[0]);
            });
    };

    useEffect(()=>{
        GetDataByManageBanner(props)
    },[])
    return [detailById]
}