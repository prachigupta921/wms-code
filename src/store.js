import { createStore, combineReducers,applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import AttendenceUser from "./redux/Reducer/RegisterReducer";
import LoginUser from "./redux/Reducer/LoginReducer";
import CategogyUser from "./redux/Reducer/CategoryReducer";
import BrandUser from "./redux/Reducer/BrandReducer";
import CatlogBannerReducer from "./redux/Reducer/CatlogBannerReducer";
import ManageBannerReducer from "./redux/Reducer/ManageBannerReducer";
import AttributeUser from "./redux/Reducer/AttributeReducer";
import OptionUser from "./redux/Reducer/OptionReducer";
import CustomerReducer from "./redux/Reducer/CustomerReducer";

const rootReducer=combineReducers({
    AttendenceUser:AttendenceUser,
    LoginUser:LoginUser,
    CategogyUser:CategogyUser,
    brand:BrandUser,
    catlogList:CatlogBannerReducer,
    manageList:ManageBannerReducer,
    attribute:AttributeUser,
    option:OptionUser,
    customer:CustomerReducer
})

const store= createStore(rootReducer,applyMiddleware(ReduxThunk))

export default store