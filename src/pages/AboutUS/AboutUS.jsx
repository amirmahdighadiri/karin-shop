import {Link} from "react-router-dom";

// Images
import aboutPageimage from "../../assets/images/about/about-page.png";
import React from "react";

function AboutUs() {
    return (
        <section className="container">
            {/* ! ================== ! Beardcrumb  ! ================== ! */}
            <div className="flex items-center gap-x-2 mt-8 mr-4">
                <Link to="/" className="inline-flex items-center gap-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" id="home" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                    </svg>
                    <span className="pt-1 text-sm">صفحه اصلی</span>
                </Link>
                <span className="inline-flex items-center gap-x-1 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 9 4-4-4-4"></path>
                    </svg>
                    <span className="pt-1 text-sm">درباره ما</span>
                </span>
            </div>
            {/* ! ================== ! About Page Wrapper  ! ================== ! */}
            <div className="flex flex-col-reverse xl:flex-row items-start gap-10 shadow rounded-lg bg-white dark:bg-gray-800 p-4 mt-8">
                {/* ! ================== ! About Page Contnet  ! ================== ! */}
                <div className="flex-3">
                    {/* ! ================== ! About Page Title  ! ================== ! */}
                    <div className="inline-block mt-1.5">
                        <h2 className="font-Morabba text-3xl lg:text-4xl mb-0.5">
                            <Link to="/">
                                <span className="text-blue-500"> کارین </span>
                                <span className="text-gray-900 dark:text-white">شاپ</span>
                            </Link>
                        </h2>
                        <p className="block text-gray-400 text-sm text-center">خرید موبایل و لپ‌تاپ</p>
                    </div>
                    {/* ! ================== ! About Page Description  ! ================== ! */}
                    <p className="mt-5 text-gray-400 leading-10 text-justify">به دیجیتال مارکت کارین شاپ خوش آمدید! فروشگاهی تخصصی در حوزه موبایل، لپ‌تاپ و لوازم جانبی دیجیتال. ما در کارین شاپ با تکیه بر تجربه، دانش فنی و توجه به رضایت مشتری، به دنبال ارائه بهترین محصولات دیجیتال با کیفیت مناسب و خدمات حرفه‌ای هستیم.</p>
                    {/* ! ================== ! About Page Servies  ! ================== ! */}
                    <div className="mt-5">
                        <h3 className="font-Dana-DemiBold text-xl text-zinc-900 dark:text-zinc-100">خدمات ما</h3>
                        <ul className="text-gray-400 space-y-2 mt-5 *:flex *:items-center *:gap-x-2">
                             <li className="">
                                <span className="block size-2.5 bg-blue-500 rounded-full"></span>
                                <p className="">فروش انواع موبایل و لپ‌تاپ با برندهای معتبر با گارانتی رسمی و معتبر</p>
                            </li>
                             <li className="">
                                <span className="block size-2.5 bg-blue-500 rounded-full"></span>
                                <p className="">مشاوره تخصصی برای خرید بهترین انتخاب مطابق با بودجه و نیاز شما</p>
                            </li>
                             <li className="">
                                <span className="block size-2.5 bg-blue-500 rounded-full"></span>
                                <p className="">ارسال سریع و مطمئن به سراسر کشور با بسته‌بندی کامل و مرتب</p>
                            </li>
                        </ul>
                    </div>
                    {/* ! ================== ! About Page Goals  ! ================== ! */}
                    <div className="mt-5">
                        <h3 className="font-Dana-DemiBold text-xl text-zinc-900 dark:text-zinc-100">خدمات ما</h3>
                        <p className="text-gray-400 leading-10 mt-5 text-justify">هدف ما در کارین شاپ این است که به یکی از بهترین مراجع خرید محصولات دیجیتال کشور تبدیل شویم. ما به رضایتمندی مداوم مشتری، پشتیبانی شبانه‌روزی و ارائه بهترین تجربه کاربری در تلاشیم تا همیشه بهترین‌ها را با بهترین قیمت‌ها در اختیارتان قرار دهیم.</p>
                    </div>
                    {/* ! ================== ! Social Media Link  ! ================== ! */}
                    <div className="flex items-center gap-x-3 text-gray-400 mt-10 *:cursor-pointer">
                        <div className="flex items-center gap-x-2">
                            <span className="pt-1">KarinShop</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 48 48">
                                <g clipPath="url(#clip0_318_61)">
                                    <path fill="url(#paint0_linear_318_61)" d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24"></path>
                                    <path fill="#fff" fillRule="evenodd" d="M10.864 23.747q10.495-4.573 13.996-6.03c6.665-2.771 8.05-3.253 8.953-3.269.198-.003.642.046.93.28.242.196.31.462.341.65.032.186.072.611.04.944-.36 3.795-1.924 13.004-2.719 17.255-.336 1.798-.998 2.401-1.64 2.46-1.394.129-2.452-.92-3.802-1.806-2.112-1.384-3.305-2.246-5.356-3.597-2.37-1.562-.833-2.42.517-3.823.354-.367 6.494-5.952 6.613-6.459.015-.063.029-.3-.111-.424-.14-.125-.348-.082-.497-.049q-.318.073-10.124 6.692-1.436.986-2.602.961c-.857-.018-2.506-.485-3.731-.883-1.503-.488-2.698-.747-2.594-1.576q.082-.65 1.786-1.326" clipRule="evenodd"></path>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_318_61" x1="24" x2="24" y1="0" y2="47.644" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2AABEE"></stop>
                                        <stop offset="1" stopColor="#229ED9"></stop>
                                    </linearGradient>
                                    <clipPath id="clip0_318_61">
                                        <path fill="#fff" d="M0 0h48v48H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <span className="pt-1">KarinShop</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 134 134">
                                <path fill="url(#paint0_linear_301_18)" d="M110.042 31.022a7.99 7.99 0 0 0-7.99-7.994 7.994 7.994 0 0 0-7.994 7.994c0 4.406 3.587 7.977 7.994 7.977 4.406 0 7.99-3.57 7.99-7.977"></path>
                                <path fill="url(#paint1_linear_301_18)" d="M120.69 93.42c-.296 6.488-1.381 10.013-2.282 12.354-1.21 3.104-2.654 5.324-4.995 7.652-2.315 2.328-4.535 3.768-7.639 4.965-2.341.914-5.88 2.003-12.367 2.312-7.014.309-9.092.375-26.879.375-17.77 0-19.864-.066-26.878-.375-6.488-.309-10.01-1.398-12.35-2.312-3.121-1.197-5.324-2.637-7.652-4.965-2.345-2.328-3.788-4.548-4.982-7.652-.901-2.341-2.003-5.866-2.282-12.354-.342-7.014-.405-9.125-.405-26.875 0-17.786.063-19.881.405-26.895.28-6.488 1.38-10.01 2.282-12.37 1.194-3.101 2.637-5.308 4.982-7.636 2.328-2.324 4.53-3.768 7.651-4.978 2.342-.918 5.863-1.99 12.351-2.299 7.014-.309 9.109-.388 26.878-.388 17.787 0 19.865.08 26.879.388 6.488.31 10.026 1.381 12.367 2.299 3.104 1.21 5.324 2.654 7.639 4.978 2.341 2.328 3.785 4.535 4.995 7.636.901 2.36 1.986 5.882 2.282 12.37.325 7.014.404 9.109.404 26.895 0 17.75-.079 19.861-.404 26.875m11.979-54.316c-.326-7.09-1.444-11.933-3.104-16.152-1.69-4.376-3.956-8.086-7.665-11.795-3.693-3.693-7.402-5.958-11.779-7.668-4.235-1.644-9.062-2.776-16.155-3.085C86.873.062 84.608 0 66.529 0 48.465 0 46.183.062 39.09.404c-7.076.31-11.9 1.44-16.155 3.085-4.36 1.71-8.07 3.975-11.762 7.668-3.71 3.71-5.975 7.419-7.682 11.795C1.848 27.171.73 32.015.388 39.104.078 46.197 0 48.466 0 66.545c0 18.063.079 20.328.388 27.42.342 7.077 1.46 11.918 3.104 16.156 1.707 4.36 3.972 8.086 7.682 11.779 3.692 3.693 7.402 5.975 11.762 7.681 4.255 1.644 9.079 2.763 16.155 3.088 7.093.326 9.375.405 27.437.405 18.08 0 20.345-.079 27.438-.405 7.093-.325 11.92-1.444 16.155-3.088 4.377-1.706 8.086-3.988 11.779-7.681 3.709-3.693 5.975-7.419 7.665-11.779 1.66-4.238 2.778-9.079 3.104-16.155.326-7.093.404-9.358.404-27.421 0-18.079-.078-20.348-.404-27.44"></path>
                                <path fill="url(#paint2_linear_301_18)" d="M66.529 88.705c-12.243 0-22.177-9.918-22.177-22.16 0-12.262 9.934-22.193 22.176-22.193 12.246 0 22.193 9.93 22.193 22.193 0 12.242-9.947 22.16-22.193 22.16m0-56.348c-18.872 0-34.156 15.316-34.156 34.188 0 18.855 15.284 34.155 34.156 34.155 18.87 0 34.171-15.3 34.171-34.155 0-18.872-15.3-34.188-34.172-34.188"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_301_18" x1="1.2" x2="121.99" y1="131.698" y2="10.909" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FFD521"></stop>
                                        <stop offset="0.05" stopColor="#FFD521"></stop>
                                        <stop offset="0.501" stopColor="#F50000"></stop>
                                        <stop offset="0.95" stopColor="#B900B4"></stop>
                                        <stop offset="0.95" stopColor="#B900B4"></stop>
                                        <stop offset="1" stopColor="#B900B4"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_301_18" x1="1.2" x2="122.089" y1="131.863" y2="10.975" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FFD521"></stop>
                                        <stop offset="0.05" stopColor="#FFD521"></stop>
                                        <stop offset="0.501" stopColor="#F50000"></stop>
                                        <stop offset="0.95" stopColor="#B900B4"></stop>
                                        <stop offset="0.95" stopColor="#B900B4"></stop>
                                        <stop offset="1" stopColor="#B900B4"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_301_18" x1="1.232" x2="122.091" y1="131.867" y2="11.007" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FFD521"></stop>
                                        <stop offset="0.05" stopColor="#FFD521"></stop>
                                        <stop offset="0.501" stopColor="#F50000"></stop>
                                        <stop offset="0.95" stopColor="#B900B4"></stop>
                                        <stop offset="0.95" stopColor="#B900B4"></stop>
                                        <stop offset="1" stopColor="#B900B4"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* ! ================== ! Page Iamge  ! ================== ! */}
                <div className="flex-2 w-full">
                    <img src={aboutPageimage} alt="about page" className="h-160 w-full rounded-lg object-cover"/>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;