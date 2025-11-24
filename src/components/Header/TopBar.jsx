import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../../context/AppContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";

function TopBar(props) {
    const {
        setOverlay,
        isShowResultSearchBox,
        setIsShowResultSearchBox,
        setOpenMenu,
        theme,
        setTheme,
    } = useContext(AppContext);
    const {isLogin, userInfo,userShoppingCartCount} = useContext(AuthContext);


    const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");
    const searchResultHandler = () => {
        setOverlay(true)
        setIsShowResultSearchBox(true);
    }
    const openMenu = () => {
        setOverlay(true)
        setOpenMenu(true)
    }

    return (
        <section
            className="lg:container flex items-center justify-between h-16 lg:h-auto lg:mt-5 px-4 lg:px-0 bg-white dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent">
            {/* ! ================== ! Menu Button In Mobile ! ================== ! */}
            <button className="flex lg:hidden items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2 text-zinc-900 dark:text-zinc-100 rounded-full cursor-pointer transition-all *:size-6" onClick={openMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" id="bars" fill="none" stroke="currentColor" strokeWidth="1.5"
                     className="size-6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
            </button>
            {/* ! ================== ! Search Box ! ================== ! */}
            <div className="relative z-20 hidden lg:block w-full lg:w-84 border border-gray-300 dark:border-transparent bg-gray-50 dark:bg-gray-700 py-1 pl-2 pr-1 rounded-full" onClick={searchResultHandler}>
                {/* ! ================== ! Search Box Wrapper ! ================== ! */}
                <div className="flex items-center gap-x-2">
                    {/* ! ================== ! Search Icon ! ================== ! */}
                    <div className="size-9 flex-center text-gray-100 bg-blue-600 rounded-full shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5"
                             className="size-6" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"></path>
                        </svg>
                    </div>
                    {/* ! ================== ! Search Input ! ================== ! */}
                    <input type="text" className="w-full h-full border-none outline-none dark:text-gray-100"
                           placeholder="جستجو در کارین..."/>
                </div>
                {/* ! ================== ! Search Result Box ! ================== ! */}
                <div className={`absolute right-0 left-0 ${isShowResultSearchBox ? 'top-14 opacity-100 visible' : 'top-20 opacity-0 invisible'} z-20 bg-white dark:bg-gray-700 rounded-xl p-4 transition-all`}>
                    {/* ! ================== ! Search Result Text ! ================== ! */}
                    <span className="flex items-center gap-x-1 text-sm text-gray-600 dark:text-gray-200">
                        نتیجه جستجو :
                        <span className="font-Dana-Medium text-blue-400">iphone</span>
                    </span>
                    {/* ! ================== ! Search Result Items ! ================== ! */}
                    <ul className="mt-4 space-y-4">
                        <li className="flex items-center justify-between text-gray-500 dark:text-gray-300 cursor-pointer">
                            <Link to="/" className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" id="search" fill="none" stroke="currentColor"
                                     strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"></path>
                                </svg>
                                <span className="">آیفون 14</span>
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-up-right" fill="none"
                                 stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                            </svg>
                        </li>
                        <li className="flex items-center justify-between text-gray-500 dark:text-gray-300 cursor-pointer">
                            <Link to="/" className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" id="search" fill="none" stroke="currentColor"
                                     strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"></path>
                                </svg>
                                <span className="">قاب آیفون</span>
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-up-right" fill="none"
                                 stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                            </svg>
                        </li>
                        <li className="flex items-center justify-between text-gray-500 dark:text-gray-300 cursor-pointer">
                            <Link to="/" className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" id="search" fill="none" stroke="currentColor"
                                     strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"></path>
                                </svg>
                                <span className="">کاور آیفون 16</span>
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-up-right" fill="none"
                                 stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                            </svg>
                        </li>
                    </ul>
                    {/* ! ================== ! Popular Title ! ================== ! */}
                    <div className="flex items-center gap-x-1 text-gray-500 dark:text-gray-200 mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" id="fire" fill="none" stroke="currentColor"
                             strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.3 8.3 0 0 0 9 9.601a8.98 8.98 0 0 1 3.361-6.867 8.2 8.2 0 0 0 3 2.48Z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 6 6 0 0 0-1.925 3.547 6 6 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18"></path>
                        </svg>
                        <span className="text-sm">جستجو های پرطرفدار :</span>
                    </div>
                    {/* ! ================== ! Popular Items Warpper ! ================== ! */}
                    <ul className="flex items-center gap-x-1.5 mt-3">
                        <li className="inline-flex border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 py-1.5 px-3 text-sm rounded-full">
                            <Link to="/" className="">
                                #آیفون
                            </Link>
                        </li>
                        <li className="inline-flex border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 py-1.5 px-3 text-sm rounded-full">
                            <Link to="/" className="">
                                #لپ تاپ
                            </Link>
                        </li>
                        <li className="inline-flex border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 py-1.5 px-3 text-sm rounded-full">
                            <Link to="/" className="">
                                #هدفون
                            </Link>
                        </li>
                        <li className="inline-flex border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 py-1.5 px-3 text-sm rounded-full">
                            <Link to="/" className="">
                                #هلدر
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* ! ================== ! Logo Link ! ================== ! */}
            <div className="text-center">
                <h1 className="font-Morabba text-3xl lg:text-4xl mb-0.5">
                    <Link to="/">
                        <span className="text-blue-500"> کارین </span>
                        <span className="text-gray-900 dark:text-white">شاپ</span>
                    </Link>
                </h1>
                <span className="hidden lg:block text-gray-400 text-sm">خرید موبایل و لپ‌تاپ</span>
            </div>
            {/* ! ================== ! Buttons Wrapper ! ================== ! */}
            <div className="flex items-center gap-x-3">
                {/* ! ================== ! Profile Button ! ================== ! */}
                <button className="relative hidden lg:flex items-center justify-between gap-x-1 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 py-2 px-4 text-zinc-900 dark:text-zinc-100 rounded-full cursor-pointer transition-all group">
                    <svg xmlns="http://www.w3.org/2000/svg" id="user" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.9 17.9 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632"></path>
                    </svg>
                    <Link to="/auth-layout/login" className={`${isLogin ? 'hidden' : 'block'}`}>حساب کاربری</Link>
                    <span className={`${isLogin ? 'block' : 'hidden'}`}>{userInfo.fullname}</span>
                    {/* ! ================== ! Profile Submenu ! ================== ! */}
                    <div className={`${isLogin ? 'block' : 'hidden'} absolute z-10 top-20 group-hover:top-12 left-1/2 -translate-x-1/2 flex flex-col gap-y-3 border border-gray-100 dark:border-transparent w-52 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 invisible opacity-0 group-hover:visible group-hover:opacity-100 rounded-lg transition-all delay-100 *:py-1.5 *:px-2 *:rounded-lg *:transition-all`}>
                        <Link to="/" className="flex items-center gap-x-2 hover:bg-blue-500 hover:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" id="user" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.9 17.9 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632"></path>
                            </svg>
                            <span className="">سفارشات من</span>
                        </Link>
                        <Link to="/" className="flex items-center gap-x-2 hover:bg-blue-500 hover:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" id="envelope" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                            </svg>
                            <span className="">لیست پیام ها</span>
                        </Link>
                        <Link to="/dashboard" className="flex items-center gap-x-2 hover:bg-blue-500 hover:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" id="cog" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87q.11.06.22.127c.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a8 8 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124q.108-.066.22-.128c.332-.183.582-.495.644-.869z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                            </svg>
                            <span className="">اطلاعات کاربری</span>
                        </Link>
                        <Link to="/" className="flex items-center gap-x-2 hover:bg-red-500 hover:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-left-end" fill="none"
                                 stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"></path>
                            </svg>
                            <span className="">خروج از حساب</span>
                        </Link>
                    </div>
                </button>
                {/* ! ================== ! Change Theme Button ! ================== ! */}
                <button className="flex-center hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2 text-zinc-900 dark:text-zinc-100 rounded-full cursor-pointer transition-all *:size-6" onClick={toggleTheme}>
                    <svg className="block dark:hidden" id="moon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M21.752 15.002A9.7 9.7 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.75 9.75 0 0 0 3 11.25 9.75 9.75 0 0 0 12.75 21a9.75 9.75 0 0 0 9.002-5.998Z"></path>
                    </svg>
                    <svg className="hidden dark:block" id="sun" fill="none" stroke="currentColor" strokeWidth="1.5"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0"></path>
                    </svg>
                </button>
                {/* ! ================== ! Shopping Button ! ================== ! */}
                <Link to="/shopping-cart" className="relative hidden lg:flex items-center justify-between bg-blue-600 text-white rounded-full p-2 cursor-pointer">
                    {/* ! ================== ! Animation Effect ! ================== ! */}
                    <span className="absolute -top-1 -right-1 size-5 bg-red-500 animate-ping rounded-full"></span>
                    <span
                        className="flex-center absolute -top-1 -right-1 size-5 flex-center bg-red-500 text-xs text-white rounded-full">{userShoppingCartCount ? userShoppingCartCount : 0}</span>
                    <svg id="shopping-bag" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"></path>
                    </svg>
                </Link>
            </div>
        </section>
    );
}

export default TopBar;