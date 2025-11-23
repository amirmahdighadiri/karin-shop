import React, {useContext} from 'react';
import {Link, Outlet} from "react-router-dom";
import LoginPopup from "../../components/Popups/LoginPopup.jsx";
import {AppContext} from "../../context/AppContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";


function AuthLayout() {
    const {isOpenLoginPopup,isRegister} = useContext(AppContext);
    const {isLogin}= useContext(AuthContext);
    return (
        <div className="relative min-h-screen flex-center mx-5">
            {/* ! ================== ! Background Effect ! ================== ! */}
            <svg className="absolute -z-10 left-0 top-0 h-full w-full mask-radial stroke-black/10 stroke-[2] [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1)_20%,rgba(255,255,255,0)_95%)] dark:stroke-white/10">
                <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
                <defs>
                    <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse" viewBox="0 0 64 64">
                        <path fill="none" d="M64 0H0v64"></path>
                    </pattern>
                </defs>
            </svg>
            {/* ! ================== ! Form Wrapper ! ================== ! */}
            <div className="w-108 bg-white dark:bg-gray-800 py-12 px-4 md:px-8 shadow-md rounded-xl">
                <Link to="/" className="block text-4xl font-Morabba text-center">
                    <span className="text-blue-500"> کارین </span>
                    <span className="text-gray-900 dark:text-white">شاپ</span>
                </Link>
                {/* ! ================== ! Form Content ! ================== ! */}
                <Outlet />
                {/* ! ================== ! Popup ! ================== ! */}
                {isLogin && isOpenLoginPopup && <LoginPopup title={isRegister ? "ثبت نام موفق!" : "ورود موفق!"} description={isRegister ? "شما با موفقیت ثبت نام کردید." : "شما با موفقیت وارد شدید."}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-18 text-green-600">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                </LoginPopup>}
                {!isLogin && isOpenLoginPopup && <LoginPopup title={isRegister ? "ثبت نام ناموفق!" : "ورود ناموفق!"} description={isRegister ? "خطا در ارتباط با سرور.لطفا دوباره تلاش کنید." : "اطلاعات خود را با دقت وارد کنید."}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-18 text-red-500">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                    </svg>
                </LoginPopup>}
            </div>
        </div>
    );
}

export default AuthLayout;