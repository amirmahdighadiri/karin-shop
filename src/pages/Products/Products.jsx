import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ToggleCheckBox from "../../components/ToggleCheckBox/ToggleCheckBox.jsx";
import CustomCheckBox from "../../components/CustomCheckBox/CustomCheckBox.jsx";
import SecondProductBox from "../../components/ProductBox/SecondProductBox.jsx";
import {AppContext} from "../../context/AppContext.jsx";
import {filterCategory} from "../../data.jsx";
// Images
import time from '../../assets/images/filter-image/time.png'
import shop from '../../assets/images/filter-image/shop.png'
import WebTitle from "../../util/WebTitle.jsx";
import ProductPagination from "../../components/ProductPagination/ProductPagination.jsx";
import ProductSkeleton from "../../components/Skeleton/ProductSkeleton.jsx";

function Products(props) {
    const {setOverlay,isOpenFilterBox, setIsOpenFilterBox , isOpenSortBox, setIsOpenSortBox} = useContext(AppContext);
    const [filters, setFilters] = useState({
        onlyAvailable: false,
        sameDayDelivery: false,
        sellerDelivery: false,
        inPersonTehran: false,
    });
    const [categoryFilterItems, setCategoryFilterItems] = useState(filterCategory);
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(false);
    const [isOpenPriceRangeFilter, setIsOpenPriceRangeFilter] = useState(false);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(350000);
    const [minGap, setMinGap] = useState(0);
    const [percent1, setPercent1] = useState(0);
    const [percent2, setPercent2] = useState(0);
    const [sort, setSort] = useState('')
    const [products, setProducts] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [mode, setMode] = useState("")
    const [visibilityProducts, setVisibilityProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [showProducts, setShowProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const itemsPerPage = 5



    const filterCahngeHandler = name => {
        setFilters(prev => ({...prev, [name]: !prev[name]}));
        setIsFiltered(true);
        setMode("filter")
    }

    const changeCategoryFilterHandler = (id) => {

        setCategoryFilterItems(prev => {
            return prev.map(item => item.id === id ? {...item, checked: !item.checked} : item)
        })
    }

    const removeAllFilters = ()=>{
        setFilters({
            onlyAvailable: false,
            sameDayDelivery: false,
            sellerDelivery: false,
            inPersonTehran: false,
        });
        setIsFiltered(false);
    }

    const removeFiltersAndSortHandler = () => {
        removeAllFilters()
        setSort("")
        setMode("")
    };

    const openCateGoryFilterHandler = () => setIsOpenCategoryFilter(prev => !prev);

    const openPriceRangeFilter = () => setIsOpenPriceRangeFilter(prev => !prev);

    const changeMinRangeHandler = event => {
        let value = Number(event.target.value);
        if (maxValue - value <= minGap) {
            value = maxValue - minGap;
        }
        setMinValue(value);
    }

    const changeMaxRangeHandler = event => {

        let value = Number(event.target.value);
        if (value - minValue <= minGap) {
            value = minValue + minGap;
        }
        setMaxValue(value);
    }

    const changeSortHandler = (event) => {
        if (event.target.tagName === 'BUTTON') {
            setMode("sort");
            setSort(event.target.dataset.sortId);
        }
    }

    const openFilterBoxInMobile = ()=>{
       setIsOpenFilterBox(true)
       setOverlay(true)
    }

    const openSortBoxInMobile = ()=>{
        setIsOpenSortBox(true)
        setOverlay(true)
    }

    const closeSortBoxHandler = ()=>{
        setIsOpenSortBox(false)
        setOverlay(false)
    }

    useEffect(() => {
        fetch("https://karin-shop-db.onrender.com/products").then(res => res.json()).then(data => {
            setProducts(data)
            setFilteredProducts(data)
            setShowProducts(data.slice(0,itemsPerPage))
            setIsLoading(false)
        }).catch((err) => console.log(err));
    }, [])
    useEffect(() => {
        setPercent1((minValue / 1000000) * 100)
        setPercent2((maxValue / 1000000) * 100)
    }, [minValue, maxValue]);
    useEffect(() => {
        if (mode === "filter") {
            setSort("")
            const resultFiltered = products.filter(product => {
                if (filters.onlyAvailable && !product.available) return false
                if (filters.sameDayDelivery && !product.sameDayDelivery) return false
                return true
            })
            setFilteredProducts(resultFiltered);
            setCurrentPage(1)
        }

    }, [filters, products])
    useEffect(() => {
        if (mode === "sort") {
            removeAllFilters()
            if (sort.length > 0) {
                const resultSort = products.filter(product => {
                    if (sort === 'popular') {
                        return product.score >= 4
                    }
                    if (sort === 'best-seller') {
                        return product.sellCount >= 10
                    }
                    if (sort === 'cheapest'){
                        return product.price <= 15000000
                    }
                    if (sort === 'expensive') {
                        return product.price >= 25000000
                    }
                })
                setFilteredProducts(resultSort);
                setCurrentPage(1)
            }
        }
    }, [sort,products]);


    return (
        <section className="container">
            <WebTitle title="کارین شاپ | محصولات"/>
            {/* ! ================== ! Beardcrumb  ! ================== ! */}
            <div className="flex items-center gap-x-2 mt-8 mr-4">
                <Link to="/" className="inline-flex items-center gap-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" id="home" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                    </svg>
                    <span className="pt-1 text-sm">صفحه اصلی</span>
                </Link>
                <span className="inline-flex items-center gap-x-1 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 9 4-4-4-4"></path>
                    </svg>
                    <span className="pt-1 text-sm">فروشگاه</span>
                </span>
            </div>
            {/* ! ================== ! Page Content  ! ================== ! */}
            <div className="grid grid-cols-12 gap-x-4 mt-5">
                {/* ! ================== ! Filter Wrapper ! ================== ! */}
                <div className={`fixed z-20 right-0 left-0 bottom-0 lg:sticky lg:top-1 ${isOpenFilterBox ? 'lg:translate-y-0 pb-10' : 'translate-y-full lg:translate-y-0 pb-0'} col-span-12 lg:col-span-3 dark:bg-gray-800 bg-white rounded-lg shadow p-4 self-start transition-all`}>
                    {/* ! ================== ! Filter Title  ! ================== ! */}
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-200 text-lg">فیلترها</span>
                        <button onClick={removeFiltersAndSortHandler} type="button" className="text-sm text-blue-500 dark:text-blue-400 cursor-pointer">حذف فیلتر‌ها</button>
                    </div>
                    {/* ! ================== ! Filter Items  ! ================== ! */}
                    <ul className="divide-y divide-slate-200 dark:divide-gray-700/20 text-gray-800 dark:text-gray-100 mt-4">
                        <li className="">
                            <button onClick={openCateGoryFilterHandler} className="w-full flex items-center justify-between pt-3 cursor-pointer">
                                <span className=""> دسته بندی</span>
                                <svg xmlns="http://www.w3.org/2000/svg" id="chevron-left" fill="none"
                                     stroke="currentColor" strokeWidth="1.5"
                                     className={`size-4 ${isOpenCategoryFilter && '-rotate-90'} transition-all duration-300`}
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                                </svg>
                            </button>
                            {/* ! ================== ! ُSub Filter Items  ! ================== ! */}
                            <ul className={`${isOpenCategoryFilter ? 'h-50' : 'h-0'} overflow-hidden pr-3.5 pt-3 space-y-1.5 duration-300 ease-in-out transition-all`}>
                                {categoryFilterItems.map(filter => (
                                    <li key={filter.id} className="py-1">
                                        <CustomCheckBox {...filter}
                                                        changeCategoryFilterHandler={changeCategoryFilterHandler}/>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="py-4">
                            <ToggleCheckBox filterCahngeHandler={filterCahngeHandler}
                                            checkStatus={filters.onlyAvailable} id="onlyAvailable"
                                            title="فقط کالا های موجود"/>
                        </li>
                        <li className="py-4">
                            <ToggleCheckBox filterCahngeHandler={filterCahngeHandler}
                                            checkStatus={filters.sameDayDelivery} id="sameDayDelivery"
                                            title="رسال امروز">
                                <img src={time} alt="time icon" className="size-5"/>
                            </ToggleCheckBox>
                        </li>
                        <li className="py-4">
                            <button onClick={openPriceRangeFilter} className="w-full flex items-center justify-between cursor-pointer">
                                <span className="">محدوده قیمت</span>
                                <svg xmlns="http://www.w3.org/2000/svg" id="chevron-left" fill="none"
                                     stroke="currentColor" strokeWidth="1.5"
                                     className={`size-4 ${isOpenPriceRangeFilter && '-rotate-90'} transition-all duration-300`}
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                                </svg>
                            </button>
                            {/* ! ================== ! Sub Filter Items (Price Range Input) ! ================== ! */}
                            <div className={`${isOpenPriceRangeFilter ? 'h-18' : 'h-0'} duration-300 ease-in-out transition-all overflow-hidden`}>
                                {/* ! ================== ! Input Range Wrapper ! ================== ! */}
                                <div className="relative mt-5">
                                    <div className={`w-full h-1.25 rounded-sm transition-all`} style={{
                                        background: `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`,
                                    }}></div>
                                    <input type="range" className="range-1" min={0} max={1000000} value={minValue}
                                           onChange={changeMinRangeHandler}/>
                                    <input type="range" className="range-2" min={0} max={1000000} value={maxValue}
                                           onChange={changeMaxRangeHandler}/>
                                </div>
                                {/* ! ================== ! Number Range Content ! ================== ! */}
                                <div className={` flex items-center justify-between text-gray-800 dark:text-gray-500 mt-5 pb-3`}>
                                    <span className="flex items-center gap-x-2">
                                        <span
                                            className="">{String(maxValue).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                        تومان
                                    </span>
                                    <span className="flex items-center gap-x-2">
                                        <span
                                            className="">{String(minValue).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                        تومان
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="py-4">
                            <ToggleCheckBox filterCahngeHandler={filterCahngeHandler}
                                            checkStatus={filters.sellerDelivery} id="sellerDelivery"
                                            title="ارسال فروشنده">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path fill="#D86B00" fillRule="evenodd"
                                          d="M17 3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5a5 5 0 0 0 10 0h3V6h-3zm-5 11c6.095 0 9.572 2.318 9.996 6.908A1 1 0 0 1 21 22H3a1 1 0 0 1-.996-1.092C2.428 16.318 5.904 14 12 14m0 2c-4.58 0-7.084 1.323-7.812 4h15.624c-.728-2.677-3.231-4-7.812-4M9 8a3 3 0 1 0 6 0zm0-4h6v2H9z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </ToggleCheckBox>
                        </li>
                        <li className="py-4">
                            <ToggleCheckBox filterCahngeHandler={filterCahngeHandler}
                                            checkStatus={filters.inPersonTehran} id="inPersonTehran"
                                            title="خرید حضوری در تهران">
                                <img src={shop} alt="shop icon" className="size-5"/>
                            </ToggleCheckBox>
                        </li>
                    </ul>
                </div>
                {/* ! ================== ! Products Wrapper ! ================== ! */}
                <div className="col-span-12 lg:col-span-9">
                    {/* ! ================== ! Sort Wrapper ! ================== ! */}
                    <div className={`fixed z-20 lg:static right-0 left-0 bottom-0 ${isOpenSortBox ? 'lg:translate-y-0' : 'translate-y-full lg:translate-y-0'} flex flex-col-reverse lg:flex-row lg:items-center justify-between lg:mb-6 p-4 lg:p-0 bg-white dark:bg-gray-800 lg:dark:bg-transparent transition-all rounded-lg lg:rounded-none`}>
                        {/* ! ================== ! Sort Menu  ! ================== ! */}
                        <div className="flex items-center justify-center gap-x-5">
                            {/* ! ================== ! Sort Menu Logo ! ================== ! */}
                            <div className="hidden lg:flex items-center gap-x-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" id="sort-list" fill="none" stroke="currentColor"
                                     strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"></path>
                                </svg>
                                <span className="font-Dana-DemiBold">مرتب سازی :</span>
                            </div>
                            {/* ! ================== ! Sort Menu Item ! ================== ! */}
                            <div className="w-full lg:w-auto flex flex-col lg:flex-row justify-center items-center gap-x-1 lg:gap-x-4 *:cursor-pointer *:py-3 lg:*:py-0 divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-200/20 *:w-full lg:*:w-auto" onClick={changeSortHandler}>
                                <button data-sort-id="popular" className={`${sort === 'popular' ? 'text-blue-400' : 'text-gray-400'}`}>محبوب
                                    ترین
                                </button>
                                <button data-sort-id="best-seller" className={`${sort === 'best-seller' ? 'text-blue-400' : 'text-gray-400'}`}>پرفروش
                                    ترین
                                </button>
                                <button data-sort-id="cheapest" className={`${sort === 'cheapest' ? 'text-blue-400' : 'text-gray-400'}`}>ارزان
                                    ترین
                                </button>
                                <button data-sort-id="expensive" className={`${sort === 'expensive' ? 'text-blue-400' : 'text-gray-400'}`}>گران
                                    ترین
                                </button>
                            </div>
                        </div>
                        {/* ! ================== ! Product Count ! ================== ! */}
                        <div className="hidden lg:inline-block text-sm text-gray-400">
                            <span className="">{String(filteredProducts.length).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                            کالا
                        </div>
                        {/* ! ================== ! Close And title Sort Box In Mobile ! ================== ! */}
                        <div className="flex lg:hidden items-center justify-between text-gray-500 dark:text-gray-200 mb-5">
                            <span className="">مرتب سازی بر اساس</span>
                            <div onClick={closeSortBoxHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" id="x-mark" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5 text-inherit cursor-pointer" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* ! ================== ! Sort & Filter BTN In Mobile ! ================== ! */}
                    <div className="flex lg:hidden items-center justify-between mb-4">
                        {/* ! ================== ! Buttons ! ================== ! */}
                        <div className="flex items-center gap-x-2">
                            <button onClick={openSortBoxInMobile} type="button" className="flex items-center gap-x-1 text-sm py-1.5 px-3 rounded-full border dark:border-gray-700 border-gray-300 text-gray-700 dark:text-gray-100 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" id="sort-list" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 text-gray-400" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"></path>
                                </svg>
                                <span className="">مرتب ترین</span>
                            </button>
                            <button onClick={openFilterBoxInMobile} type="button" className="flex items-center gap-x-1 text-sm py-1.5 px-3 rounded-full border dark:border-gray-700 border-gray-300 text-gray-700 dark:text-gray-100 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" id="filter" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 text-gray-400" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.3 48.3 0 0 1 12 3"></path>
                                </svg>
                                <span className="">فیلتر</span>
                            </button>
                        </div>
                        {/* ! ================== ! Product Count ! ================== ! */}
                        <div className="text-sm text-gray-400">
                            <span className="">{String(filteredProducts.length).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                            کالا
                        </div>
                    </div>
                    {/* ! ================== ! Product Wrapper ! ================== ! */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            isLoading ? Array.from({length:5}).map(index=>(
                                <ProductSkeleton key={index}/>
                            )) :  showProducts.map(product => (
                                <SecondProductBox key={product.id} {...product} />
                            ))
                        }
                    </div>
                    {/* ! ================== ! Pagination Product ! ================== ! */}
                    <ProductPagination pagination={{items: filteredProducts , setItem: setShowProducts , itemsPerPage:itemsPerPage , currentPage:currentPage , setCurrentPage:setCurrentPage}} />
                </div>
            </div>
        </section>
    );
}

export default Products;