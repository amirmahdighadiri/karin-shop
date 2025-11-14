import React, {memo} from 'react';

function CustomSwiperBtn({nextBtn , prevBtn}) {
    return (
        <div className="absolute -top-16.5 left-37 z-10 flex items-center gap-x-2">
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
        </div>
    );
}

export default memo(CustomSwiperBtn);