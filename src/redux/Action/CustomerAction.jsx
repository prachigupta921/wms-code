import axios from "axios"
import { HeaderToken } from "../../Utils/headerToken"
import { toast } from "react-toastify";

export const CUSTOMER_ACTION="CUSTOMER_ACTION"
export const ADD_NEW_CUSTOMER="ADD_NEW_CUSTOMER"
export const CUSTOMER_ERROR="CUSTOMER_ERROR"
export const UPDATE_CUSTOMER="UPDATE_CUSTOMER"
export const CUSTOMER_DATA="CUSTOMER_DATA"
export const STATE="STATE"

export const CustomerAction = (page,countPerPage,search) => {
    return async (dispatch) => {
        axios.defaults.headers.get['Content-Type'] = 'multipart/form-data';
        await axios.get(`api/customer/list`, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                 dispatch({ type: CUSTOMER_ACTION, payload: res.data.data.customer_data.original});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const AddNewCustomer = (userObj,navigate) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/customer/create`,userObj, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                if (res.data.success === false) {
                    toast(res.data.response_message);
                }
                if(Object.keys(res.data.errors).length>0){
                    dispatch({type:CUSTOMER_ERROR,payload:res.data.errors})
                }
                if (res.data.success === true) {
                    toast(res.data.response_message);
                    dispatch({ type: ADD_NEW_CUSTOMER, payload: res.data.data});
                    console.log(res.data.response_message, "navigate")
                    navigate(`${process.env.PUBLIC_URL}/customer`)
                }
            }).catch(error => {
                console.log(error);
            })
    }
}

export const UpdateCustomerApi=(userObj,navigate)=>{
    return async(dispatch)=>{
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/customer/update`,userObj, HeaderToken())
        .then((res) => {
            console.log(res.data.data.original, "res")
            if (res.data.success === false) {
                toast(res.data.response_message);
            }
            if (res.data.success === true) {
                toast(res.data.response_message);
                dispatch({ type: UPDATE_CUSTOMER, payload: res.data.data});
                console.log(res.data.response_message, "navigate")
                navigate(`${process.env.PUBLIC_URL}/customer`)
            }
            // dispatch({ type: UPDATE_CATEGORY, payload: res.data.data});
        }).catch(error => {
            console.log(error);
        })
    }
}

export const AddNewCustomerData = (userObj) => {
    return async (dispatch) => {
      //  axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/customer_new/data`,userObj, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                dispatch({ type: CUSTOMER_DATA, payload: res.data.data});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const AddNewCustomerState = (userObj) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/state/data`,userObj, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                dispatch({ type: STATE, payload: res.data.data});
            }).catch(error => {
                console.log(error);
            })
    }
}