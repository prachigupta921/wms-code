import { OPTION_ACTION,ADD_OPTION_ACTION,OPTION_ERROR,UPDATE_OPTION } from "../Action/OptionAction";

const InitialState={
    optionAction:[],
    addOptionAction:[],
    errorMessage:"",
    updateOption:[],
}

const OptionUser=(state=InitialState,action)=>{
    switch(action.type){
        case OPTION_ACTION:{
            return{
                ...state,
                optionAction: action.payload,
            }
        }
        case ADD_OPTION_ACTION:{
            return{
                ...state,
                addOptionAction: action.payload,
            }
        }
        case OPTION_ERROR:{
            return{
                ...state,
                errorMessage: action.payload,
            }
        }
        case UPDATE_OPTION:{
            return{
                ...state,
                updateOption: action.payload,
            }
        }

        default:{
            return{
                ...state,
            };
        }
    }
}

export default OptionUser