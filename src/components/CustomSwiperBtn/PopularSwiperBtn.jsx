import React, {useState} from 'react';
import useSwiperState from "../../hook/useSwiperState.jsx";

function PopularSwiperBtn() {
    const { isBeginning, isEnd } = useSwiperState();
    return (
        <div className="absolute z-10 top-0 bottom-0 right-1 left-1 my-auto flex items-center justify-between">
            <button
                className={`custom-prev-popular-btn size-10 flex-center border border-gray-200 dark:border-gray-700 dark:bg-gray-800 bg-white rounded-lg dark:text-white text-gray-800 ${isBeginning ? 'opacity-30' : 'opacity-100 hover:text-blue-600'} transition-all cursor-pointer`}
                disabled={isBeginning}>
                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor"
                     strokeWidth="1.5" className="-rotate-90 size-6 transition-all" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
            </button>
            <button
                className={`custom-next-popular-btn size-10 flex-center border border-gray-200 dark:border-gray-700 dark:bg-gray-800 bg-white rounded-lg dark:text-white text-gray-800 ${isEnd ? 'opacity-30' : 'opacity-100 hover:text-blue-600'} transition-all cursor-pointer`}
                disabled={isEnd}>
                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor"
                     strokeWidth="1.5" className="rotate-90 size-6 transition-all" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>

            </button>
        </div>
    );
}

export default PopularSwiperBtn;