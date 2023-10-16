import { REGISTER_ACTION } from "../Action/RegisterAction";

const InitialState={
    REGISTER_ACTION:[],
}

const AttendenceUser=(state = InitialState, action)=>{
    switch(action.type){
        case REGISTER_ACTION:{
            return{
                ...state,
                REGISTER_ACTION: action.payload,
            }
        }

        default:
      return {
        ...state,
      };
    }
}

export default AttendenceUser