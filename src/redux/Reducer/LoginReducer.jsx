import { LOGIN_ACTION,LOGIN_ERROR } from "../Action/LoginAction";

const InitialState={
    LOGIN_ACTION:[],
    Error:""
}

const LoginUser=(state = InitialState, action)=>{
    switch(action.type){
        case LOGIN_ACTION:{
            return{
                ...state,
                LOGIN_ACTION: action.payload,
            }
        }

        case LOGIN_ERROR:{
            return{
                ...state,
                Error:action.payload
            }
        }

        default:
      return {
        ...state,
      };
    }
}

export default LoginUser