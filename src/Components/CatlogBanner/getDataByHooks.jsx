import { useEffect, useState } from "react";
import { GetDetailsByCatalogBanner } from "../api/axiosRequest";

export default(props)=>{
    const [detailById,setDetailById]=useState({});
    const GetDetailsByHooksCatalog=(requestId)=>{
        console.log(requestId,"reee")
            return GetDetailsByCatalogBanner(requestId).then((res)=>{
                console.log("Response-------------",res.data.data[0])
                setDetailById(res.data.data[0]);
            });
    };

    useEffect(()=>{
        GetDetailsByHooksCatalog(props)
    },[])
    return [detailById]
}