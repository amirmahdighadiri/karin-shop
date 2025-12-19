import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import ProductBox from "../../components/ProductBox/ProductBox.jsx";
import SecondProductBox from "../../components/ProductBox/SecondProductBox.jsx";
import BrandCard from "../../components/BrandCard/BrandCard.jsx";
import {Link} from "react-router-dom";
import {category, prodcuts, brands , articles} from "../../data.jsx";
import React, {useContext, useEffect, useState} from "react";
import Timer from "../../util/Timer.jsx";
import {updateSwiperState} from "../../store/SwiperStore.jsx";
import ArticleBox from "../../components/ArticleBox/ArticleBox.jsx";
import DynamicIcon from "../../icon/DynamicIcon.jsx";
import CustomSwiperBtn from "../../components/CustomSwiperBtn/CustomSwiperBtn.jsx";
import PopularSwiperBtn from "../../components/CustomSwiperBtn/PopularSwiperBtn.jsx";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'
// Images
import banner1 from '../../assets/images/banner/HeroBanner/1.jpg'
import banner2 from '../../assets/images/banner/HeroBanner/2.jpg'
import banner3 from '../../assets/images/banner/HeroBanner/3.gif'
import banner4 from '../../assets/images/banner/HeroBanner/4.webp'
import banner5 from '../../assets/images/banner/DoubleBanners/1.webp'
import banner6 from '../../assets/images/banner/DoubleBanners/2.webp'
import Loader from "../../components/Loader/Loader.jsx";
import {AppContext} from "../../context/AppContext.jsx";
import WebTitle from "../../util/WebTitle.jsx";


