import { useEffect, useState } from "react";
//import { GetDetailsByCatalogBanner } from "../api/axiosRequest";
import { GetDetailsByCustomer } from "../api/axiosRequest";

export default(props)=>{
    const [detailById,setDetailById]=useState({});
    const GetDetailsByHooksCustomer=(requestId)=>{
        console.log(requestId,"reee")
            return GetDetailsByCustomer(requestId).then((res)=>{
                console.log("Response-------------",res.data.data[0])
                setDetailById(res.data.data[0]);
            });
    };

    useEffect(()=>{
        GetDetailsByHooksCustomer(props)
    },[])
    return [detailById]
}