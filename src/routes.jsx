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

const routes = [
    {
        path: "/", element: <Layout/>, children: [
            {index: true, element: <Home/>, title: "کارین شاپ | خانه"},
            {
                path: "auth-layout", element: <AuthLayout/>, children: [
                    {path: "login", element: <Login/>, title: "کارین شاپ | ورود"},
                    {path: "register", element: <Register/>, title: "کارین شاپ | ثبت نام"},
                    {path: "password", element: <Password/>, title: "کارین شاپ | تغییر رمز عبور"}
                ]
            },
            {path: "products", element: <Products/>, title: "کارین شاپ | محصولات"},
            {path: "products/:id", element: <ProductInfo/>, title: "کارین شاپ | محصولات"},
            {path: "shopping-cart", element: <ShoppingCart/>, title: "کارین شاپ | سبد خرید"},
            {path: "dashboard", element: <Dashboard/>, title: "کارین شاپ | حساب کاربری" , children: [
                    {path: "order" , element: <OrderTable/>},
                    {path: "address" , element: <UserAddress/>},
                    {path: "favorite" , element: <FavoriteProducts />},
                ]},
            {path: "about-us", element: <AboutUS/>, title: "کارین شاپ | درباره ما"},
            {path: "faq", element: <FAQ/>, title: "کارین شاپ | سوالات متداول"},
            {path: "contact-us", element: <ContactUs/>, title: "کارین شاپ | تماس با ما"},
            {path: "*", element: <Error/>, title: "کارین شاپ | صفحه ای یافت نشد"}
        ]
    },


]
export default routes