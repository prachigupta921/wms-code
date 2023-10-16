// dashbaord
import Default from '../Components/Dashboard/Default';
import Ecommerce from '../Components/Dashboard/Ecommerce';
import LoginForm from '../Components/Login';
import Login from '../Components/Login';
import Register from '../Components/Register';
import AddProduct from "../Components/AddProductForm";

import Protected from '../Protected';

import SupportTickitContain from '../Components/SupportTicket';
import Category from '../Components/Category/Categories';
import AddCategory from '../Components/Category/AddCategory';
import EditCategory from '../Components/Category/EditCategory';
import Brand from '../Components/Brand';
import AddBrand from '../Components/Brand/AddNewBrand';
import EditBrand from '../Components/Brand/EditBrand';
import CatlogBanner from '../Components/CatlogBanner';
import ManageBanner from '../Components/ManageBanner';
import AddCatalogBanner from '../Components/CatlogBanner/AddCatalogBanner';
import AddManagerBanner from '../Components/ManageBanner/AddManageBanner';
import EditCatalogBanner from '../Components/CatlogBanner/EditCatalogBanner';
import EditManageBanner from '../Components/ManageBanner/EditManageBanner';
import Attribute from '../Components/Attribute';
import Option from '../Components/Option';
import AddAttribute from '../Components/Attribute/AddAttribute';
import AddOption from '../Components/Option/AddOption';
import EditOption from '../Components/Option/EditOption';
import EditAttribute from '../Components/Attribute/EditAttribute';
import Customer from '../Components/Customer';
import AddCustomer from '../Components/Customer/AddCustomer';
import EditCustomer from '../Components/Customer/EditCustomer';

export const routes = [
        //dashboard
        { path: `${process.env.PUBLIC_URL}/dashboard/default`, Component: <Default /> },
        { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, Component: <Ecommerce /> },
       
        { path: `${process.env.PUBLIC_URL}/register`, Component: <Register /> },
        { path: `${process.env.PUBLIC_URL}/addproduct`, Component: <AddProduct /> },
        { path: `${process.env.PUBLIC_URL}/category`, Component: <Protected Cmp={Category}/> },
        { path: `${process.env.PUBLIC_URL}/addcategory`, Component: <Protected Cmp={AddCategory}/>},
         { path: `${process.env.PUBLIC_URL}/edit`, Component: <Protected Cmp={EditCategory}/>},
         { path: `${process.env.PUBLIC_URL}/brand`, Component: <Protected Cmp={Brand}/>},
         { path: `${process.env.PUBLIC_URL}/new-brand`, Component: <Protected Cmp={AddBrand}/>},
         { path: `${process.env.PUBLIC_URL}/edit-brand`, Component: <Protected Cmp={EditBrand}/>},
         { path: `${process.env.PUBLIC_URL}/catlog-banner`, Component: <Protected Cmp={CatlogBanner}/>},
         { path: `${process.env.PUBLIC_URL}/add-catlog-banner`, Component: <Protected Cmp={AddCatalogBanner}/>},
         { path: `${process.env.PUBLIC_URL}/manage-banner`, Component: <Protected Cmp={ManageBanner}/>},
         { path: `${process.env.PUBLIC_URL}/add-manage-banner`, Component: <Protected Cmp={AddManagerBanner}/>},
         { path: `${process.env.PUBLIC_URL}/edit-catalog-banner`, Component: <Protected Cmp={EditCatalogBanner}/>},
         { path: `${process.env.PUBLIC_URL}/edit-manage-banner`, Component: <Protected Cmp={EditManageBanner}/>},
         { path: `${process.env.PUBLIC_URL}/attribute`, Component: <Protected Cmp={Attribute}/>},
         { path: `${process.env.PUBLIC_URL}/add-attribute`, Component: <Protected Cmp={AddAttribute}/>},
         { path: `${process.env.PUBLIC_URL}/option`, Component: <Protected Cmp={Option}/>},
         { path: `${process.env.PUBLIC_URL}/add-option`, Component: <Protected Cmp={AddOption}/>},
         { path: `${process.env.PUBLIC_URL}/edit-option`, Component: <Protected Cmp={EditOption}/>},
         { path: `${process.env.PUBLIC_URL}/edit-attribute`, Component: <Protected Cmp={EditAttribute}/>},
         { path: `${process.env.PUBLIC_URL}/customer`, Component: <Protected Cmp={Customer}/>},
         { path: `${process.env.PUBLIC_URL}/add-customer`, Component: <Protected Cmp={AddCustomer}/>},
         { path: `${process.env.PUBLIC_URL}/edit-customer`, Component: <Protected Cmp={EditCustomer}/>},



        //Support Ticket
        { path: `${process.env.PUBLIC_URL}/starter-kits/sample-page`, Component: <SupportTickitContain /> }

];
