import { CATLOG_BANNER_ACTION,ADD_NEW_CATALOG,
    CATALOG_ERROR,EDIT_CATALOG_BANNER,UPDATE_CATALOG_BANNER } from "../Action/CatlogBannerAction";

const InitialState={
    catlogBannerList:[],
    newBannerList:[],
    errorMessage:"",
    editCatalogBanner:{},
    updateCatalogBanner:[],
}

const CatlogBannerReducer=(state=InitialState,action)=>{
    switch(action.type){
        case CATLOG_BANNER_ACTION:{
            return{
                ...state,
                catlogBannerList:action.payload
            }
        }

        case ADD_NEW_CATALOG:{
            return{
                ...state,
                newBannerList:action.payload
            }
        }
        case CATALOG_ERROR:{
            return{
                ...state,
                errorMessage:action.payload
            }
        }
        case EDIT_CATALOG_BANNER:{
            return{
                ...state,
                editCatalogBanner:action.payload
            }
        }
        case UPDATE_CATALOG_BANNER:{
            return{
                ...state,
                updateCatalogBanner:action.payload
            }
        }

        default:{
            return{
                ...state,
            };
        }
    }
}

export default CatlogBannerReducer