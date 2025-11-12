import React from 'react';
import {Link} from "react-router-dom";
import Tooltip from "../Tooltip/Tooltip.jsx";

function SecondProductBox({title, price, dicountPercent, score, todaySend, src,hoverSrc}) {
    return (
        <div className="h-full bg-white dark:bg-gray-800 px-4 pt-3 pb-2 rounded-xl shadow-lg group/image">
            {/* ! ================== ! TopBox ! ================== ! */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-x-2 dark:text-zinc-100 text-zinc-900">
                    <div className="relative size-7.5 flex-center border border-gray-300 dark:border-gray-700 rounded-full cursor-pointer group/tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" id="shopping-cart" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.1 60.1 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"></path>
                        </svg>
                        <Tooltip title="سید خرید" />
                    </div>
                    <div className="relative size-7.5 flex-center border border-gray-300 dark:border-gray-700 rounded-full cursor-pointer group/tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" id="heart" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"></path>
                        </svg>
                        <Tooltip title="علاقه مندی" />
                    </div>
                    <div className="relative size-7.5 flex-center border border-gray-300 dark:border-gray-700 rounded-full cursor-pointer group/tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" id="arrows-up-down" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path>
                        </svg>
                        <Tooltip title="مقایسه" />
                    </div>
                </div>
                <span className={`relative text-blue-500 dark:text-blue-400 font-Dana-Medium text-sm before:absolute before:-left-4 before:top-0 before:bottom-0 before:my-auto before:content-[''] before:w-1 before:h-8 before:rounded-r-lg before:bg-blue-500 dark:before:bg-blue-400`}>70% تخفیف‌</span>
            </div>
            {/* ! ================== ! Product Image ! ================== ! */}
            <Link to="/" className="flex-center *:transition-all *:duration-500">
                <img src={src} alt="" className="w-36 h-32 sm:w-44 lg:w-60 lg:h-52 object-cover opacity-100 group-hover/image:opacity-0 absolute" loading={"lazy"}/>
                <img src={hoverSrc} alt="" className="w-36 h-32 sm:w-44 lg:w-60 lg:h-52 object-cover opacity-0 group-hover/image:opacity-100" loading={"lazy"}/>
            </Link>
            {/* ! ================== ! Product Title ! ================== ! */}
            <Link to="/" className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 mt-1">
                {title}
            </Link>
            {/* ! ================== ! Product Price Wrapper ! ================== ! */}
            <div className="flex items-center justify-between text-zinc-900 dark:text-zinc-100 pt-4 border-t-2 dark:border-gray-700 border-gray-200 mt-2">
                <div
                    className="h-6 w-10 inline-flex items-center justify-center bg-blue-500 text-white rounded-xl text-xs pt-1">
                    70%
                </div>
                <span className="flex items-center gap-x-1 text-lg">
                                       {String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        <span className="text-xs">تومان</span>
                                    </span>
            </div>
        </div>
    );
}

export default SecondProductBox;