function Home() {
    const [popularCategory, setPopularCategory] = useState(category);
    const [popularProducts, setPopularProducts] = useState([]);
    const [brandsItem, setBrandsItem] = useState(brands);
    const [articlesItem, setArticlesItem] = useState([]);
    const {isShowLoader, setIsShowLoader}=useContext(AppContext);

    useEffect(()=>{
        fetch("https://karin-shop-db.onrender.com/products").then((res)=> res.json()).then(data =>{
            setPopularProducts(data)
            setIsShowLoader(false)
        })
        fetch("https://karin-shop-db.onrender.com/articles").then((res)=> res.json()).then(data =>{
            setArticlesItem(data)
        })
    },[])


    return (
        <>
            <WebTitle title="کارین شاپ | خانه"/>
            {/* ! ================== ! Banner ! ================== ! */}
            <section className="relative w-full lg:w-auto px-3 lg:px-0 lg:container mt-4 lg:mt-10 group">
                <Swiper
                    modules={[Pagination, Autoplay, Navigation, EffectFade]}
                    className="h-52 md:h-96"
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    loop={true}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    effect="fade"
                    fadeEffect={{crossFade: true}}
                    speed={500}
                    navigation={{
                        nextEl: '.custom-next-banner-btn',
                        prevEl: '.custom-prev-banner-btn',
                    }}
                >
                    <SwiperSlide>
                        <Link to="/" className="overflow-hidden">
                            <img src={banner1} alt="banner" className="w-full h-full object-cover rounded-xl"
                                 loading={"lazy"}/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="overflow-hidden rounded-xl">
                            <img src={banner2} alt="banner" className="w-full h-full object-cover rounded-xl"
                                 loading={"lazy"}/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="overflow-hidden">
                            <img src={banner3} alt="banner" className="w-full h-full object-cover rounded-xl"
                                 loading={"lazy"}/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="overflow-hidden">
                            <img src={banner4} alt="banner" className="w-full h-full object-cover rounded-xl"
                                 loading={"lazy"}/>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                {/* ! ================== ! Swiper Custom Navigation ! ================== ! */}
                <div
                    className="absolute z-10 bottom-5 right-5 hidden lg:flex items-center gap-x-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                    <div
                        className="custom-prev-banner-btn flex-center size-9 rounded-full bg-white dark:bg-gray-800 dark:text-gray-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor"
                             strokeWidth="1.5" className="-rotate-90 size-5 transition-all" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </div>
                    <div
                        className="custom-next-banner-btn flex-center size-9 rounded-full bg-white dark:bg-gray-800 dark:text-gray-200 cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor"
                             strokeWidth="1.5" className="rotate-90 size-5 transition-all" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </div>
                </div>
            </section>
            {/* ! ================== ! Popular Category ! ================== ! */}
            <section className="w-full px-4 lg:px-0 lg:container mt-20">
                {/* ! ================== ! Section Title ! ================== ! */}
                <SectionTitle title="دسـته بندی هـای" blueTitle="محبوب" description="جدیدترین و بروزترین دسته بندی ها" IconComponent={()=> <DynamicIcon name="squares"/>} />
                {/* ! ================== ! Popular Category Banner ! ================== ! */}
                <div className="flex items-center justify-evenly flex-wrap gap-8 text-gray-800 dark:text-gray-300 mt-12">
                    {
                        popularCategory.map(item => (
                            <Link key={item.id} to="/" className="inline-flex flex-col items-center gap-y-1 group">
                                <img src={`${import.meta.env.BASE_URL}${item.src}`} alt="banner"
                                     className="size-25 lg:size-30 group-hover:opacity-90 group-hover:grayscale transition-all"/>
                                <span className="text-sm lg:text-lg line-clamp-1">{item.title}</span>
                            </Link>
                        ))
                    }
                </div>
                {/* ! ================== ! Popular Category Banner ! ================== ! */}
                <div className="relative w-full h-80 rounded-xl bg-blue-500 dark:bg-blue-700 p-4 mt-20">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={1.5}
                        navigation={{
                            nextEl: '.custom-next-popular-btn',
                            prevEl: '.custom-prev-popular-btn',
                        }}
                        className="h-full"
                        onSlideChange={(event) => {
                            updateSwiperState(event.isBeginning, event.isEnd)
                        }}
                        breakpoints={{
                            400: {
                                slidesPerView: 1.5,
                            },
                            640: {
                                slidesPerView: 2.5,
                            },
                            768: {
                                slidesPerView: 3.5,
                            },
                            1024: {
                                slidesPerView: 4.5,
                            },
                            1280: {
                                slidesPerView: 5.5
                            }
                        }}
                    >
                        <SwiperSlide>
                            <Timer />
                        </SwiperSlide>
                        {
                            popularProducts.map(product => (
                                <SwiperSlide key={product.id}>
                                    <ProductBox {...product}/>
                                </SwiperSlide>
                            ))
                        }
                        <SwiperSlide>
                            <Link to="/"
                                  className="w-full h-full flex flex-col items-center justify-center gap-y-1 text-blue-500 bg-white dark:bg-gray-800 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" id="arrow-left-circle" fill="none"
                                     stroke="currentColor" strokeWidth="1.5" className="size-10" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path>
                                </svg>
                                <span className="">مشاهده همه</span>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                    {/* ! ================== ! Swiper Custom Navigation ! ================== ! */}
                    <PopularSwiperBtn />
                </div>
            </section>
            {/* ! ================== ! New Products ! ================== ! */}
            <section className="w-full px-4 lg:px-0 lg:container mt-10 lg:mt-20">
                {/* ! ================== ! Section Title ! ================== ! */}
                <SectionTitle title="جدید ترین" blueTitle="محصولات" description="جدیدترین و بروزترین محصولات" IconComponent={()=> <DynamicIcon name="mobile"/>} prevBtn="custom-prev-latest-btn" nextBtn="custom-next-latest-btn"/>
                {/* ! ================== ! Products Wrapper ! ================== ! */}
                <div className="relative mt-5">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: '.custom-next-latest-btn',
                            prevEl: '.custom-prev-latest-btn',
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{delay: 3000, disableOnInteraction: false}}
                        className="h-full !py-5"
                        breakpoints={{
                            400: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            }
                        }}
                    >
                        {
                            popularProducts.map(product  => (
                                <SwiperSlide key={product.id}>
                                    <SecondProductBox {...product}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <CustomSwiperBtn nextBtn="custom-next-latest-btn" prevBtn="custom-prev-latest-btn" />
                </div>
                {/* ! ================== ! Banner ! ================== ! */}
                <div className="flex flex-col xl:flex-row items-center justify-center gap-5 mt-10 lg:mt-20">
                    <Link to="/" className="overflow-hidden rounded-xl">
                        <img src={banner5} alt="banner" className="hover:scale-110 transition-all" loading={"lazy"}/>
                    </Link>
                    <Link to="/" className="overflow-hidden rounded-xl">
                        <img src={banner6} alt="banner" className="hover:scale-110 transition-all" loading={"lazy"}/>
                    </Link>
                </div>
            </section>
            {/* ! ================== ! Top Seller ! ================== ! */}
            <section className="w-full px-4 lg:px-0 lg:container mt-10 lg:mt-20">
                {/* ! ================== ! Section Title ! ================== ! */}
                <SectionTitle title="محصولات" blueTitle="پرفروش" description="جدیدترین و بروزترین محصولات" IconComponent={()=> <DynamicIcon name="mobile"/>} prevBtn="custom-prev-topSeller-btn" nextBtn="custom-next-topSeller-btn" />
                {/* ! ================== ! Products Wrapper ! ================== ! */}
                <div className="relative mt-5">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: '.custom-next-topSeller-btn',
                            prevEl: '.custom-prev-topSeller-btn',
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{delay: 3000, disableOnInteraction: false}}
                        className="h-full !py-5"
                        breakpoints={{
                            400: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            }
                        }}
                    >
                        {
                            popularProducts.map(product => (
                                <SwiperSlide key={product.id}>
                                    <SecondProductBox {...product}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <CustomSwiperBtn nextBtn="custom-next-topSeller-btn" prevBtn="custom-prev-topSeller-btn" />
                </div>
            </section>
            {/* ! ================== ! Popular Brands ! ================== ! */}
            <section className="w-full px-4 lg:px-0 lg:container mt-10 lg:mt-20">
                {/* ! ================== ! Section Title ! ================== ! */}
                <SectionTitle title="محبوب‌ترین" blueTitle="برندها" description="جدیدترین و بروزترین برندها" IconComponent={()=> <DynamicIcon name="checkBadge"/>} prevBtn="custom-prev-popularBrand-btn" nextBtn="custom-next-popularBrand-btn"/>
                {/* ! ================== ! Brands Item Wrapper ! ================== ! */}
                <div className="relative mt-5">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: '.custom-next-brands-btn',
                            prevEl: '.custom-prev-brands-btn',
                        }}
                        spaceBetween={30}
                        slidesPerView={1.5}
                        loop={true}
                        autoplay={{delay: 3000, disableOnInteraction: false}}
                        className="h-full !py-5"
                        breakpoints={{
                            400: {
                                slidesPerView: 2.5,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 5,
                            }
                        }}
                    >
                        {
                            brandsItem.map(brand => (
                                <SwiperSlide key={brand.id}>
                                    <BrandCard {...brand}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <CustomSwiperBtn nextBtn="custom-next-brands-btn" prevBtn="custom-prev-brands-btn" />
                </div>
            </section>
            {/* ! ================== ! Article ! ================== ! */}
            <section className="w-full px-4 lg:px-0 lg:container mt-10 lg:mt-20">
                {/* ! ================== ! Section Title ! ================== ! */}
                <SectionTitle title="محبوب‌ترین" blueTitle="مقالات" description="جدیدترین و بروزترین مقالات" IconComponent={()=> <DynamicIcon name="checkBadge"/>} prevBtn="custom-prev-article-btn" nextBtn="custom-next-article-btn"/>
                {/* ! ================== ! Article Items ! ================== ! */}
                <div className="relative mt-5">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.custom-next-article-btn',
                            prevEl: '.custom-prev-article-btn',
                        }}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={1}
                        className="h-full !py-5"
                        breakpoints={{
                            400: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            }
                        }}
                    >
                        {
                            articlesItem.map(article => (
                                <SwiperSlide key={article.id}>
                                    <ArticleBox {...article} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <CustomSwiperBtn nextBtn="custom-next-article-btn" prevBtn="custom-prev-article-btn" />
                </div>
            </section>
            {/* ! ================== ! Services ! ================== ! */}
            <section className="w-full px-4 lg:px-0 lg:container mt-10 lg:mt-20">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-col gap-y-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="54" fill="none" viewBox="0 0 55 54">
                            <path fill="#E6123D" fillRule="evenodd" d="m29.95 13.5 16.11 5.035v7.884l-5.33 1.735V20.66l-16.772-5.346z" clipRule="evenodd"></path>
                            <path fill="#424750" d="m30.716 13.48 16.214 5.182c.35.111.587.436.587.803v6.842a.84.84 0 0 1-.562.795l-1.585.56a.844.844 0 1 1-.562-1.591l1.022-.361V20.08l-18.056-5.769c-.774-.247-.786-1.338-.017-1.602l5.94-2.033a.84.84 0 0 1 .528-.007l18.9 5.964c.35.111.59.437.59.805v20.575a.84.84 0 0 1-.59.805l-18.9 5.978a.84.84 0 0 1-.511 0l-18.665-5.98a.84.84 0 0 1-.586-.803V35.23a.844.844 0 1 1 1.687 0v2.17l17.822 5.709 18.055-5.712V18.057l-18.045-5.694z"></path>
                            <path fill="#424750" d="M52.616 16.746a.844.844 0 1 1 .51 1.609l-18.9 5.978a.84.84 0 0 1-.51 0l-14.424-4.587a.844.844 0 1 1 .511-1.608l14.168 4.506z"></path>
                            <path fill="#424750" d="M42.392 26.82a.844.844 0 0 1 .53 1.602l-2.081.687a.844.844 0 0 1-1.109-.802v-6.225l-18.055-5.769c-.779-.248-.785-1.348-.009-1.604l7.088-2.347a.844.844 0 0 1 .53 1.601l-4.625 1.532 16.172 5.168c.35.111.587.436.587.803v5.674z"></path>
                            <path fill="#424750" d="M16.145 18.205v4.066a.844.844 0 0 1-1.687 0v-4.686c0-.368.24-.694.591-.805l6.704-2.105a.844.844 0 0 1 .505 1.61z"></path>
                            <path fill="#19BFD3" d="M23.272 24.131a.844.844 0 1 1 0 1.688H8.095a.844.844 0 0 1 0-1.688zM14.834 27.844a.844.844 0 0 1 0 1.687H1.684a.844.844 0 1 1 0-1.687z"></path>
                            <circle cx="5.564" cy="24.975" r="0.844" fill="#19BFD3"></circle>
                            <circle cx="7.927" cy="32.4" r="0.844" fill="#19BFD3"></circle>
                            <path fill="#19BFD3" d="M18.884 31.556a.844.844 0 0 1 0 1.688h-8.426a.844.844 0 1 1 0-1.688zM27.322 9.281a.844.844 0 1 1 0 1.688H14.17a.844.844 0 0 1 0-1.688zM14.16 13.331a.844.844 0 0 1 0 1.688H7.757a.844.844 0 1 1 0-1.688z"></path>
                            <path fill="#424750" d="M34.927 43.917a.844.844 0 0 1-1.687 0v-4.173a.844.844 0 0 1 1.687 0zM34.927 36.353a.844.844 0 0 1-1.687 0V24.3a.844.844 0 0 1 1.687 0z"></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-300 text-sm">امکان تحویل اکسپرس</span>
                    </div>
                    <div className="flex flex-col gap-y-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none" viewBox="0 0 54 54">
                            <path fill="#424750" fillRule="evenodd" d="m41.93 29.672-.023-.152c-.17-1.108-.182-1.535-.057-2 .118-.438.34-.79 1.029-1.638.931-1.148 1.165-1.579 1.165-2.257s-.234-1.11-1.165-2.256l-.075-.093c-.609-.751-.84-1.125-.954-1.546-.086-.319-.102-.69-.053-1.188.021-.207.046-.387.11-.811.22-1.434.207-1.899-.122-2.461-.324-.554-.766-.828-2.014-1.31l-.102-.04c-1.044-.402-1.42-.601-1.756-.933-.335-.332-.536-.704-.942-1.737l-.04-.101c-.487-1.236-.764-1.674-1.323-1.994-.541-.31-1.065-.332-2.383-.137l-.13.02c-.4.06-.58.084-.787.104-.506.05-.882.034-1.205-.052-.444-.117-.8-.336-1.657-1.019-1.158-.921-1.593-1.152-2.277-1.152-.599 0-1.113.248-1.945.89l-.332.262c-.858.682-1.213.902-1.657 1.02-.47.123-.902.11-2.021-.058-1.448-.217-1.916-.204-2.484.121-.577.331-.829.735-1.363 2.095-.406 1.033-.607 1.406-.942 1.738-.307.303-.708.524-1.522.842l-.234.09-.102.04c-1.248.482-1.69.757-2.014 1.31-.314.537-.335 1.056-.138 2.362l.02.128c.06.396.085.575.105.78.05.5.034.871-.052 1.19-.12.441-.344.795-1.076 1.697l-.217.27c-.65.825-.901 1.335-.901 1.929 0 .593.25 1.103.9 1.926.063.081.127.16.265.33.689.849.91 1.2 1.029 1.64.086.318.102.69.052 1.188-.02.207-.045.387-.11.81-.22 1.434-.206 1.899.123 2.462.323.553.766.828 2.014 1.31l.102.039c1.044.402 1.42.601 1.755.933s.537.704.942 1.737l.04.101c.487 1.236.765 1.674 1.324 1.994.541.31 1.065.332 2.383.137l.13-.02c.4-.06.582-.084.79-.104.19-.019.357-.028.512-.028.261 0 .487.026.69.08.443.117.799.336 1.656 1.019 1.16.921 1.594 1.152 2.278 1.152s1.118-.23 2.277-1.152l.093-.075c.76-.602 1.138-.831 1.564-.944.47-.124.901-.111 2.02.057 1.449.217 1.917.204 2.484-.121.578-.331.83-.735 1.364-2.095.406-1.033.607-1.406.942-1.738.335-.331.711-.53 1.755-.933l.102-.039c1.249-.482 1.691-.757 2.014-1.31.314-.537.336-1.057.147-2.31m.384-6.047c0 .143-.215.482-.783 1.18-.863 1.065-1.156 1.545-1.352 2.272-.202.749-.192 1.325.022 2.723l.019.126c.107.707.12 1.106.068 1.195-.06.101-.42.291-1.145.571l-.1.039c-1.302.501-1.806.777-2.352 1.318-.547.541-.826 1.04-1.332 2.329-.319.811-.507 1.17-.617 1.232-.098.056-.509.038-1.36-.09-1.39-.208-1.97-.218-2.725-.018-.706.187-1.23.495-2.198 1.263l-.095.075c-.707.563-1.049.776-1.195.776s-.488-.213-1.195-.776c-1.075-.855-1.56-1.144-2.294-1.338a4.4 4.4 0 0 0-1.135-.138 7 7 0 0 0-.683.036 17 17 0 0 0-.93.124l-.127.019c-.715.106-1.12.118-1.21.067-.103-.06-.295-.415-.578-1.133l-.039-.1c-.506-1.288-.785-1.787-1.332-2.328-.546-.541-1.05-.817-2.351-1.318l-.1-.039c-.726-.28-1.086-.47-1.146-.572-.056-.097-.037-.506.096-1.372.065-.43.092-.629.116-.87.07-.704.042-1.267-.103-1.801-.197-.73-.492-1.212-1.398-2.328-.091-.113-.149-.184-.204-.255-.356-.45-.533-.757-.533-.869s.178-.42.535-.872c.057-.073.116-.146.248-.31.864-1.063 1.156-1.544 1.353-2.27.144-.535.173-1.098.102-1.804a17 17 0 0 0-.124-.92l-.02-.125c-.106-.707-.119-1.107-.067-1.195.06-.101.42-.291 1.145-.571l.1-.04.242-.093c1.05-.41 1.606-.725 2.11-1.224.546-.541.825-1.04 1.332-2.329.318-.811.507-1.17.616-1.232.1-.056.51-.038 1.36.09 1.389.208 1.97.217 2.725.018.738-.195 1.223-.487 2.35-1.384l.257-.201c.457-.353.767-.529.882-.529.146 0 .488.213 1.195.776 1.075.854 1.56 1.144 2.293 1.338.54.143 1.108.171 1.821.101.245-.024.447-.05.93-.123l.126-.019c.714-.106 1.119-.118 1.209-.067.103.06.294.415.577 1.133l.04.1c.506 1.289.785 1.787 1.331 2.328.547.541 1.05.817 2.352 1.319l.1.038c.726.28 1.086.47 1.145.572.057.097.038.506-.095 1.372-.066.43-.093.63-.117.87-.07.705-.041 1.267.103 1.801.189.7.5 1.22 1.276 2.178l.076.093c.568.7.783 1.038.783 1.181" clipRule="evenodd"></path>
                            <path fill="#E6123D" fillRule="evenodd" d="M27.506 34.425c5.872 0 10.632-4.684 10.632-10.462 0-5.779-4.76-10.463-10.632-10.463s-10.631 4.684-10.631 10.462c0 5.779 4.76 10.463 10.631 10.463m6.538-16.7a.93.93 0 0 0-1.29.203l-7.485 10.22-3.521-2.772a.93.93 0 0 0-1.298.148.91.91 0 0 0 .15 1.287l4.275 3.365a.93.93 0 0 0 1.322-.179l8.052-10.992a.91.91 0 0 0-.205-1.28" clipRule="evenodd"></path>
                            <path fill="#424750" d="M27.506 12.825c.386 0 .698.308.698.688s-.312.687-.698.687c-5.473 0-9.91 4.37-9.91 9.763 0 5.391 4.437 9.762 9.91 9.762 5.474 0 9.91-4.37 9.91-9.763 0-.38.313-.687.699-.687s.697.308.697.688c0 6.15-5.061 11.137-11.306 11.137S16.2 30.114 16.2 23.962c0-6.15 5.062-11.137 11.306-11.137"></path>
                            <path fill="#19BFD3" d="M35.593 39.557c0-.411.343-.745.766-.745s.766.334.766.745v6.948c0 .48-.46.834-.94.725l-8.612-1.946-8.748 1.947c-.48.107-.937-.248-.937-.726v-4.632c0-.411.342-.744.766-.744.423 0 .766.333.766.744v3.698l7.984-1.777a.8.8 0 0 1 .344 0l7.845 1.774zM18.731 38.813a.85.85 0 0 0-.596.247.85.85 0 0 0-.248.597c0 .221.09.439.248.597a.85.85 0 0 0 1.193 0 .85.85 0 0 0 .247-.597.85.85 0 0 0-.247-.597.85.85 0 0 0-.597-.248"></path>
                            <path fill="#424750" d="M30.206 12.825a.85.85 0 0 0-.596.247.85.85 0 0 0-.247.598c0 .22.09.438.247.596a.85.85 0 0 0 1.193 0 .85.85 0 0 0 .247-.596c0-.223-.09-.44-.247-.598a.85.85 0 0 0-.597-.247"></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-300 text-sm">ضمانت اصل بودن کالا</span>
                    </div>
                    <div className="flex flex-col gap-y-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="54" fill="none" viewBox="0 0 55 54">
                            <path fill="#E6123D" fillRule="evenodd" d="m23.81 9.511 16.11 5.035v7.884l-5.33 1.735v-7.493L17.82 11.325z" clipRule="evenodd"></path>
                            <path fill="#424750" fillRule="evenodd" d="M47.247 13.319a.7.7 0 0 0-.219-.367.9.9 0 0 0-.26-.177C46.744 12.761 28 6.79 28 6.79a.85.85 0 0 0-.515 0L8.792 12.738a.85.85 0 0 0-.595.809v20.392c0 .371.241.699.595.81l6.565 2.22c.167.053.548-1.482.548-1.482l-6.008-2.169v-19.15l5.665-1.802 15.889 5.056-3.71 1.18-14.19-4.513a.85.85 0 1 0-.516 1.62l13.856 4.407v10.099a.85.85 0 1 0 1.699 0v-10.1l4.815-1.529v5.637a.85.85 0 0 0 1.105.81l1.982-.632a.85.85 0 0 0-.515-1.62l-.875.279v-5.013l4.39-1.397v5.013l-.966.307a.85.85 0 0 0 .51 1.62l1.558-.496a.85.85 0 0 0 .595-.81v-6.178l4.395-1.397v18.608l-1.105.353a.85.85 0 0 0 .463 1.635c.016-.004 1.746-.556 1.746-.556a.85.85 0 0 0 .595-.81V13.547a.9.9 0 0 0-.036-.228M34.254 16.53l-15.89-5.056 3.287-1.046 15.89 5.056zm-9.8-6.994 15.889 5.057 3.286-1.046L27.74 8.49z" clipRule="evenodd"></path>
                            <path fill="#424750" d="M12.596 28.013a.79.79 0 0 0-.792.79v5.75a.791.791 0 0 0 1.583 0v-5.75a.79.79 0 0 0-.791-.79M12.595 25.65a.8.8 0 0 0-.559.232.8.8 0 0 0-.232.56.8.8 0 0 0 .232.56.796.796 0 0 0 1.119 0 .8.8 0 0 0 .231-.56.8.8 0 0 0-.231-.56.8.8 0 0 0-.56-.232M15.633 35.438a.8.8 0 0 0-.56.231.8.8 0 0 0-.231.56.8.8 0 0 0 .231.56.797.797 0 0 0 1.119 0 .8.8 0 0 0 .232-.56.8.8 0 0 0-.232-.56.8.8 0 0 0-.56-.231"></path>
                            <path fill="#19BFD3" d="M41.335 24.796a.85.85 0 0 0-.85.85v8.858a7.656 7.656 0 0 1-7.647 7.647H22.642a.85.85 0 0 0-.85.85v1.766l-6.165-4.315 6.165-4.316v1.767c0 .469.38.85.85.85h7.647a5.103 5.103 0 0 0 5.098-5.099v-.361a.85.85 0 0 0-1.699 0v.361a3.4 3.4 0 0 1-3.399 3.399h-6.797v-2.55a.85.85 0 0 0-1.337-.695l-8.497 5.948a.85.85 0 0 0 0 1.392l8.497 5.947a.85.85 0 0 0 1.337-.695v-2.55h9.346a9.36 9.36 0 0 0 9.347-9.346v-8.858a.85.85 0 0 0-.85-.85"></path>
                            <path fill="#E6123D" fillRule="evenodd" d="M14.842 20.588h8.499v2.2L18.884 33.75H16.14l4.325-10.68h-5.622z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-300 text-sm">ضمانت بازگشت کالا</span>
                    </div>
                    <div className="flex flex-col gap-y-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="54" fill="none" viewBox="0 0 55 54">
                            <path fill="#E6123D" fillRule="evenodd" d="M39.495 36.385a5.074 5.074 0 1 0 0-10.148z" clipRule="evenodd"></path>
                            <path fill="#424750" fillRule="evenodd" d="M40.301 35.501V27.12a4.275 4.275 0 0 1 3.461 4.19 4.274 4.274 0 0 1-3.46 4.191m.406-24.083c-3.01-3.01-6.997-4.668-11.226-4.668s-8.216 1.658-11.226 4.668a16 16 0 0 0-2.83 3.817c-.474 1.294 1.055 1.61 1.425.75 2.398-4.53 7.16-7.622 12.631-7.622 7.875 0 14.281 6.407 14.281 14.281v4.627a5.86 5.86 0 0 0-4.267-1.841.807.807 0 0 0-.807.806v10.149c0 .446.36.807.807.807 3.212 0 5.83-2.59 5.878-5.791q.001-.015.002-8.757c0-4.228-1.657-8.215-4.668-11.226M43.905 36.304a.79.79 0 0 0-.55.227.79.79 0 0 0-.228.552c0 .203.083.404.228.55a.78.78 0 0 0 .55.227.78.78 0 0 0 .55-.227.79.79 0 0 0 .228-.55.78.78 0 0 0-.228-.552.79.79 0 0 0-.55-.227M32.252 44.02l1.145-.243.243 1.145-1.144.243zm11.211-5.18a.807.807 0 0 0-1.102.294c-1.566 2.71-4.027 4.575-7.147 5.429l-.406-1.91a.807.807 0 0 0-.957-.622l-2.723.579a.807.807 0 0 0-.622.957l.58 2.723c.092.436.52.714.956.621l2.723-.578c3.953-.84 7.063-3.05 8.993-6.391a.807.807 0 0 0-.295-1.103" clipRule="evenodd"></path>
                            <path fill="#19BFD3" fillRule="evenodd" d="M11.847 37.462a2.74 2.74 0 0 1-2.739-2.74V20.362a2.74 2.74 0 0 1 2.74-2.74h19.728a2.74 2.74 0 0 1 2.739 2.74v18.052a1.743 1.743 0 0 1-3.096 1.099l-1.664-2.05zm0-18.346c-.687 0-1.245.557-1.245 1.245v14.362c0 .687.558 1.245 1.245 1.245h18.42l2.112 2.602a.249.249 0 0 0 .442-.157V20.361c0-.688-.557-1.245-1.245-1.245z" clipRule="evenodd"></path>
                            <path fill="#424750" fillRule="evenodd" d="M26.3 26.765h5.021v1.306l-2.633 6.51h-1.622l2.556-6.343H26.3zm-1.98-.14v1.43h-.833v1.328h-1.544v-1.328h-3.678v-1.43l2.678-5.214h1.645l-2.667 5.214h2.021v-1.853h1.545v1.853zm-12.085 2.758v-1.15l2.655-2.747c.5-.524.889-1.038.889-1.563 0-.625-.422-1.016-1.011-1.016-.6 0-1.045.357-1.3.916l-1.289-.76c.5-1.116 1.511-1.652 2.567-1.652 1.333 0 2.566.893 2.566 2.456 0 .95-.544 1.765-1.278 2.501l-1.522 1.53h2.922v1.485z" clipRule="evenodd"></path>
                            <path fill="#E6123D" fillRule="evenodd" d="m28.002 21.687-6.938 12.894h.672l6.933-12.894z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-300 text-sm">پشتیبانی 24 ساعته</span>
                    </div>
                    <div className="hidden lg:flex flex-col gap-y-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="54" fill="none" viewBox="0 0 55 54">
                            <path fill="#E6123D" d="M18.377 46.384h-7.579a1.58 1.58 0 0 1-1.579-1.58V31.937c0-.872.707-1.58 1.58-1.58h7.579c.872 0 1.578.708 1.578 1.58v12.869a1.58 1.58 0 0 1-1.579 1.579"></path>
                            <path fill="#424750" d="M14.588 42.436a.8.8 0 0 0-.558.231.8.8 0 0 0-.232.559c0 .207.085.411.232.558s.35.231.558.231a.8.8 0 0 0 .558-.231.8.8 0 0 0 .231-.558.8.8 0 0 0-.231-.559.8.8 0 0 0-.558-.23M44.941 21.974a.8.8 0 0 0-.558.231.8.8 0 0 0-.231.559c0 .207.084.411.231.558s.35.231.558.231a.794.794 0 0 0 .79-.79.794.794 0 0 0-.79-.789"></path>
                            <path fill="#424750" fillRule="evenodd" d="M48.063 15.863a.79.79 0 0 1 .79.79v29.73a.79.79 0 0 1-.79.79H24.23c-.962 0-1.89-.348-2.615-.98l-.939-.818a2.37 2.37 0 0 1-2.298 1.798h-7.58a2.37 2.37 0 0 1-2.368-2.368v-12.87a2.37 2.37 0 0 1 2.368-2.368h7.58c.81 0 1.528.41 1.955 1.034l2.507-2.508c.283-.282.863-.76 1.855-1.29 1.514-.808 3.157-1.386 3.157-1.386v-8.764a.79.79 0 0 1 .789-.79zM10.798 45.594h7.58a.79.79 0 0 0 .789-.79V31.937a.79.79 0 0 0-.79-.79h-3v9.095a.79.79 0 0 1-1.579 0v-9.095h-3a.79.79 0 0 0-.79.79v12.869c0 .435.355.79.79.79m11.855-.59-1.907-1.663V32.42l2.557-2.595s1.086-.94 1.818-1.353c1.541-.87 2.728-1.211 2.728-1.211v2.122l-.765 2.036a.79.79 0 0 0 .765.594h13.256a1.107 1.107 0 0 1 0 2.211h-7.953a.79.79 0 0 0 0 1.58h10.425c.61 0 1.105.495 1.105 1.105s-.496 1.105-1.105 1.105H33.152a.79.79 0 0 0 0 1.58h8.735a1.107 1.107 0 0 1 0 2.21h-8.735a.79.79 0 0 0 0 1.579h6.042a1.107 1.107 0 0 1 0 2.21H24.23c-.58 0-1.14-.21-1.577-.59m19.226-.515c0 .394-.087.768-.24 1.105h5.634V17.778H29.432v12.658h11.674a2.687 2.687 0 0 1 2.685 2.684c0 .394-.086.768-.213 1.105q.297 0 .575.063v-8.984a.79.79 0 0 1 1.579 0V35.31c.333.447.53 1 .53 1.6a2.69 2.69 0 0 1-1.974 2.588c.182.362.285.77.285 1.201a2.687 2.687 0 0 1-2.685 2.685h-.248c.153.337.24.71.24 1.105" clipRule="evenodd"></path>
                            <path fill="#424750" fillRule="evenodd" d="M32.056 17.55h4.388v13.162h-4.388z" clipRule="evenodd"></path>
                            <path fill="#19BFD3" fillRule="evenodd" d="M6.573 15.019c0 2.94 2.494 7.25 7.457 13.087a.844.844 0 0 0 1.286 0c4.963-5.837 7.457-10.147 7.457-13.087a8.1 8.1 0 0 0-16.2 0m8.1-6.413a6.41 6.41 0 0 1 6.412 6.413c0 2.29-2.13 6.08-6.412 11.23-4.282-5.15-6.413-8.94-6.413-11.23a6.41 6.41 0 0 1 6.413-6.413" clipRule="evenodd"></path>
                            <path fill="#19BFD3" fillRule="evenodd" d="M10.707 15.019a3.966 3.966 0 1 0 7.932 0 3.966 3.966 0 0 0-7.932 0m6.413 0a2.447 2.447 0 1 1-4.894 0 2.447 2.447 0 0 1 4.894 0" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-300 text-sm">امکان پرداخت در محل</span>
                    </div>
                </div>
            </section>
            {/* ! ================== ! Loader ! ================== ! */}
            {
                isShowLoader && <Loader />
            }
        </>
    );
}

export default Home;