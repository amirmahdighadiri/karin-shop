import React, {useEffect} from 'react';
import {Outlet, useLocation, useMatches} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Overlay from "../Overlay/Overlay.jsx";
import Footer from "../Footer/Footer.jsx";
import RootContext from "../../context/RootContext.jsx";
import Loader from "../Loader/Loader.jsx";

function Layout() {
    const location = useLocation();

    return (
        <RootContext>
            {!location.pathname.toLowerCase().includes("/auth-layout") && <Header/>}
            <main>
                <Outlet />
            </main>
            {!(location.pathname.toLowerCase().includes("/auth-layout") || location.pathname.toLowerCase().includes("/dashboard")) && <Footer/>}
            <Overlay />
        </RootContext>
    );
}

export default Layout;