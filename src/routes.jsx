import Home from "./pages/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Login from "./components/Forms/Login.jsx";
import Register from "./components/Forms/Register.jsx";
import AuthLayout from "./pages/Auth/AuthLayout.jsx";
import Password from "./components/Forms/Password.jsx";
import Products from "./pages/Products/Products.jsx";
import Error from "./pages/Error/Error.jsx";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart.jsx";
import ProductInfo from "./pages/ProductInfo/ProductInfo.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import AboutUS from "./pages/AboutUS/AboutUS.jsx";

const routes = [
    {
        path: "/", element: <Layout/>, children: [
            {index: true , element: <Home/>},
            {path:"auth-layout", element: <AuthLayout/> , children: [
                    {path:"login", element: <Login/>},
                    {path:"register", element: <Register/>},
                    {path:"password", element: <Password/>}
                ]},
            {path:"products", element: <Products />},
            {path:"products/:id", element: <ProductInfo />},
            {path:"shopping-cart", element: <ShoppingCart />},
            {path: "dashboard", element: <Dashboard />},
            {path:"about-us", element: <AboutUS />},
            {path: "*" , element: <Error />}
        ]
    },


]
export default routes