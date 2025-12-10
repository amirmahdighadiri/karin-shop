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
import AboutUS from "./pages/AboutUs/AboutUS.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import OrderTable from "./components/DashboardPages/OrderTable/OrderTable.jsx";
import UserAddress from "./components/DashboardPages/UserAddress/UserAddress.jsx";
import FavoriteProducts from "./components/DashboardPages/FavoriteProducts/FavoriteProducts.jsx";
import UserMessage from "./components/DashboardPages/UserMessage/UserMessage.jsx";
import UserInformation from "./components/DashboardPages/UserInformation/UserInformation.jsx";

const routes = [
    {
        path: "/", element: <Layout/>, children: [
            {index: true, element: <Home/>},
            {
                path: "auth-layout", element: <AuthLayout/>, children: [
                    {path: "login", element: <Login/>},
                    {path: "register", element: <Register/>},
                    {path: "password", element: <Password/>}
                ]
            },
            {path: "products", element: <Products/>},
            {path: "products/:id", element: <ProductInfo/>},
            {path: "shopping-cart", element: <ShoppingCart/>},
            {path: "dashboard", element: <Dashboard/>, children: [
                    {path: "order" , element: <OrderTable/>},
                    {path: "address" , element: <UserAddress/>},
                    {path: "favorite" , element: <FavoriteProducts />},
                    {path: "message" , element: <UserMessage />},
                    {path: "user-info" , element: <UserInformation />},
                ]},
            {path: "about-us", element: <AboutUS/>},
            {path: "faq", element: <FAQ/>},
            {path: "contact-us", element: <ContactUs/>},
            {path: "*", element: <Error/>}
        ]
    },


]
export default routes