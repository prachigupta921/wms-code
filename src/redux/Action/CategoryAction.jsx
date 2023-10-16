import axios from "axios"
import { HeaderToken } from "../../Utils/headerToken"
import { toast } from "react-toastify";

export const CATEGORY_ACTION = "CATEGORY_ACTION"
export const ADD_NEW_CATEGORY = "ADD_NEW_CATEGORY"
export const CREATE_CATEGORY = "CREATE_CATEGORY"
export const EDIT_CATEGORY = "EDIT_CATEGORY"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"

// export const CategoryAction=()=>{
//     return async(dispatch)=>{
//     //     let headers = new Headers();
//     //     headers.append('Content-Type', 'application/json');
//     // headers.append('Accept', 'application/json');
//     // headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token') );
//         axios.defaults.headers.post['Content-Type'] ='multipart/form-data';
//         axios.defaults.headers.post['Access-Control-Allow-Orgin']='*';
//         axios.defaults.headers.post['Authorization']='Bearer ' + sessionStorage.getItem('token')
//         await axios({method:"get", url:"http://api.honeyonline.in/api/category/list",headers:{}, mode: 'cors',credentials: 'include',})
//         .then((res)=>{
//             console.log(res,"res");
//             dispatch({ type: CATEGORY_ACTION, payload: res.data.data});
//         }).catch((error)=>{
//             console.log(error)
//         })

//     }
// }

// export const CategoryAction = () => {
//     return async (dispatch) => {
//         await axios("http://api.honeyonline.in/api/category/list", {
//             method:'GET',
//             mode: 'no-cors',
//             crossDomain: true,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
//                 'Access-Control-Allow-Origin':true,
//                 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             },
//             withCredentials: true,
//       credentials: 'same-origin',
//         }).then((res) => {
//             console.log(res, 'res')
//             dispatch({ type: CATEGORY_ACTION, payload: res.data.data });
//         }).catch((error) => {
//             console.log(error)
//         })
//     }
// }

export const CategoryAction = (page,countPerPage,search) => {
    return async (dispatch) => {
        axios.defaults.headers.get['Content-Type'] = 'multipart/form-data';
        await axios.get(`api/category/list?search=${search}&start=${(page-1)*countPerPage}&length=${countPerPage}`, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                 dispatch({ type: CATEGORY_ACTION, payload: res.data.data.categories_data.original});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const AddNewCategory = () => {
    return async (dispatch) => {
        axios.defaults.headers.get['Content-Type'] = 'multipart/form-data';
        await axios.get(`api/category/new`, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                dispatch({ type: ADD_NEW_CATEGORY, payload: res.data.data.parent_category});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const CreateCategory = (userObj,navigate) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/category/create`,userObj, HeaderToken())
            .then((res) => {
                console.log(res, "res")
                if (res.data.success === false) {
                    toast(res.data.response_message);
                    // if(res.data.errors.lenght>0)
                    // {
                    //    // res.data.errors
                    // }
                }
                if (res.data.success === true) {
                    toast(res.data.response_message);
                    dispatch({ type: CREATE_CATEGORY, payload: res.data});
                    console.log(res.data.response_message, "navigate")
                    navigate(`${process.env.PUBLIC_URL}/category`)
                }
               // dispatch({ type: CREATE_CATEGORY, payload: res.data});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const EditCategoryAction = (userObj) => {
    return async (dispatch) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/category/edit`,userObj, HeaderToken())
            .then((res) => {
                console.log(res.data, "res")
                 dispatch({ type: EDIT_CATEGORY, payload: res.data.data});
            }).catch(error => {
                console.log(error);
            })
    }
}

export const UpdateApi=(userObj,navigate)=>{
    return async(dispatch)=>{
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        await axios.post(`api/category/update`,userObj, HeaderToken())
        .then((res) => {
            console.log(res.data.data.original, "res")
            if (res.data.success === false) {
                toast(res.data.response_message);
            }
            if (res.data.success === true) {
                toast(res.data.response_message);
                dispatch({ type: UPDATE_CATEGORY, payload: res.data.data});
                console.log(res.data.response_message, "navigate")
                navigate(`${process.env.PUBLIC_URL}/category`)
            }
            // dispatch({ type: UPDATE_CATEGORY, payload: res.data.data});
        }).catch(error => {
            console.log(error);
        })
    }
}