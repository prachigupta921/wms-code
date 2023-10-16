import axios from "axios"

export const REGISTER_ACTION="REGISTER_ACTION"

// export const AttendenceAction=(userObj)=>{
    
//     return async(dispatch)=>{
//         await axios.post("http://api.honeyonline.in/api/register?", userObj)
//         .then((res)=>{
//           //  res.headers("Access-Control-Allow-Orign","http://localhost:3000")
//             console.log(res,"res");
//             dispatch({ type: REGISTER_ACTION, payload: res.data});
//         }).catch((error)=>{
//             console.log(error)
//         })
        
//     }
// }

export const AttendenceAction=(userObj)=>{
    return async(dispatch)=>{
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        await axios({method:"post", url:"http://api.honeyonline.in/api/register",data:userObj, withCredentials: false})
        .then((res)=>{
            console.log(res,"res");
            dispatch({ type: REGISTER_ACTION, payload: res.data});
        }).catch((error)=>{
            console.log(error)
        })
        
    }
}