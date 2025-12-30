import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import useSwiperState from "../../hook/useSwiperState.jsx";
import {updateSwiperState} from "../../store/SwiperStore.jsx";

function ProductGallery({isOpenGallery}) {
    const [isEnd , setIsEnd] = useState(false);
    const [isBeginning , setIsBeginning] = useState(true);

    return (
        <div className={`relative w-full flex-center my-14`}>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.custom-next-gallery-btn',
                    prevEl: '.custom-prev-gallery-btn',
                }}
                onSlideChange={(event)=>{
                    setIsBeginning(event.isBeginning)
                    setIsEnd(event.isEnd)
                }}
                spaceBetween={10}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <img src={`${import.meta.env.BASE_URL}/images/products/phone-image/11.png`} alt="iphone 16" className="size-100 rounded-lg mx-auto"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${import.meta.env.BASE_URL}/images/products/phone-image/13.webp`} alt="iphone 16" className="size-100 rounded-lg mx-auto"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${import.meta.env.BASE_URL}/images/products/phone-image/12.webp`} alt="iphone 16" className="size-100 rounded-lg mx-auto"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${import.meta.env.BASE_URL}/images/products/phone-image/14.webp`} alt="iphone 16" className="size-100 rounded-lg mx-auto"/>
                </SwiperSlide>
            </Swiper>

            <div className="w-full absolute top-0 bottom-0 z-10 my-auto flex items-center justify-between gap-x-2 px-20">
                <button disabled={isBeginning} className={`custom-prev-gallery-btn size-10 flex-center dark:bg-gray-800 bg-white rounded-lg dark:text-white text-gray-800 ${isBeginning ? 'opacity-30' : 'opacity-100 hover:text-blue-600'}  transition-all shadow-lg cursor-pointer`} >
                    <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="-rotate-90 size-6 transition-all" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                    </svg>
                </button>
                <button disabled={isEnd} className={`custom-next-gallery-btn size-10 flex-center dark:bg-gray-800 bg-white rounded-lg dark:text-white text-gray-800 ${isEnd ? 'opacity-30' : 'opacity-100 hover:text-blue-600'}  transition-all shadow-lg cursor-pointer`} >
                    <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="rotate-90 size-6 transition-all" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                    </svg>

                </button>
            </div>
        </div>
    );
}

export default ProductGallery;