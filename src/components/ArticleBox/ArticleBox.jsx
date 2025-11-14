import React, {memo} from 'react';
import {Link} from "react-router-dom";

function ArticleBox({title , src, viweCount, createAT}) {
    return (
        <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm group">
            {/* ! ================== ! Article Image & Effect ! ================== ! */}
            <div className="relative rounded-lg rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}${src}`} alt="article" className="" loading={"lazy"}/>
                <div className="absolute inset-0 flex-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                    <Link to="/" className="flex items-center font-Dana-Medium rounded-lg border-2 border-white text-white px-2 py-1">
                        <span className="">ادامه مطالب</span>
                        <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 rotate-90" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </Link>
                </div>
            </div>
            {/* ! ================== ! Article Title & Details ! ================== ! */}
            <div className="">
                {/* ! ================== ! Title ! ================== ! */}
                <h3 className="font-Dana-DemiBold text-zinc-900 dark:text-gray-100 py-5 line-clamp-1">{title}</h3>
                {/* ! ================== ! Details ! ================== ! */}
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-1">
                    {/* ! ================== ! Create TIme ! ================== ! */}
                    <div className="flex items-center gap-x-1 text-blue-500 dark:text-sky-400">
                        <svg xmlns="http://www.w3.org/2000/svg" id="calendar" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12zM12 15h.008v.008H12zm0 2.25h.008v.008H12zM9.75 15h.008v.008H9.75zm0 2.25h.008v.008H9.75zM7.5 15h.008v.008H7.5zm0 2.25h.008v.008H7.5zm6.75-4.5h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm2.25-4.5h.008v.008H16.5zm0 2.25h.008v.008H16.5z"></path>
                        </svg>
                        <span className="text-sm pt-1">{createAT}</span>
                    </div>
                    {/* ! ================== ! Viwe Count ! ================== ! */}
                    <div className="flex items-center gap-x-1 text-gray-300">
                        <span className="font-Dana-DemiBold text-sm">{viweCount}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" id="eye" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1 1 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ArticleBox);