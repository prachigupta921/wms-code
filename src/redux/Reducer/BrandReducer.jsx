import { BRAND_ACTION,ADD_NEW_BRAND,BRAND_ERROR,EDIT_BRAND,UPDATE_BRAND } from "../Action/BrandAction";

const InitialState={
    brandList:[],
    NewBrand:[],
    errorMessage:"",
    editBrandList:[],
    updateBrand:[],
}

const BrandUser=(state=InitialState,action)=>{
    switch(action.type){
        case BRAND_ACTION:{
            return{
                ...state,
                brandList:action.payload
            }
        }

        case ADD_NEW_BRAND:{
            return{
                ...state,
                NewBrand:action.payload
            }
        }

        case BRAND_ERROR:{
            return{
                ...state,
               errorMessage:action.payload
            }
        }

        case EDIT_BRAND:{
            return{
                ...state,
                editBrandList:action.payload
            }
        }
        case UPDATE_BRAND:{
            return{
                ...state,
                updateBrand:action.payload
            }
        }

        default:{
            return{
                ...state,
            };
        }
    }
}

export default BrandUser