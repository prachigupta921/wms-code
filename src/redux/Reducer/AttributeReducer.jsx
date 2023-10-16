import { ATTRIBUTE_ACTION,ADD_ATTRIBUTE_ACTION,ATTRIBUTE_ERROR,UPDATE_ATTRIBUTE } from "../Action/AttributeAction";

const InitialState={
    attributeAction:[],
    addAttributeAction:[],
    errorMessage:"",
    updateAttribute:[],
}

const AttributeUser=(state=InitialState,action)=>{
    switch(action.type){
        case ATTRIBUTE_ACTION:{
            return{
                ...state,
                attributeAction: action.payload,
            }
        }
        case ADD_ATTRIBUTE_ACTION:{
            return{
                ...state,
                addAttributeAction: action.payload,
            }
        }
        case ATTRIBUTE_ERROR:{
            return{
                ...state,
                errorMessage: action.payload,
            }
        }
        case UPDATE_ATTRIBUTE:{
            return{
                ...state,
                updateAttribute: action.payload,
            }
        }

        default:{
            return{
                ...state,
            };
        }
    }
}

export default AttributeUser