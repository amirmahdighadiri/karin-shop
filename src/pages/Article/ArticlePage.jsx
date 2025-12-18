import React, {useEffect, useState} from 'react';
import WebTitle from "../../util/WebTitle.jsx";
import {Link} from "react-router-dom";
import ArticleMiniBox from "../../components/ArticleBox/ArticleMiniBox.jsx";
import {articles} from "../../data.jsx";

function ArticlePage() {
    const [articleItem, setArticleItem] = useState(articles);
    return (
        <section className="container">
            <WebTitle title="کارین شاپ |  سوالات متداول"/>
            {/* ! ================== ! Beardcrumb ! ================== ! */}
            <div className="flex items-center gap-x-2 mt-8 mr-4">
                <Link to="/" className="inline-flex items-center gap-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" id="home" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                    </svg>
                    <span className="pt-1 text-sm">صفحه اصلی</span>
                </Link>
                <Link to="/" className="inline-flex items-center gap-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 9 4-4-4-4"></path>
                    </svg>
                    <span className="pt-1 text-sm">مقالات</span>
                </Link>
                <span className="inline-flex items-center gap-x-1 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 9 4-4-4-4"></path>
                    </svg>
                    <span className="pt-1 text-sm">جزئیات مفاله</span>
                </span>
            </div>
            {/* ! ================== ! Page Content ! ================== ! */}
            <div className="grid grid-cols-12 gap-x-4 mt-8">
                {/* ! ================== ! Article Content ! ================== ! */}
                <div className="col-span-12 xl:col-span-9 py-5 px-7 rounded-lg bg-white dark:bg-gray-800 shadow">
                    {/* ! ================== ! Article Title ! ================== ! */}
                    <div className="flex items-start justify-between">
                        <h2 className="font-Dana-DemiBold text-base md:text-3xl text-zinc-900 dark:text-zinc-100">بررسی گوشی گلکسی A26 سامسونگ</h2>
                        {/* ! ================== ! Share Button ! ================== ! */}
                        <div className="flex items-center gap-x-2 text-blue-500 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mb-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                            <span className="hidden">اشتراک گذاری</span>
                        </div>
                    </div>
                    {/* ! ================== ! Article Details ! ================== ! */}
                    <div className="flex items-center gap-x-2 md:gap-x-5 mt-5 font-Dana-DemiBold text-xs text-gray-500 *:flex *:items-center *:gap-x-1">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:block size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="flex items-center">
                                <span className="hidden md:block">دسته بندی :</span>
                                گوشی موبایل
                                <span className="block md:hidden mr-2">.</span>
                            </p>
                        </div>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:block size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <p className="flex items-center">
                                <span className="hidden md:block">توسط :</span>
                                امیرمهدی قدیری
                                <span className="block md:hidden mr-2">.</span>
                            </p>
                        </div>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:block size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                            </svg>
                            <p className="flex items-center">
                                <span className="hidden md:block">تاریخ انتشار :</span>
                                1404/05/20
                            </p>
                        </div>
                    </div>
                    {/* ! ================== ! Article Image ! ================== ! */}
                    <div className="mt-5">
                        <img src={`${import.meta.env.BASE_URL}/images/articles/samsung-galaxy-a36-.webp`}  alt="" className="rounded-lg"/>
                    </div>
                    {/* ! ================== ! Article Text Content ! ================== ! */}
                    <div className="text-gray-400 text-base lg:text-lg space-y-4 leading-10 mt-5 text-justify">
                        <p className="">گوشی گلکسی A32 یکی از میان‌رده‌های تازه‌وارد سامسونگ است که با طراحی ساده اما شیک، نمایشگری با کیفیت و امکاناتی مناسب، توانسته توجه علاقه‌مندان به گوشی‌های اقتصادی را به خود جلب کند. این گوشی با وجود قیمت مناسب، ویژگی‌هایی را ارائه می‌دهد که برای استفاده روزمره کاملاً کافی هستند.</p>
                        <h3 className="text-zinc-900 dark:text-zinc-100 text-xl">طراحی و صفحه نمایش:</h3>
                        <p className="">گلکسی A32 دارای بدنه‌ای از جنس پلاستیک با طراحی مینیمال است. نمایشگر 6.5 اینچی از نوع PLS LCD با رزولوشن +HD و نرخ نوسازی 90 هرتز، تجربه بصری روانی فراهم می‌کند. روشنایی مناسب صفحه باعث می‌شود در شرایط نوری مختلف نیز بتوان به‌راحتی با دستگاه کار کرد.</p>
                        <h3 className="text-zinc-900 dark:text-zinc-100 text-xl">مشخصات فنی:</h3>
                        <ul className="*:flex *:items-center *:gap-x-2">
                            <li className="">
                                <span className="block size-2.5 rounded-full bg-blue-500"></span>
                                <p className="">پردازنده: MediaTek Helio G80</p>
                            </li>
                            <li className="">
                                <span className="block size-2.5 rounded-full bg-blue-500"></span>
                                <p className="">رم: 4 یا 6 گیگابایت</p>
                            </li>
                            <li className="">
                                <span className="block size-2.5 rounded-full bg-blue-500"></span>
                                <p className="">حافظه داخلی: 64 یا 128 گیگابایت</p>
                            </li>
                            <li className="">
                                <span className="block size-2.5 rounded-full bg-blue-500"></span>
                                <p className="">باتری: 5000 میلی‌آمپر ساعت با شارژ 15 وات</p>
                            </li>
                        </ul>
                        <h3 className="text-zinc-900 dark:text-zinc-100 text-xl">دوربین و عملکرد کلی:</h3>
                        <p className="">سامسونگ در بخش دوربین از یک سنسور اصلی 50 مگاپیکسلی استفاده کرده که در نور کافی عملکرد مناسبی دارد. دوربین‌های کمکی شامل یک سنسور عمق‌سنج و ماکرو هستند. در کل برای ثبت تصاویر روزمره و شبکه‌های اجتماعی، این ترکیب قابل قبول است. عملکرد سخت‌افزاری دستگاه برای اپ‌های عمومی و بازی‌های سبک مناسب بوده و رابط کاربری One UI Core تجربه روانی را ارائه می‌دهد.</p>
                    </div>
                </div>
                {/* ! ================== ! Article Page Sidebar ! ================== ! */}
                <div className="col-span-12 xl:col-span-3 self-start mt-5">
                    {/* ! ================== ! New Article List Wrapper ! ================== ! */}
                    <div className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
                        {/* ! ================== ! New Article List Title ! ================== ! */}
                        <h4 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100 text-xl mb-3">جدید ترین مقالات :</h4>
                        {/* ! ================== ! New Article List ! ================== ! */}
                        <ul className="space-y-4">
                            {articleItem.slice(0,4).map(item=> (
                                    <li key={item.id}>
                                        <ArticleMiniBox {...item} />
                                    </li>
                                ))}
                        </ul>
                        {/* ! ================== ! Show More Button ! ================== ! */}
                        <Link to="/articles" className="w-full flex-center gap-x-2 py-2 bg-blue-500 text-zinc-100 rounded-lg mt-4">
                            مشاهده بیشتر
                            <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 rotate-90 transition-all duration-400 delay-150" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                            </svg>
                        </Link>
                    </div>
                    {/* ! ================== ! Article CateGory Wrapper ! ================== ! */}
                    <div className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 shadow mt-5">
                        {/* ! ================== ! Category Title ! ================== ! */}
                        <h4 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100 text-xl mb-3">دسته بندی :</h4>
                        {/* ! ================== ! Category List ! ================== ! */}
                        <ul className="space-y-5">
                            <li className="flex items-center justify-between text-zinc-900 dark:text-zinc-100">
                                <p className="flex items-center gap-x-1 text-lg">
                                    بررسی موبایل
                                    <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 rotate-90 transition-all duration-400 delay-150" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                    </svg>
                                </p>
                                <span className="px-2 py-0.5 bg-blue-500 rounded-full text-zinc-100 text-sm">12</span>
                            </li>
                            <li className="flex items-center justify-between text-zinc-900 dark:text-zinc-100">
                                <p className="flex items-center gap-x-1 text-lg">
                                   لپ تاپ
                                    <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 rotate-90 transition-all duration-400 delay-150" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                    </svg>
                                </p>
                                <span className="px-2 py-0.5 bg-blue-500 rounded-full text-zinc-100 text-sm">2</span>
                            </li>
                            <li className="flex items-center justify-between text-zinc-900 dark:text-zinc-100">
                                <p className="flex items-center gap-x-1 text-lg">
                                    هدفون وساعت
                                    <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 rotate-90 transition-all duration-400 delay-150" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                    </svg>
                                </p>
                                <span className="px-2 py-0.5 bg-blue-500 rounded-full text-zinc-100 text-sm">6</span>
                            </li>
                            <li className="flex items-center justify-between text-zinc-900 dark:text-zinc-100">
                                <p className="flex items-center gap-x-1 text-lg">
                                    تکنولوژی
                                    <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 rotate-90 transition-all duration-400 delay-150" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                    </svg>
                                </p>
                                <span className="px-2 py-0.5 bg-blue-500 rounded-full text-zinc-100 text-sm">12</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArticlePage;