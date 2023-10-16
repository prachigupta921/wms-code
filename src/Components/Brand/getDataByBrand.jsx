import { useEffect, useState } from "react";
import { GetDetailsByBrand } from "../api/axiosRequest";

export default(props)=>{
    const [detailById,setDetailById]=useState({});
    const GetDataByBrand=(requestId)=>{
        console.log(requestId,"reee")
            return GetDetailsByBrand(requestId).then((res)=>{
                console.log("Response-------------",res.data.data[0])
                setDetailById(res.data.data[0]);
            });
    };

    useEffect(()=>{
        GetDataByBrand(props)
    },[])
    return [detailById]
}