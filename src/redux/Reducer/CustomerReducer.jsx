import { CUSTOMER_ACTION,ADD_NEW_CUSTOMER,CUSTOMER_ERROR,UPDATE_CUSTOMER, 
    CUSTOMER_DATA,STATE } from "../Action/CustomerAction";

const InitialState={
    customerList:[],
    addCustomer:[],
    errorMessage:"",
    updateCustomer:[],
    customerData:[],
    customerState:[],
}

const CustomerReducer=(state=InitialState,action)=>{
    switch(action.type){
        case CUSTOMER_ACTION:{
            return{
                ...state,
                customerList:action.payload
            }
        }
        case ADD_NEW_CUSTOMER:{
            return{
                ...state,
                addCustomer:action.payload
            }
        }
        case CUSTOMER_ERROR:{
            return{
                ...state,
                errorMessage:action.payload
            }
        }
        case UPDATE_CUSTOMER:{
            return{
                ...state,
                updateCustomer:action.payload
            }
        }
        case CUSTOMER_DATA:{
            return{
                ...state,
                customerData:action.payload
            }
        }

        case STATE:{
            return{
                ...state,
                customerState:action.payload
            }
        }
        default:{
            return{
                ...state,
            };
        }
    }
}

export default CustomerReducer