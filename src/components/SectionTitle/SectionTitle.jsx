import React from 'react';
import {Link} from "react-router-dom";

function SectionTitle({title, blueTitle , description , children , nextBtn , prevBtn}) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 justify-between">
            {/* ! ================== ! Title Content ! ================== ! */}
            <div className="flex items-center max-sm:justify-center gap-x-2 sm:gap-x-4 text-gray-800 dark:text-gray-50">
                {/* ! ================== ! Title Icon ! ================== ! */}
                <div className="size-12 flex-center rounded-lg shadow-lg bg-white dark:bg-gray-800">
                    {children}
                </div>
                {/* ! ================== ! Title Text ! ================== ! */}
                <div className="">
                    <h3 className="text-xl md:text-2xl font-Morabba">
                        {title}
                        <span className="text-blue-600 dark:text-blue-500"> {blueTitle}</span>
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
                </div>
            </div>
            {/* ! ================== ! Show More Button ! ================== ! */}
            <div className="flex flex-row-reverse gap-x-2 items-center">
                <Link to="/" className="h-10 inline-flex items-center gap-x-1.5 px-2 md:px-x-3 bg-blue-600 text-white rounded-xl shrink-0">
                    <span className="text-sm md:text-base">مشاهده همه</span>
                    <span className="size-7 flex-center rounded-full bg-blue-500">
                         <svg xmlns="http://www.w3.org/2000/svg" id="arrow" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
                         </svg>
                    </span>
                </Link>
                {/* ! ================== ! Swiper Custom Navigation ! ================== ! */}

                {
                    nextBtn && prevBtn ?  <div className="w-full flex items-center gap-x-2">
                        <button className={`${prevBtn} size-10 flex-center dark:bg-gray-800 bg-white rounded-lg dark:text-white text-gray-800  transition-all shadow-lg cursor-pointer`} >
                            <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="-rotate-90 size-6 transition-all" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                            </svg>
                        </button>
                        <button className={`${nextBtn} size-10 flex-center dark:bg-gray-800 bg-white rounded-lg dark:text-white text-gray-800  transition-all shadow-lg cursor-pointer`} >
                            <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="rotate-90 size-6 transition-all" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                            </svg>

                        </button>
                    </div> : null
                }

            </div>
        </div>
    );
}

export default SectionTitle;