import { MANAGE_BANNER_ACTION,ADD_NEWMANAGE_BANNER,ERROR_MESSASE,UPDATE_MANAGE_BANNER } from "../Action/ManagerBannerAction";

const InitialState={
    manageBannerList:[],
    newManageList:[],
    errorMessage:"",
    updateManageBanner:[],
}

const ManageBannerReducer=(state=InitialState,action)=>{
    switch(action.type){
        case MANAGE_BANNER_ACTION:{
            return{
                ...state,
                manageBannerList:action.payload
            }
        }
        case ADD_NEWMANAGE_BANNER:{
            return{
                ...state,
                newManageList:action.payload
            }
        }
        case ERROR_MESSASE:{
            return{
                ...state,
                errorMessage:action.payload
            }
        }
        case UPDATE_MANAGE_BANNER:{
            return{
                ...state,
                updateManageBanner:action.payload
            }
        }

        default:{
            return{
                ...state,
            };
        }
    }
}

export default ManageBannerReducer