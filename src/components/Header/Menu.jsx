import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../../context/AppContext.jsx";

function Menu(props) {
    const {setOverlay,isShowCityBox, setIsShowCityBox,openMenu, setOpenMenu} = useContext(AppContext);
    const selectCityHandler = ()=> {
        setOverlay(true)
        setIsShowCityBox(true)
    }
    const closeMobileMenuHandler = ()=>{
        setOpenMenu(false)
        setOverlay(false)
    }
    return (
        <section className="lg:container">
            <div className={`fixed z-20 lg:static top-0 bottom-0 ${openMenu ? 'right-0' : '-right-72'} w-72 max-lg:min-h-screen h-16 lg:w-full flex flex-col lg:flex-row lg:items-center lg:justify-between bg-white lg:bg-gray-900 dark:bg-gray-800 text-gray-800 lg:text-gray-200 p-4 lg:px-10 lg:rounded-full lg:mt-6 transition-all duration-300`}>
                {/* ! ================== ! Moble Menu Header ! ================== ! */}
                <div className="flex lg:hidden items-center justify-between pb-4 border-b-2 border-gray-200 dark:border-gray-600">
                    <Link to="/" className="font-Morabba text-xl">
                        <span className="text-blue-500">کارین </span>
                        <span className="text-gray-900 dark:text-white">شاپ</span>
                    </Link>
                    <div onClick={closeMobileMenuHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="x-mark" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5 text-gray-500 dark:text-gray-200 cursor-pointer" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    </div>

                </div>
                {/* ! ================== ! Menu ! ================== ! */}
                <nav className="mt-4 lg:mt-0">
                    {/* ! ================== ! Menu  ! ================== ! */}
                    <ul className="flex flex-col lg:flex-row lg:items-center gap-x-8 gap-y-6 text-gray-100">
                        {/* ! ================== ! Mobile Menu Item  ! ================== ! */}
                        <li className="flex lg:hidden items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" id="squares" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18z"></path>
                            </svg>
                            <Link to="/" className="">
                                دسته بندی
                            </Link>
                        </li>
                        <li className="flex lg:hidden items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" id="user" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.9 17.9 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632"></path>
                            </svg>
                            <Link to="/" className="">
                                حساب کاربری
                            </Link>
                        </li>
                        <li className="flex lg:hidden items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" id="heart" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"></path>
                            </svg>
                            <Link to="/" className="">
                               علاقه مندی ها
                            </Link>
                        </li>
                        <li className="flex lg:hidden items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" id="shopping-cart" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.1 60.1 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"></path>
                            </svg>
                            <Link to="/" className="">
                              سبدخرید
                            </Link>
                        </li>
                        <li className="flex lg:hidden items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" id="check-badge" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296 3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043 3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296 3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043 3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path>
                            </svg>
                            <Link to="/" className="">
                                درباره ما
                            </Link>
                        </li>
                        <li className="flex lg:hidden items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" id="phone" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.04 12.04 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5z"></path>
                            </svg>
                            <Link to="/" className="">
                                تماس با ما
                            </Link>
                        </li>
                        {/* ! ================== ! Desktop Menu Item  ! ================== ! */}
                        <li className="hidden lg:block">
                            <Link to="/" className={`relative before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-blue-500 hover:before:w-full before:transition-all before:duration-400 before:delay-75`}>
                                صفحه اصلی
                            </Link>
                        </li>
                        <li className="hidden lg:block">
                            <Link to="/" className={`relative before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-blue-500 hover:before:w-full before:transition-all before:duration-400 before:delay-75`}>
                                دسته بندی ها
                            </Link>
                        </li>
                        <li className="hidden lg:block">
                            <Link to="/" className={`relative before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-blue-500 hover:before:w-full before:transition-all before:duration-400 before:delay-75`}>
                                فروشگاه
                            </Link>
                        </li>
                        <li className="hidden lg:block">
                            <Link to="/" className={`relative before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-blue-500 hover:before:w-full before:transition-all before:duration-400 before:delay-75`}>
                                وبلاگ
                            </Link>
                        </li>
                        <li className="hidden lg:block relative group">
                            <Link to="/" className={`flex items-center gap-x-1 relative before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-blue-500 group-hover:before:w-full before:transition-all before:duration-400 before:delay-150`}>
                                منوی ساده
                                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 group-hover:rotate-180 transition-all duration-400 delay-150" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                </svg>
                            </Link>
                            {/* ! ================== ! Sub Menu ! ================== ! */}
                            <ul className="absolute z-10 top-20 group-hover:top-14 right-0 w-48 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm space-y-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 delay-150 *:px-2 *:py-1.5 *:rounded-lg">
                                <li className="hover:bg-blue-600 hover:text-white">
                                    <Link to="/" className="">درباره ما</Link>
                                </li>
                                <li className="hover:bg-blue-600 hover:text-white">
                                    <Link to="/" className="">سوالات متداول</Link>
                                </li>
                                <li className="hover:bg-blue-600 hover:text-white">
                                    <Link to="/" className="">تماس با ما</Link>
                                </li>
                                <li className="hover:bg-blue-600 hover:text-white">
                                    <Link to="/" className="">صفحات</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* ! ================== ! Select City Box ! ================== ! */}
                <div className={`hidden lg:block relative cursor-pointer ${isShowCityBox ? 'parent-class' : ''}`}>
                    {/* ! ================== ! Select City Box Title ! ================== ! */}
                    <div className="flex items-center gap-x-1 " onClick={selectCityHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5"
                             className="size-6" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                        </svg>
                        <span className="">آدرس خود را انتخاب کنید</span>
                    </div>
                    {/* ! ================== ! Select City Box ! ================== ! */}
                    <div className={`absolute top-20 z-20 invisible opacity-0 parent-class:top-14 parent-class:visible parent-class:opacity-100 w-56 bg-white dark:bg-gray-800 p-3 rounded-lg transition-all`}>
                        {/* ! ================== ! Search Box ! ================== ! */}
                        <div className="flex items-center gap-x-1 bg-gray-200 dark:bg-gray-700 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"></path>
                            </svg>
                            <input type="text" className="text-gray-800 dark:text-gray-200 border-none outline-none" placeholder="جستجوی شهر..."/>
                        </div>
                        {/* ! ================== ! City List ! ================== ! */}
                        <span className="block text-gray-800 dark:text-gray-200 my-3">شهرهای پرتکرار :</span>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between px-1 py-1.5 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-150 group">
                                <Link to="/" className="flex items-center gap-x-1 group-hover:pr-4 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                                    </svg>
                                    <span className="text-gray-800 dark:text-white group-hover:text-white">تهران</span>
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-4 rotate-90" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                </svg>
                            </li>
                            <li className="flex items-center justify-between px-1 py-1.5 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-150 group">
                                <Link to="/" className="flex items-center gap-x-1 group-hover:pr-4 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                                    </svg>
                                    <span className="text-gray-800 dark:text-white group-hover:text-white">قزوین</span>
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-4 rotate-90" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                </svg>
                            </li>
                            <li className="flex items-center justify-between px-1 py-1.5 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-150 group">
                                <Link to="/" className="flex items-center gap-x-1 group-hover:pr-4 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                                    </svg>
                                    <span className="text-gray-800 dark:text-white group-hover:text-white">تبریز</span>
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-4 rotate-90" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                </svg>
                            </li>
                            <li className="flex items-center justify-between px-1 py-1.5 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-150 group">
                                <Link to="/" className="flex items-center gap-x-1 group-hover:pr-4 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                                    </svg>
                                    <span className="text-gray-800 dark:text-white group-hover:text-white">مشهد</span>
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-4 rotate-90" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                </svg>
                            </li>
                            <li className="flex items-center justify-between px-1 py-1.5 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-150 group">
                                <Link to="/" className="flex items-center gap-x-1 group-hover:pr-4 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                                    </svg>
                                    <span className="text-gray-800 dark:text-white group-hover:text-white">اصفهان</span>
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800 dark:text-white group-hover:text-white size-4 rotate-90" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ! ================== ! Mobile Search Box ! ================== ! */}
            <div className="flex lg:hidden items-center gap-x-1 bg-gray-200 dark:bg-gray-800 dark:text-gray-400 px-3 py-2 rounded-full mt-4 mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"></path>
                </svg>
                <input type="text" className="w-full h-full font-Morabba outline-none border-none" placeholder="جستجو در کارین شاپ"/>
            </div>
        </section>
    );
}

export default Menu;