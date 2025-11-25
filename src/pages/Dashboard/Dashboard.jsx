import {useContext, useState} from "react";
// Images
import userProfile from '../../assets/images/profile/user.png'
import map from '../../assets/images/icon/map.png'
import {AppContext} from "../../context/AppContext.jsx";



function Dashboard() {

    const {isOpenDasboardMenu, setIsOpenDasboardMenu , setOverlay} = useContext(AppContext);

    const openDashboardMenuHandler = (event) => {
        event.preventDefault();
        setIsOpenDasboardMenu(true)
        setOverlay(true);
    }
    const closeDashboardMenuHandler = (event) => {
        event.preventDefault();
        setIsOpenDasboardMenu(false)
        setOverlay(false);
    }

    return (
        <section className="container">
            {/* ! ================== ! Wrapper ! ================== ! */}
            <div className="grid grid-cols-12 gap-x-8 mt-10">
                {/* ! ================== ! Dashboard Menu ! ================== ! */}
                <div className={`fixed h-3/4 lg:h-auto ${isOpenDasboardMenu ? 'translate-y-0' : 'translate-y-full'} lg:translate-y-0 right-0 left-0 max-lg:bottom-0 z-20 lg:col-span-3 lg:sticky lg:top-1 p-4 shadow rounded-lg bg-white dark:bg-gray-800 self-start transition-all`}>
                    {/* ! ================== ! Close Menu Button In Mobile ! ================== ! */}
                    <button onClick={closeDashboardMenuHandler} type="button" className="block lg:hidden mb-4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" id="x-mark" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-zinc-900 dark:text-zinc-100" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    {/* ! ================== ! User Info ! ================== ! */}
                    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-white/20">
                        {/* ! ================== ! User Info Content ! ================== ! */}
                        <div className="flex items-center gap-x-3">
                            {/* ! ================== ! User Profle Image ! ================== ! */}
                            <img src={userProfile} alt="usser profile" className="size-10 object-cover"/>
                            {/* ! ================== ! User Profle Personal ! ================== ! */}
                            <div className="">
                                <p className="font-Dana-Medium text-zinc-900 dark:text-zinc-100">امیرمهدی قدیری</p>
                                <p className="text-gray-400 mt-0.5 text-sm">09199891684</p>
                            </div>
                        </div>
                        {/* ! ================== ! Edit Button ! ================== ! */}
                        <button type="button" className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" id="edit" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-blue-500" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path>
                            </svg>
                        </button>
                    </div>
                    {/* ! ================== ! Menu ! ================== ! */}
                    <ul className="*:py-3 *:px-2 *:flex *:items-center *:gap-x-2 text-lg *:cursor-pointer *:rounded-lg space-y-2 mt-4 *:transition-all">
                        <li className="bg-blue-500/10 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" id="squares" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18z"></path>
                            </svg>
                            <span className="">داشبورد</span>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" id="shopping-bag" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"></path>
                            </svg>
                            <span className="">سفارش ها</span>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" id="heart" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"></path>
                            </svg>
                            <span className="">علاقه‌مندی ها</span>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                            </svg>
                            <span className="">آدرس ها</span>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" id="bell" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.9 23.9 0 0 0 5.454-1.31A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.3 24.3 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path>
                            </svg>
                            <span className="">پیام ها</span>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" id="cog" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87q.11.06.22.127c.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a8 8 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124q.108-.066.22-.128c.332-.183.582-.495.644-.869z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                            </svg>
                            <span className="">اطلاعات حساب</span>
                        </li>
                        <li className="text-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-left-end" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"></path>
                            </svg>
                            <span className="">خروج</span>
                        </li>
                    </ul>
                </div>
                {/* ! ================== ! Dashboard Content ! ================== ! */}
                <div className="col-span-12 lg:col-span-9">
                    {/* ! ================== ! Open Dashboard Menu Button ! ================== ! */}
                    <button onClick={openDashboardMenuHandler} type="button" className="flex lg:hidden items-center gap-x-1 rounded-lg text-white p-2 text-sm bg-blue-500 mr-2 mb-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" id="bars-3" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"></path>
                        </svg>
                        منوی کاربری
                    </button>
                    {/* ! ================== ! Account Overview Cards ! ================== ! */}
                    <div className="grid grid-cols-12 gap-4 *:col-span-12 md:*:col-span-4 *:bg-white dark:*:bg-gray-800 *:rounded-lg *:p-4 *:shadow">
                        <div className="flex items-center gap-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" id="wallet" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-9 text-blue-500" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"></path>
                            </svg>
                            <div className="">
                                <h2 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100">کیف‌پول</h2>
                                <p className="text-gray-500">موجودی : 0 تومان</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" id="shopping-bag" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-9 text-blue-500" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"></path>
                            </svg>
                            <div className="">
                                <h2 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100">سفارش‌ها</h2>
                                <p className="text-gray-500">10 سفارش</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" id="ticket" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-9 text-blue-500" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125z"></path>
                            </svg>
                            <div className="">
                                <h2 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100">تیکت‌ها</h2>
                                <p className="text-gray-500">5 تیکت</p>
                            </div>
                        </div>
                    </div>
                    {/* ! ================== ! Recent Order ! ================== ! */}
                    <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mt-5">
                        {/* ! ================== ! Recent Order TItle ! ================== ! */}
                        <div className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-10" fill="none" viewBox="0 0 64 64">
                                <path fill="url(#paint0_linear)" fillRule="evenodd" d="M32 8a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-13.333 8c0-7.364 5.97-13.333 13.333-13.333S45.333 8.637 45.333 16 39.363 29.333 32 29.333 18.667 23.363 18.667 16" clipRule="evenodd"></path>
                                <path fill="url(#paint1_linear)" d="M10.667 17.933a3 3 0 0 1 3-3h36.666a3 3 0 0 1 3 3v35.734a5 5 0 0 1-5 5H15.667a5 5 0 0 1-5-5z"></path>
                                <g filter="url(#filter0_i)">
                                    <path fill="url(#paint2_linear)" fillRule="evenodd" d="m21.333 37.12 3.584-3.413 4.48 4.266 10.752-10.24 3.584 3.414L29.397 44.8z" clipRule="evenodd"></path>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="21.333" x2="21.333" y1="5.333" y2="26.667" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#83D788"></stop>
                                        <stop offset="1" stopColor="#4DB051"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear" x1="10.667" x2="10.667" y1="14.933" y2="58.667" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#83D888"></stop>
                                        <stop offset="1" stopColor="#4CAF50"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear" x1="24.548" x2="21.544" y1="25.802" y2="43.225" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2E7B32"></stop>
                                        <stop offset="1" stopColor="#2E7B32"></stop>
                                    </linearGradient>
                                    <filter id="filter0_i" width="22.4" height="17.067" x="21.333" y="27.733" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                        <feOffset></feOffset>
                                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                                        <feColorMatrix values="0 0 0 0 0.0493759 0 0 0 0 0.339079 0 0 0 0 0.0644254 0 0 0 0.4 0"></feColorMatrix>
                                        <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                            <h2 className="font-Dana-DemiBold text-lg text-zinc-900 dark:text-zinc-100">سفارش های اخیر :</h2>
                        </div>
                        {/* ! ================== ! Recent Order Table ! ================== ! */}
                        <div className="relative mt-5 overflow-auto rounded-lg border border-gray-200 dark:border-gray-700">
                            <table className="w-full text-right text-sm">
                                <thead className="">
                                    <tr className="text-xs text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 *:px-6 *:py-3.5">
                                    <th className="">نام محصول</th>
                                    <th className="">تاریخ</th>
                                    <th className="">قیمت</th>
                                    <th className="">وضعیت</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="*:px-6 *:py-5 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-700 transition-all">
                                    <th className="flex items-center gap-x-2 text-gray-900 dark:text-white text-nowrap">
                                        <img src={`${import.meta.env.BASE_URL}/images/products/phone-image/11.png`} alt="iphone 16" className="size-10 object-cover"/>
                                        <p className="">گوشی موبایل اپل مدل iPhone 16</p>
                                    </th>
                                    <td className="">1402/11/11</td>
                                    <td className="">62,000,000 تومان</td>
                                    <td className="text-red-500 font-Dana-DemiBold">لغو شده</td>
                                </tr>
                                    <tr className="*:px-6 *:py-5 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-700 transition-all">
                                        <th className="flex items-center gap-x-2 text-gray-900 dark:text-white text-nowrap">
                                            <img src={`${import.meta.env.BASE_URL}/images/products/7.webp`} alt="macbook air" className="size-10 object-cover"/>
                                            <p className="">گوشی موبایل اپل مدل iPhone 16</p>
                                        </th>
                                        <td className="">1402/11/11</td>
                                        <td className="">62,000,000 تومان</td>
                                        <td className="text-yellow-500 font-Dana-DemiBold">درانتظار پرداخت</td>
                                    </tr>
                                    <tr className="*:px-6 *:py-5 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-700 transition-all">
                                        <th className="flex items-center gap-x-2 text-gray-900 dark:text-white text-nowrap">
                                            <img src={`${import.meta.env.BASE_URL}/images/products/5.webp`} alt="asus TUF" className="size-10 object-cover"/>
                                            <p className="">گوشی موبایل اپل مدل iPhone 16</p>
                                        </th>
                                        <td className="">1402/11/11</td>
                                        <td className="">62,000,000 تومان</td>
                                        <td className="text-green-500 font-Dana-DemiBold">پرداخت شده</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* ! ================== ! My Address ! ================== ! */}
                    <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mt-5 mb-8">
                        {/* ! ================== ! My Address Title ! ================== ! */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-2">
                                <img src={map} alt="map icon" className="size-8 object-cover"/>
                                <h2 className="font-Dana-Medium text-lg text-zinc-900 dark:text-zinc-100">آدرس های من:</h2>
                            </div>
                            <button type="button" className="flex items-center gap-x-1 text-blue-500 font-Dana-DemiBold">
                                <svg xmlns="http://www.w3.org/2000/svg" id="plus" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                                </svg>
                                آدرس جدید
                            </button>
                        </div>
                        {/* ! ================== ! Address Item List ! ================== ! */}
                        <ul className="mt-5 space-y-3">
                            <li className="border border-blue-300 dark:border-blue-400 p-4 rounded-lg">
                                <div className="flex items-center gap-x-1 text-blue-500 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                                    </svg>
                                    <h2 className="font-Dana-DemiBold">نام آدرس</h2>
                                </div>
                                <div className="space-y-1.5 text-gray-600 dark:text-gray-300 mt-3 mr-2">
                                    <p className="">استان تهران-بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک ۱۰</p>
                                    <p className="">کد پستی: 000000000</p>
                                    <p className="">گیرنده: امیرمهدی قدیری | ۰۹000000000</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;