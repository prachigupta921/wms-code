import axios from "axios";
import { HeaderToken } from "../../Utils/headerToken";

export async function AxiosRequest(url,method,headers,params){
    return params
    ? axios({
        url:url,
        method:method,
        headers:headers,
        data:params,
       
    })
    : axios({
        url:url,
        method:method,
        headers:headers,
        data:{},
        
    })
}


const GetDetailsById=(id)=>{
    const data={
        category_id:id
    }
    let token=sessionStorage.getItem('token')
    const headers={
        'Authorization':'Bearer '+token,
    };
    return AxiosRequest(
        `api/category/edit`,
        'POST',
        headers,
        data
    )
}

const GetDetailsByCatalogBanner=(id)=>{
    const data={
        banner_id:id
    }
    let token=sessionStorage.getItem('token')
    const headers={
        'Authorization':'Bearer '+token,
    };
    return AxiosRequest(
        `api/catalog_banner/edit`,
        'POST',
        headers,
        data
    )
}

const GetDetailsByManageBanner=(id)=>{
    const data={
        banner_id:id
    }
    let token=sessionStorage.getItem('token')
    const headers={
        'Authorization':'Bearer '+token,
    };
    return AxiosRequest(
        `api/manage_banner/edit`,
        'POST',
        headers,
        data
    )
}

const GetDetailsByOption=(id)=>{
    const data={
        option_id:id
    }
    let token=sessionStorage.getItem('token')
    const headers={
        'Authorization':'Bearer '+token,
    };
    return AxiosRequest(
        `api/options/edit`,
        'POST',
        headers,
        data
    )
}

const GetDetailsByAttribute=(id)=>{
    const data={
        attribute_id:id
    }
    let token=sessionStorage.getItem('token')
    const headers={
        'Authorization':'Bearer '+token,
    };
    return AxiosRequest(
        `api/attribute/edit`,
        'POST',
        headers,
        data
    )
}

const GetDetailsByBrand=(id)=>{
    const data={
        brand_id:id
    }
    let token=sessionStorage.getItem('token')
    const headers={
        'Authorization':'Bearer '+token,
    };
    return AxiosRequest(
        `api/brand/edit`,
        'POST',
        headers,
        data
    )
}

const GetDetailsByCustomer=(id)=>{
    const data={
        id:id
    }
    let token=sessionStorage.getItem('token')
    const headers={
        'Authorization':'Bearer '+token,
    };
    return AxiosRequest(
        `api/customer/edit`,
        'POST',
        headers,
        data
    )
}

export {GetDetailsById,GetDetailsByCatalogBanner,GetDetailsByManageBanner,
    GetDetailsByOption,GetDetailsByAttribute,GetDetailsByBrand,GetDetailsByCustomer}