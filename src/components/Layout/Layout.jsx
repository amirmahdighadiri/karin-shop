import React, { useEffect} from 'react';
import {Outlet, useLocation, useMatches} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Overlay from "../Overlay/Overlay.jsx";
import Footer from "../Footer/Footer.jsx";
import RootContext from "../../context/RootContext.jsx";
import Loader from "../Loader/Loader.jsx";
import AcceptModal from "../Modals/AcceptModal/AcceptModal.jsx";
import ProductSkeleton from "../Skeleton/ProductSkeleton.jsx";

function Layout() {
    const location = useLocation();
    const noHeaderPaths = ["/auth-layout", "/maintenance"];
    const noFooterPaths = ["/auth-layout", "/dashboard", "/maintenance"];

    useEffect(() => {
        window.scrollTo(0, 0);
    },[location.pathname])

    return (
        <RootContext>
            {!noHeaderPaths.some(path => location.pathname.includes(path)) && <Header />}
            <main>
                <Outlet />
            </main>
            {!noFooterPaths.some(path => location.pathname.includes(path)) && <Footer />}
            <Overlay />
        </RootContext>
    );
}

export default Layout;