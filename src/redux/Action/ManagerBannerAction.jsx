import axios from "axios"
import { HeaderToken } from "../../Utils/headerToken"
import { toast } from "react-toastify";

export const MANAGE_BANNER_ACTION="MANAGE_BANNER_ACTION"
export const ADD_NEWMANAGE_BANNER="ADD_NEWMANAGE_BANNER"
export const ERROR_MESSASE="ERROR_MESSASE"
export const UPDATE_MANAGE_BANNER="UPDATE_MANAGE_BANNER"

export const ManageBannerAction = (page,countPerPage,search) => {
    return async (dispatch) => {
        axios.defaults.headers.get['Content-Type'] = 'multipart/form-data';
        await axios.get(`api/manage_banner/list`, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                 dispatch({ type: MANAGE_BANNER_ACTION, payload: res.data.data.banner_data.original});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const AddNewManageBanner = (userObj,navigate) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/manage_banner/create`,userObj, HeaderToken())
            .then((res) => {
                console.log(res, "res")
               // dispatch({ type: ADD_NEWMANAGE_BANNER, payload: res.data.data});
                if (res.data.success === false) {
                    toast(res.data.response_message);
                }
                if(Object.keys(res.data.errors).length>0){
                    dispatch({type:ERROR_MESSASE,payload:res.data.errors})
                }
                if (res.data.success === true) {
                    toast(res.data.response_message);
                    dispatch({ type: ADD_NEWMANAGE_BANNER, payload: res.data.data});
                    console.log(res.data.response_message, "navigate")
                    navigate(`${process.env.PUBLIC_URL}/manage-banner`)
                }
                //  dispatch({ type: ADD_NEW_CATALOG, payload: res.data.data});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const UpdateManageBannerApi=(userObj,navigate)=>{
    return async(dispatch)=>{
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/manage_banner/update`,userObj, HeaderToken())
        .then((res) => {
            console.log(res.data.data.original, "res")
            if (res.data.success === false) {
                toast(res.data.response_message);
            }
            if (res.data.success === true) {
                toast(res.data.response_message);
                dispatch({ type: UPDATE_MANAGE_BANNER, payload: res.data.data});
                console.log(res.data.response_message, "navigate")
                navigate(`${process.env.PUBLIC_URL}/manage-banner`)
            }
            // dispatch({ type: UPDATE_CATEGORY, payload: res.data.data});
        }).catch(error => {
            console.log(error);
        })
    }
}