import { CATEGORY_ACTION,ADD_NEW_CATEGORY,CREATE_CATEGORY,EDIT_CATEGORY } from "../Action/CategoryAction";

const InitialState={
    CATEGORY_ACTION:[],
    ADD_NEW_CATEGORY:[],
    CREATE_CATEGORY:[],
    EDIT_CATEGORY:[]
}

const CategogyUser=(state = InitialState, action)=>{
    switch(action.type){
        case CATEGORY_ACTION:{
            return{
                ...state,
                CATEGORY_ACTION: action.payload,
            }
        }

        case ADD_NEW_CATEGORY:{
            return{
                ...state,
                ADD_NEW_CATEGORY:action.payload
            }
        }

        case CREATE_CATEGORY:{
            return{
                ...state,
                CREATE_CATEGORY:action.payload
            }
        }

        case EDIT_CATEGORY:{
            return{
                ...state,
                EDIT_CATEGORY:action.payload
            }
        }

        default:
      return {
        ...state,
      };
    }
}

export default CategogyUser