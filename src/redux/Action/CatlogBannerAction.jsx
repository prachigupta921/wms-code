import axios from "axios"
import { HeaderToken } from "../../Utils/headerToken"
import { toast } from "react-toastify";

export const CATLOG_BANNER_ACTION="CATLOG_BANNER_ACTION"
export const ADD_NEW_CATALOG="ADD_NEW_CATALOG"
export const CATALOG_ERROR="CATALOG_ERROR"
export const EDIT_CATALOG_BANNER="EDIT_CATALOG_BANNER"
export const UPDATE_CATALOG_BANNER="UPDATE_CATALOG_BANNER"

export const CatlogBannerAction = (page,countPerPage,search) => {
    return async (dispatch) => {
        axios.defaults.headers.get['Content-Type'] = 'multipart/form-data';
        await axios.get(`api/catalog_banner/list`, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                 dispatch({ type: CATLOG_BANNER_ACTION, payload: res.data.data.catalog_data.original});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const AddNewCatalog = (userObj,navigate) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/catalog_banner/create`,userObj, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                if (res.data.success === false) {
                    toast(res.data.response_message);
                }
                if(Object.keys(res.data.errors).length>0){
                    dispatch({type:CATALOG_ERROR,payload:res.data.errors})
                }
                if (res.data.success === true) {
                    toast(res.data.response_message);
                    dispatch({ type: ADD_NEW_CATALOG, payload: res.data.data});
                    console.log(res.data.response_message, "navigate")
                    navigate(`${process.env.PUBLIC_URL}/catlog-banner`)
                }
                //  dispatch({ type: ADD_NEW_CATALOG, payload: res.data.data});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const UpdateCaltlogBannerApi=(userObj,navigate)=>{
    return async(dispatch)=>{
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/catalog_banner/update`,userObj, HeaderToken())
        .then((res) => {
            console.log(res.data.data.original, "res")
            if (res.data.success === false) {
                toast(res.data.response_message);
            }
            if (res.data.success === true) {
                toast(res.data.response_message);
                dispatch({ type: UPDATE_CATALOG_BANNER, payload: res.data.data});
                console.log(res.data.response_message, "navigate")
                navigate(`${process.env.PUBLIC_URL}/catlog-banner`)
            }
            // dispatch({ type: UPDATE_CATEGORY, payload: res.data.data});
        }).catch(error => {
            console.log(error);
        })
    }
}