import {Link, useNavigate, useParams} from "react-router-dom";
import {productLiveTexts, services} from "../../data.jsx"
import React, {useEffect, useState} from "react";
import Tooltip from "../../components/Tooltip/Tooltip.jsx";
import ServicesBox from "../../components/ServicesBox/ServicesBox.jsx";
import FeatureBox from "../../components/FeatureBox/FeatureBox.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation} from "swiper/modules";
import SecondProductBox from "../../components/ProductBox/SecondProductBox.jsx";
import CommentBox from "../../components/CommentBox/CommentBox.jsx";
import DynamicIcon from "../../icon/DynamicIcon.jsx";
import CustomSwiperBtn from "../../components/CustomSwiperBtn/CustomSwiperBtn.jsx";
import LiveText from "../../components/LiveText/LiveText.jsx";
import CommentForm from "../../components/Forms/CommentForm.jsx";
import LoginPopup from "../../components/Popups/LoginPopup.jsx";

function ProductInfo(props) {
    const [liveText, setLiveText] = useState(productLiveTexts);
    const [productCount, setProductCount] = useState(1);
    const [servicesItems, setServicesItems] = useState(services);
    const {id} = useParams()
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [productColorInfo, setProductColorInfo] = useState({
        name:"",
        colorCode:""
    });
    const [activeTab, setActiveTab] = useState("Introduction");
    const [comments, setComments] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);
    const [isExpanded, setIsExpanded] = useState(false);
    const [userId , setUserId] = useState(()=> localStorage.getItem('userID'));
    const navigate = useNavigate();
    const [isShowPopup, setIsShowPopup] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`).then(res => res.json()).then(data => setProduct(data))
        fetch(`https://karin-shop-db.onrender.com/comments?productId=${id}&_expand=user`).then(res => res.json()).then(data => setComments(data))
    }, [id])

    useEffect(() => {
        fetch(`http://localhost:3000/products?category=${product.category}`).then(res => res.json()).then(data => setRelatedProducts(data))
    }, [product])

    useEffect(() => {
        setProductColorInfo({
            name: product?.colors?.[0].name,
            colorCode: product?.colors?.[0].colorCode,
        })
    },[product])

    const increaseProdductHandler = () => {
        setProductCount(prev => prev + 1)
    }
    const decreaseProdductHandler = () => {
        if (productCount > 1) {
            setProductCount(prev => prev - 1)
        }
    }
    const changeProductColorHandler = (event , colorName , colorCode)=>{
        event.preventDefault()
        setProductColorInfo({
            name: colorName,
            colorCode: colorCode,
        })
    }
    const changeTabHandler = (event) => {
        event.preventDefault()
        setActiveTab(event.target.id)
    }
    const showCommentsHandler = ()=>{
        if(isExpanded){
            setVisibleCount(5)
            setIsExpanded(false)
        } else {
            setVisibleCount(prev =>{
                const newCount = prev + 5
                if (newCount >= comments.length) setIsExpanded(true)
                return newCount
            })
        }
    }
    const addToCartHandler = async (event)=>{
        event.preventDefault()
        if (userId){
            const cart = await fetch('https://karin-shop-db.onrender.com/cart')
            const data = await cart.json()

            const newCartItem = {
                id: data.length,
                userId : userId,
                productId : id,  // product id ( get =>  line 21 )
                quantity: productCount,
                colorCode : productColorInfo.colorCode,
                colorName: productColorInfo.name,
                warranty: "گارانتی 18 ماهه",
                deliveryTime: "ارسال 1 روز کاری"
            }

        } else {
            setIsShowPopup(true)
            // navigate('/auth-layout/login')
        }

    }


    return (
        <section className="container">
            {/* ! ================== ! Beardcrumb  ! ================== ! */}
            <div className="flex items-center gap-x-2 mt-8 mr-4">
                <Link to="/"
                      className="inline-flex items-center gap-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" id="home" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                    </svg>
                    <span className="pt-1 text-sm">صفحه اصلی</span>
                </Link>
                <Link to="/products"
                      className="inline-flex items-center gap-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 9 4-4-4-4"></path>
                    </svg>
                    <span className="pt-1 text-sm">فروشگاه</span>
                </Link>
                <span className="inline-flex items-center gap-x-1 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 9 4-4-4-4"></path>
                    </svg>
                    <span className="pt-1 text-sm">جزییات محصول</span>
                </span>
            </div>
            {/* ! ================== ! Product Detais Wrapper ! ================== ! */}
            <div className="grid grid-cols-12 gap-4 *:rounded-lg *:p-4 *:bg-white *:dark:bg-gray-800 mt-5">
                {/* ! ================== ! Product Detais ! ================== ! */}
                <div className="col-span-9">
                    {/* ! ================== ! Product Details Wrapper ! ================== ! */}
                    <div className="flex items-start gap-x-1">
                        {/* ! ================== ! Product Gallery ! ================== ! */}
                        <div className="w-1/2">
                            <div className="">
                                <img src="/images/products/phone-image/11.png" alt="iphone 16" className=""/>
                            </div>
                            <div className="flex items-center justify-center gap-x-4.5 mt-4">
                                <div className="size-16 p-1 border dark:border-gray-700 rounded-lg cursor-pointer">
                                    <img src="/images/products/phone-image/11.png" alt="iphone 16"
                                         className="object-cover rounded-lg"/>
                                </div>
                                <div className="size-16 p-1 border dark:border-gray-700 rounded-lg cursor-pointer">
                                    <img src="/images/products/phone-image/13.webp" alt="iphone 16"
                                         className="object-cover rounded-lg"/>
                                </div>
                                <div className="size-16 p-1 border dark:border-gray-700 rounded-lg cursor-pointer">
                                    <img src="/images/products/phone-image/12.webp" alt="iphone 16"
                                         className="object-cover rounded-lg"/>
                                </div>
                                <div
                                    className="relative size-16 flex-center p-1 border dark:border-gray-700 rounded-lg cursor-pointer overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="ellipsis" fill="none"
                                         stroke="currentColor" strokeWidth="1.5"
                                         className="absolute z-10 size-8 text-gray-100" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"></path>
                                    </svg>
                                    <img src="/images/products/phone-image/14.webp" alt="iphone 16"
                                         className="object-cover rounded-lg blur-sm"/>
                                </div>
                            </div>
                        </div>
                        {/* ! ================== ! Product Info ! ================== ! */}
                        <div className="">
                            {/* ! ================== ! Product Details ! ================== ! */}
                            <div className="flex items-center justify-between">
                                {/* ! ================== ! Product Category ! ================== ! */}
                                <Link to="/" className="text-sky-400 font-Dana-Medium">اپل / گوشی موبایل اپل</Link>
                                {/* ! ================== ! Product Actions ! ================== ! */}
                                <div className="flex items-center gap-x-2">
                                    <div
                                        className="relative flex-center border border-gray-300 dark:border-gray-700 p-1.5 rounded-full cursor-pointer group/tooltip">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="share" fill="currentColor"
                                             className="size-5 text-gray-700 dark:text-gray-100" viewBox="0 0 24 24">
                                            <path fillRule="evenodd"
                                                  d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3 3 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <Tooltip title="اشتراک گذاری"/>
                                    </div>
                                    <div
                                        className="relative flex-center border border-gray-300 dark:border-gray-700 p-1.5 rounded-full cursor-pointer group/tooltip">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="heart" fill="none"
                                             stroke="currentColor" strokeWidth="1.5"
                                             className="size-5 text-gray-700 dark:text-gray-100" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12"></path>
                                        </svg>
                                        <Tooltip title="علاقه مندی"/>
                                    </div>
                                    <div
                                        className="relative flex-center border border-gray-300 dark:border-gray-700 p-1.5 rounded-full cursor-pointer group/tooltip">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="arrows-up-down" fill="none"
                                             stroke="currentColor" strokeWidth="1.5"
                                             className="size-5 text-gray-700 dark:text-gray-100" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path>
                                        </svg>
                                        <Tooltip title="مقایسه"/>
                                    </div>
                                </div>
                            </div>
                            {/* ! ================== ! Product Name ! ================== ! */}
                            <div className="mt-7">
                                <h1 className="text-lg font-Dana-DemiBold text-zinc-900 dark:text-gray-300">{product.title}</h1>
                                <p className="text-sm text-gray-300 dark:text-gray-500 my-3">{product.title}</p>
                                <div className="flex items-center gap-x-2">
                                    <div className="flex items-center gap-1 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="star" fill="none"
                                             stroke="currentColor" strokeWidth="1.5"
                                             className="size-4 text-yellow-400 mb-1" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z"></path>
                                        </svg>
                                        <span className="text-gray-700 dark:text-gray-100">{product.score}</span>
                                        <span className="text-gray-300 dark:text-gray-500">(امتیاز 849 خریدار)</span>
                                    </div>
                                    <span className="h-6 bg-slate-100 dark:bg-slate-700 font-Dana-Medium text-xs text-gray-400 px-2 pt-1 rounded-full">410 دیدگاه</span>
                                </div>
                            </div>
                            {/* ! ================== ! Select Product Color Wrapper ! ================== ! */}
                            <div className="mt-7">
                                <span className="font-Dana-DemiBold text-lg text-zinc-900 dark:text-gray-200">
                                    رنگ :
                                    <span className=""> {productColorInfo.name} </span>
                                </span>
                                <div className="flex items-center gap-x-3 mt-4 *:cursor-pointer">
                                    {
                                        product?.colors?.map(color => (
                                            <button key={color.id} onClick={(event)=>changeProductColorHandler(event , color.name , color.colorCode)} type="button" className={`size-9 ${color.colorCode === productColorInfo.colorCode ? 'ring-blue-400 ring-4' : 'ring-gray-400 ring-1'}  rounded-full p-1 transition-all duration-300`}>
                                                <span  style={{ backgroundColor: color.colorCode , ...(color.colorCode === '#FFFFFF' && { border: "1px solid #d1d5db" }) }} className={`block size-full rounded-full`}></span>
                                            </button>
                                        ))
                                    }

                                </div>
                            </div>
                            {/* ! ================== ! Product Features ! ================== ! */}
                            <div className="mt-7">
                                <span className="block font-Dana-DemiBold text-lg text-zinc-900 dark:text-gray-200">
                                    ویژگی ها :
                                </span>
                                <div className="grid grid-cols-12 gap-2 mt-4">
                                    {
                                        product?.feature?.slice(0, 5).map(item => (
                                            <FeatureBox key={item.id} {...item} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ! ================== ! Services Wrapper ! ================== ! */}
                    <div className="flex items-center justify-between gap-x-4 text-sm lg:text-base mt-10">
                        {servicesItems.map(item => (
                            <ServicesBox key={item.id} {...item} />
                        ))}
                    </div>
                </div>
                {/* ! ================== ! Product Summary ! ================== ! */}
                <div className="col-span-3 sticky top-5 self-start flex flex-col gap-y-6">
                    <div className="font-Dana-DemiBold text-gray-800 dark:text-gray-100 text-2xl">
                        {String(product.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        <span className="text-base pr-1">تومان</span>
                    </div>
                    {/* ! ================== ! Product Increase And Decrease ! ================== ! */}
                    <div className="w-full flex items-center justify-between border border-gray-200 dark:border-white/20 px-3 py-2 rounded-lg">
                        <button onClick={increaseProdductHandler} className="text-green-600 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" id="plus" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                        </button>
                        <span className="text-lg text-gray-800 dark:text-white">{productCount}</span>
                        <button onClick={decreaseProdductHandler} className="text-red-500 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" id="minus" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"></path>
                            </svg>
                        </button>
                    </div>
                    {/* ! ================== ! Total Price Box ! ================== ! */}
                    <div className="w-full flex items-center justify-between gap-x-1 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-400 font-Dana-Medium text-sm xl:text-base py-2 px-2 xl:px-3">
                        <span className="">مجموع خرید :</span>
                        <span className="flex items-center gap-x-1">
                            {String(product.price*productCount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            <span className="">تومان</span>
                        </span>
                    </div>
                    {/* ! ================== ! Live Message ! ================== ! */}
                    <LiveText text={liveText}/>
                    {/* ! ================== ! Order Completion Button ! ================== ! */}
                    <button type="button" onClick={addToCartHandler} className="flex items-center justify-center gap-x-1 w-full bg-blue-500 hover:bg-blue-600 text-gray-100 rounded-lg shadow py-2 cursor-pointer transition-all">
                        <span className="">افزودن به سبد</span>
                        <svg xmlns="http://www.w3.org/2000/svg" id="shopping-bag" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"></path>
                        </svg>
                    </button>
                    {/* ! ================== ! Message Text ! ================== ! */}
                    <p className="flex items-center gap-x-1 text-sm text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                        </svg>
                        ارسال رایگان برای خریدهای بالای 400 هزار تومان
                    </p>
                </div>
            </div>
            {/* ! ================== ! Related Products ! ================== ! */}
            <div className="mt-20">
                {/* ! ================== ! Section Title ! ================== ! */}
                <SectionTitle title="محصولات" blueTitle="مرتبط" description="جدیدترین و بروزترین محصولات" IconComponent={()=> <DynamicIcon name='mobile'/> } prevBtn="custom-prev-related-btn" nextBtn="custom-next-related-btn" />
                {/* ! ================== ! Products Wrapper ! ================== ! */}
                <div className="relative mt-5">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.custom-next-related-btn',
                            prevEl: '.custom-prev-related-btn',
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        className="h-full !py-8 !pr-6 !-mr-6"
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
                            relatedProducts.map(product => (
                                <SwiperSlide key={product.id}>
                                    <SecondProductBox {...product}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <CustomSwiperBtn nextBtn="custom-next-related-btn" prevBtn="custom-prev-related-btn" />
                </div>
            </div>
            {/* ! ================== ! Tabs & Content Section ! ================== ! */}
            <div className="bg-white dark:bg-gray-800 mt-10 p-4 rounded-lg shadow">
                {/* ! ================== ! Section Menu ! ================== ! */}
                <div className="flex items-center gap-x-6 font-Dana-Medium py-3 border-b border-gray-600/20 dark:border-gray-200/20 mb-4 *:cursor-pointer *:transition-all *:duration-300">
                    <button onClick={changeTabHandler} type="button" id="Introduction" className={`${activeTab === "Introduction" ? 'text-blue-500' : 'text-gray-500'}`}>معرفی محصول</button>
                    <button onClick={changeTabHandler} type="button" id="Description" className={`${activeTab === "Description" ? 'text-blue-500' : 'text-gray-500'}`}>مشخصات</button>
                    <button onClick={changeTabHandler} type="button" id="Comments" className={`${activeTab === "Comments" ? 'text-blue-500' : 'text-gray-500'}`}>دیدگاه</button>
                </div>
                {/* ! ================== ! Wrapper ! ================== ! */}
                <div className="">
                    {/* ! ================== ! Product Introduction ! ================== ! */}
                    {activeTab === "Introduction" &&  <div className="">
                            <h2 className="w-fit font-Dana-DemiBold border-b-2 text-zinc-900 dark:text-white border-blue-500 p-1 text-lg">معرفی</h2>
                            <p className="mt-4 leading-8 text-zinc-900 dark:text-white mb-2 text-justify">گوشی موبایل اپل مدل iPhone 16، به عنوان یکی از جدیدترین مدل‌های این برند معتبر، با طراحی مدرن و ویژگی‌های پیشرفته، تجربه‌ای بی‌نظیر از دنیای تکنولوژی را برای کاربران فراهم می‌کند. این گوشی با ظرفیت 128 گیگابایت و رم 8 گیگابایت، عملکردی سریع و روان را ارائه می‌دهد که به راحتی از پس کارهای روزمره و multitasking برمی‌آید. طراحی این دستگاه با دقت و ظرافت بالا انجام شده و بدنه آن از مواد با کیفیت ساخته شده است که حس لوکس بودن را به کاربر منتقل می‌کند. قابلیت پشتیبانی از دو سیم کارت، امکان استفاده هر مفید است. دوربین‌های با کیفیت پارت نامبر CH مربوط به کشور چین است که تفاوت خاصی با دیگر پارت نامبرها ندارند و تنها در مورد استفاده از تماس‌های صوتی و تماس‌های گروهی در نرم افزار فیس تایم شامل محدودیت است. این پارت نامبر از دو سیم‌کارت فیزیکی پشتیبانی می‌کند که یک نکته مثبت محسوب می‌شود. این گوشی، مانند تمامی گوشی‌های عرضه‌شده در دیجی‌کالا، به صورت قانونی و تجاری وارد کشور شده و با رجیستر رسمی، کارت گارانتی معتبر و کد فعال‌سازی به شما تحویل داده می‌شود.</p>
                            <button className="flex items-center gap-x-1 text-blue-400">
                                <span className="">مشاهده بیشتر</span>
                                <svg xmlns="http://www.w3.org/2000/svg" id="chevron-left" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                                </svg>
                            </button>
                        </div>}
                    {/* ! ================== ! Product Details ! ================== ! */}
                    {activeTab === "Description" &&  <div className="w-full lg:w-1/2">
                        <h2 className="w-fit font-Dana-DemiBold border-b-2 text-zinc-900 dark:text-white border-blue-500 p-1 text-lg">مشخصات کلی</h2>
                        <div className="w-full flex items-center gap-x-20 font-Dana-Medium my-5 p-4">
                            <ul className="w-2/4 text-gray-500 dark:text-gray-300 space-y-3 *:pt-2">
                                <li className="">مدل</li>
                                <li className="">نمایشگر</li>
                                <li className="">چیپست</li>
                                <li className="">دوربین</li>
                                <li className="">باتری</li>
                            </ul>
                            <ul className="w-2/4 text-gray-800 dark:text-gray-200 space-y-3 *:pt-2 *:line-clamp-1">
                                <li className="">آیفون ۱۶ پرو</li>
                                <li className="">6.3 اینچ LTPO OLED، 120Hz</li>
                                <li className="">Apple A18 Pro</li>
                                <li className="">چهارگانه: 48 + 12 + 12 + TOF 3D</li>
                                <li className="">باتری ۳۵۰۰ میلی‌آمپر با شارژ سریع</li>
                            </ul>
                        </div>
                        <button className="flex items-center gap-x-1 text-blue-400">
                            <span className="">مشاهده بیشتر</span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="chevron-left" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                            </svg>
                        </button>
                    </div>}
                    {/* ! ================== ! Product Comments ! ================== ! */}
                    {activeTab === "Comments" &&    <div className="">
                        {/* ! ================== ! Title ! ================== ! */}
                        <div className="flex items-center gap-x-2 mb-6">
                            <h2 className="font-Dana-Medium text-2xl text-zinc-900 dark:text-white">دیدگاه ها</h2>
                            <span className="text-sm text-blue-500">(28 دیدگاه)</span>
                        </div>
                        {/* ! ================== ! Product Comments Wrapper ! ================== ! */}
                        <div className="w-full flex items-start gap-10">
                            <CommentForm />
                            {/* ! ================== ! Comments Wrapper ! ================== ! */}
                            <div className="w-3/4 divide-y divide-gray-200 dark:divide-gray-200/20">
                                {
                                    comments.slice(0,visibleCount).map(comment =>(
                                        <CommentBox key={comment.id} {...comment} />
                                    ))
                                }
                                {
                                    comments.length > 5 && <button onClick={showCommentsHandler} className="mx-auto flex items-center justify-center gap-x-1 my-4 py-2 text-blue-600 dark:text-blue-400 cursor-pointer">
                                        <p className="">{isExpanded ? 'مشاهده کمتر' : 'مشاهده بیشتر'}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" id="chevron-left" fill="none" stroke="currentColor" strokeWidth="1.5" className={`size-4 ${isExpanded ? 'rotate-90' : '-rotate-90'} transition-all`} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                                        </svg>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>}
                </div>
            </div>

            {
                isShowPopup && <LoginPopup title="خطا !" description="برای افزودن محصول به سبد خرید لازم است وارد حساب خود باشید.">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-18 text-red-500">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                    </svg>
                </LoginPopup>
            }
            {/*<div className="fixed inset-0 w-full h-full flex-center z-10 bg-black/60 backdrop-blur-xs">*/}
            {/*    /!* ! ================== ! Popup Box  ! ================== ! *!/*/}
            {/*    <div className="w-100 flex flex-col items-center justify-center px-4 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 rounded-md py-4">*/}
            {/*        /!* ! ================== ! Popup Content  ! ================== ! *!/*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-18 text-red-500">*/}
            {/*            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />*/}
            {/*        </svg>*/}
            {/*        <span className="block mt-5 mb-4 font-Dana-DemiBold text-3xl">خطا !</span>*/}
            {/*        <span className="font-Dana-DemiBold text-center">برای افزودن محصول به سبد خرید لازم است وارد حساب خود باشید.</span>*/}
            {/*        /!* ! ================== ! Popup Btn  ! ================== ! *!/*/}
            {/*        <button type="submit" className="px-4 py-2 text-white bg-blue-600/70 rounded-md mt-5 cursor-pointer">باشه</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
}

export default ProductInfo;