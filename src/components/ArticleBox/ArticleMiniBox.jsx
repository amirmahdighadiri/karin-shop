import React from 'react';
import {Link} from "react-router-dom";

function ArticleMiniBox({title,src,createAT}) {
    return (
        <div className="flex items-center gap-x-3">
            <Link to="/articles">
                <img src={`${import.meta.env.BASE_URL}${src}`} alt="" className="w-35 h-20 object-cover rounded-lg"/>
            </Link>
            <div className="">
                <Link to="/articles">
                    <h5 className="text-zinc-900 dark:text-zinc-100 mb-3 line-clamp-1">{title}</h5>
                </Link>
                <p className="flex items-center gap-x-1 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mb-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg>
                    <span>{createAT}</span>
                </p>
            </div>
        </div>
    );
}

export default ArticleMiniBox;