import axios from "axios"
import { HeaderToken } from "../../Utils/headerToken"
import { toast } from "react-toastify";

export const OPTION_ACTION = "OPTION_ACTION"
export const ADD_OPTION_ACTION = "ADD_OPTION_ACTION"
export const OPTION_ERROR = "OPTION_ERROR"
export const UPDATE_OPTION = "UPDATE_OPTION"

export const OptionAction = (page,countPerPage,search) => {
    return async (dispatch) => {
        axios.defaults.headers.get['Content-Type'] = 'multipart/form-data';
        await axios.get(`api/options/list`, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                 dispatch({ type: OPTION_ACTION, payload: res.data.data});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const AddOptionAction = (userObj,navigate) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/options/create`,userObj, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                if (res.data.success === false) {
                    toast(res.data.response_message);
                }
                if(Object.keys(res.data.errors).length>0){
                    dispatch({type:OPTION_ERROR,payload:res.data.errors})
                }
                if (res.data.success === true) {
                    toast(res.data.response_message);
                    dispatch({ type: ADD_OPTION_ACTION, payload: res.data.data});
                    console.log(res.data.response_message, "navigate")
                    navigate(`${process.env.PUBLIC_URL}/option`)
                }
                //  dispatch({ type: ADD_NEW_CATALOG, payload: res.data.data});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const UpdateOptionApi=(userObj,navigate)=>{
    return async(dispatch)=>{
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/options/update`,userObj, HeaderToken())
        .then((res) => {
            console.log(res.data.data.original, "res")
            if (res.data.success === false) {
                toast(res.data.response_message);
            }
            if (res.data.success === true) {
                toast(res.data.response_message);
                dispatch({ type: UPDATE_OPTION, payload: res.data.data});
                console.log(res.data.response_message, "navigate")
                navigate(`${process.env.PUBLIC_URL}/option`)
            }
            // dispatch({ type: UPDATE_CATEGORY, payload: res.data.data});
        }).catch(error => {
            console.log(error);
        })
    }
}