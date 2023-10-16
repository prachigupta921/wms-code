import axios from "axios"
import { HeaderToken } from "../../Utils/headerToken"
import { toast } from "react-toastify";

export const BRAND_ACTION="BRAND_ACTION"
export const ADD_NEW_BRAND="ADD_NEW_BRAND"
export const BRAND_ERROR="BRAND_ERROR"
export const EDIT_BRAND="EDIT_BRAND"
export const UPDATE_BRAND="UPDATE_BRAND"

export const BrandAction = (page,countPerPage,search) => {
    return async (dispatch) => {
        axios.defaults.headers.get['Content-Type'] = 'multipart/form-data';
        await axios.get(`api/brand/list`, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                 dispatch({ type: BRAND_ACTION, payload: res.data.data.brand_data.original});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const AddNewBrand = (userObj,navigate) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/brand/create`,userObj, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                if (res.data.success === false) {
                    toast(res.data.response_message);
                }
                if(Object.keys(res.data.errors).length>0){
                    dispatch({type:BRAND_ERROR,payload:res.data.errors})
                }
                if (res.data.success === true) {
                    toast(res.data.response_message);
                    dispatch({ type: ADD_NEW_BRAND, payload: res.data.data});
                    console.log(res.data.response_message, "navigate")
                    navigate(`${process.env.PUBLIC_URL}/brand`)
                }
                // dispatch({ type: ADD_NEW_BRAND, payload: res.data.data});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const UpdateBrandApi=(userObj,navigate)=>{
    return async(dispatch)=>{
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/brand/update`,userObj, HeaderToken())
        .then((res) => {
            console.log(res.data.data.original, "res")
            if (res.data.success === false) {
                toast(res.data.response_message);
            }
            if (res.data.success === true) {
                toast(res.data.response_message);
                dispatch({ type: UPDATE_BRAND, payload: res.data.data});
                console.log(res.data.response_message, "navigate")
                navigate(`${process.env.PUBLIC_URL}/brand`)
            }
            // dispatch({ type: UPDATE_CATEGORY, payload: res.data.data});
        }).catch(error => {
            console.log(error);
        })
    }
}