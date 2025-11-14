import React, {memo} from 'react';
import {Link} from "react-router-dom";

function SectionTitle({title, blueTitle , description , IconComponent}) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 justify-between">
            {/* ! ================== ! Title Content ! ================== ! */}
            <div className="flex items-center max-sm:justify-center gap-x-2 sm:gap-x-4 text-gray-800 dark:text-gray-50">
                {/* ! ================== ! Title Icon ! ================== ! */}
                <div className="size-12 flex-center rounded-lg shadow-lg bg-white dark:bg-gray-800">
                    {IconComponent && <IconComponent/>}
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
            </div>
        </div>
    );
}

export default memo(SectionTitle);