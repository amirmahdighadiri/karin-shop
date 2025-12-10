import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../context/AppContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import {NavLink, Outlet, useLocation} from "react-router-dom";
// Images
import userProfile from '../../assets/images/profile/user.png'
import WebTitle from "../../util/WebTitle.jsx";




function Dashboard() {

    const {isOpenDasboardMenu, setIsOpenDasboardMenu , setOverlay} = useContext(AppContext);
    const {logout} = useContext(AuthContext);
    const location = useLocation();

    useEffect(()=>{
        setIsOpenDasboardMenu(false)
    },[location.pathname])

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
    const logoutAccountHandler = (event)=>{
        event.preventDefault()
        logout()
    }

    return (
        <section className="container">
            <WebTitle title="کارین شاپ | حساب کاربری"/>
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
                    <ul className="space-y-2 mt-4">
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <NavLink to="/" className={({isActive})=> `flex items-center gap-x-2 py-3 px-2 text-lg cursor-pointer transition-all rounded-lg ${isActive ? 'bg-blue-500/10 text-blue-500' : ''}`} end>
                                <svg xmlns="http://www.w3.org/2000/svg" id="squares" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18z"></path>
                                </svg>
                                <span className="">داشبورد</span>
                            </NavLink>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <NavLink to="order" className={({isActive})=> `flex items-center gap-x-2 py-3 px-2 text-lg cursor-pointer transition-all rounded-lg ${isActive ? 'bg-blue-500/10 text-blue-500' : ''}`} end>
                                <svg xmlns="http://www.w3.org/2000/svg" id="shopping-bag" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"></path>
                                </svg>
                                <span className="">سفارش ها</span>
                            </NavLink>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <NavLink to="favorite" className={({isActive})=> `flex items-center gap-x-2 py-3 px-2 text-lg cursor-pointer transition-all rounded-lg ${isActive ? 'bg-blue-500/10 text-blue-500' : ''}`} end>
                                <svg xmlns="http://www.w3.org/2000/svg" id="heart" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"></path>
                                </svg>
                                <span className="">علاقه‌مندی ها</span>
                            </NavLink>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <NavLink to="address" className={({isActive})=> `flex items-center gap-x-2 py-3 px-2 text-lg cursor-pointer transition-all rounded-lg ${isActive ? 'bg-blue-500/10 text-blue-500' : ''}`} end>
                                <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                                </svg>
                                <span className="">آدرس ها</span>
                            </NavLink>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <NavLink to="message" className={({isActive})=> `flex items-center gap-x-2 py-3 px-2 text-lg cursor-pointer transition-all rounded-lg ${isActive ? 'bg-blue-500/10 text-blue-500' : ''}`} end>
                                <svg xmlns="http://www.w3.org/2000/svg" id="bell" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.9 23.9 0 0 0 5.454-1.31A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.3 24.3 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path>
                                </svg>
                                <span className="">پیام ها</span>
                            </NavLink>
                        </li>
                        <li className="text-zinc-900 dark:text-zinc-100 hover:text-blue-500">
                            <NavLink to="/" className={({isActive})=> `flex items-center gap-x-2 py-3 px-2 text-lg cursor-pointer transition-all rounded-lg ${isActive ? 'bg-blue-500/10 text-blue-500' : ''}`} end>
                                <svg xmlns="http://www.w3.org/2000/svg" id="cog" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87q.11.06.22.127c.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a8 8 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124q.108-.066.22-.128c.332-.183.582-.495.644-.869z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                </svg>
                                <span className="">اطلاعات حساب</span>
                            </NavLink>
                        </li>
                        <li className="text-red-400">
                            <button onClick={logoutAccountHandler} className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" id="arrow-left-end" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"></path>
                                </svg>
                                <span className="">خروج</span>
                            </button>
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
                    {/*<div className="grid grid-cols-12 gap-4 *:col-span-12 md:*:col-span-4 *:bg-white dark:*:bg-gray-800 *:rounded-lg *:p-4 *:shadow mb-5">*/}
                    {/*    <div className="flex items-center gap-x-4">*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" id="wallet" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-9 text-blue-500" viewBox="0 0 24 24">*/}
                    {/*            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"></path>*/}
                    {/*        </svg>*/}
                    {/*        <div className="">*/}
                    {/*            <h2 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100">کیف‌پول</h2>*/}
                    {/*            <p className="text-gray-500">موجودی : 0 تومان</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex items-center gap-x-4">*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" id="shopping-bag" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-9 text-blue-500" viewBox="0 0 24 24">*/}
                    {/*            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"></path>*/}
                    {/*        </svg>*/}
                    {/*        <div className="">*/}
                    {/*            <h2 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100">سفارش‌ها</h2>*/}
                    {/*            <p className="text-gray-500">10 سفارش</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex items-center gap-x-4">*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" id="ticket" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-9 text-blue-500" viewBox="0 0 24 24">*/}
                    {/*            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125z"></path>*/}
                    {/*        </svg>*/}
                    {/*        <div className="">*/}
                    {/*            <h2 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100">تیکت‌ها</h2>*/}
                    {/*            <p className="text-gray-500">5 تیکت</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/* ! ================== ! Dashboard Content ! ================== ! */}
                    <Outlet />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;