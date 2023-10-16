import axios from "axios"
import { HeaderToken } from "../../Utils/headerToken"
import { toast } from "react-toastify";


export const ATTRIBUTE_ACTION = "ATTRIBUTE_ACTION"
export const ADD_ATTRIBUTE_ACTION = "ADD_ATTRIBUTE_ACTION"
export const ATTRIBUTE_ERROR = "ATTRIBUTE_ERROR"
export const UPDATE_ATTRIBUTE = "UPDATE_ATTRIBUTE"

export const AttributeAction = (page,countPerPage,search) => {
    return async (dispatch) => {
        axios.defaults.headers.get['Content-Type'] = 'multipart/form-data';
        await axios.get(`api/attribute/list`, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                 dispatch({ type: ATTRIBUTE_ACTION, payload: res.data.data.attribute_data.original});
                }).catch(error => {
                console.log(error);
            })
    }
}

export const AddAttributeAction = (userObj,navigate) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/attribute/create`,userObj, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                if (res.data.success === false) {
                    toast(res.data.response_message);
                }
                if(Object.keys(res.data.errors).length>0){
                    dispatch({type:ATTRIBUTE_ERROR,payload:res.data.errors})
                }
                if (res.data.success === true) {
                    toast(res.data.response_message);
                    dispatch({ type: ADD_ATTRIBUTE_ACTION, payload: res.data.data});
                    console.log(res.data.response_message, "navigate")
                    navigate(`${process.env.PUBLIC_URL}/attribute`)
                }
                //  dispatch({ type: ADD_NEW_CATALOG, payload: res.data.data});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const UpdateAttributeApi=(userObj,navigate)=>{
    return async(dispatch)=>{
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/attribute/update`,userObj, HeaderToken())
        .then((res) => {
            console.log(res.data.data.original, "res")
            if (res.data.success === false) {
                toast(res.data.response_message);
            }
            if (res.data.success === true) {
                toast(res.data.response_message);
                dispatch({ type: UPDATE_ATTRIBUTE, payload: res.data.data});
                console.log(res.data.response_message, "navigate")
                navigate(`${process.env.PUBLIC_URL}/attribute`)
            }
            // dispatch({ type: UPDATE_CATEGORY, payload: res.data.data});
        }).catch(error => {
            console.log(error);
        })
    }
}