import AddProduct from "../Components/AddProductForm";
import LoginForm from "../Components/Login";
import ProductForm from "../Components/ProductForm";
import Register from "../Components/Register";

export const authRoutes=[
    { path: `${process.env.PUBLIC_URL}/login`, Component: <LoginForm /> },
    { path: `${process.env.PUBLIC_URL}/register`, Component: <Register /> },
    { path: `${process.env.PUBLIC_URL}/product`, Component: <ProductForm /> },
    // { path: `${process.env.PUBLIC_URL}/addproduct`, Component: <AddProduct /> },
]