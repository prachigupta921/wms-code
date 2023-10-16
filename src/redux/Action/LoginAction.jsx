import axios from "axios"
import { toast } from "react-toastify";
export const LOGIN_ACTION = "LOGIN_ACTION"
export const LOGIN_ERROR = "LOGIN_ERROR"

// export const LoginAction=(userObj,navigate)=>{
//     return async(dispatch)=>{
//         axios.defaults.headers.post['Content-Type'] ='multipart/form-data';
//         await axios({method:"post", url:"api/login",data:userObj})
//         .then((res)=>{
//             console.log(res,"res")
//             sessionStorage.setItem('token',res.data.data.token)
//             if (res.data.success === false) {
//                 toast.error(res.data.response_message);
//               }
//             if(res.data.success===true){
//                 toast.success(res.data.response_message);
//                 dispatch({ type: LOGIN_ACTION, payload: res.data});
//                 console.log(res.data.response_message,"navigate")
//                 navigate(`${process.env.PUBLIC_URL}/category`)
//             }
//             // dispatch({ type: LOGIN_ACTION, payload: res.data});
//         }).catch((error)=>{
//             console.log(error,"errrr")
//             if (error.data.success === false) {
//                 toast.error(error.data.response_message);
//               }
//             //toast.warn(error.message)
//         })

//     }
// }

export const LoginAction = (userObj, navigate) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/login`, userObj)
            .then((res) => {
                console.log(res, "res")
                if (res.data.success === false) {
                    toast(res.data.response_message);
                }
                if(Object.keys(res.data.errors).length>0){
                    dispatch({type:LOGIN_ERROR,payload:res.data.errors})
                }
                if (res.data.success === true) {
                    toast(res.data.response_message);
                    sessionStorage.setItem('token', res.data.data.token)
                    dispatch({ type: LOGIN_ACTION, payload: res.data });
                    console.log(res.data.response_message, "navigate")
                    navigate(`${process.env.PUBLIC_URL}/category`)
                }
            }).catch(error => {
                console.log(error,"errrr");
               // toast.error(error.response.data.response_message);
            })
    }
}