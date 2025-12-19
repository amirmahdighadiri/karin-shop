import React, {useContext, useEffect, useState} from 'react';
import WebTitle from "../../util/WebTitle.jsx";
import {Link} from "react-router-dom";
import CustomCheckBox from "../../components/CustomCheckBox/CustomCheckBox.jsx";
import ToggleCheckBox from "../../components/ToggleCheckBox/ToggleCheckBox.jsx";
import time from "../../assets/images/filter-image/time.png";
import shop from "../../assets/images/filter-image/shop.png";
import ProductPagination from "../../components/ProductPagination/ProductPagination.jsx";
import ArticleSkeleton from "../../components/Skeleton/ArticleSkeleton.jsx";
import {skeletonIds} from "../../data.jsx";
import ArticleBox from "../../components/ArticleBox/ArticleBox.jsx";
import {AppContext} from "../../context/AppContext.jsx";

function Blog(props) {
    const {setOverlay,isOpenFilterBox, setIsOpenFilterBox , isOpenSortBox, setIsOpenSortBox} = useContext(AppContext);
    const [filters, setFilters] = useState({
        lastest: false,
        news: false,
    });
    const [sort, setSort] = useState('')
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [showArticles, setShowArticles] = useState([]);
    const [skeletonItems, setSkeletonItems] = useState(skeletonIds);
    const [mode, setMode] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5

    useEffect(() => {
        fetch("https://karin-shop-db.onrender.com/articles").then(res => res.json()).then(data => {
            setArticles(data);
            setFilteredArticles(data);
            setShowArticles(data.slice(0, itemsPerPage));
            setIsLoading(false);
        })
    },[])

    useEffect(() => {
        if (mode === "filter") {
            setSort("")
            let resultFilteredArticles = [...articles]
            if (filters.lastest) {
                resultFilteredArticles.sort((a, b) => {
                    return b.createdAt - a.createdAt
                })
            }if (filters.news) {
                resultFilteredArticles = resultFilteredArticles.filter(article => article.category === 'news')
            }
            setFilteredArticles(resultFilteredArticles)
            setCurrentPage(1)
        }
    },[filters])

    useEffect(() => {
        if (mode === "sort") {
            removeAllFilters()
            let resultSort = [...articles]
            if (sort === "popular"){
                resultSort.sort((a, b) => {
                    return b.viewCount - a.viewCount
                })
            }
            setFilteredArticles(resultSort)
            setCurrentPage(1)
        }
    },[sort])

    const removeAllFilters = ()=>{
        setFilters({
            lastest: false,
            news: false,
        });
    }

    const removeFiltersAndSortHandler = ()=>{
        removeAllFilters()
        setSort("")
        setMode("")
    }

    const filterCahngeHandler = name => {
        setFilters(prev => ({...prev, [name]: !prev[name]}));
        setMode("filter")
    }

    const openFilterBoxInMobile = ()=>{
        console.log(1)
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

    const changeSortHandler = (event) => {
        setSort(event.target.dataset.sortId);
        setMode("sort")
        closeSortBoxHandler()
    }

    return (
        <section className="container">
            <WebTitle title="کارین شاپ | وبلاگ"/>
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
                    <span className="pt-1 text-sm">مقالات</span>
                </span>
            </div>
            {/* ! ================== ! Page Content  ! ================== ! */}
            <div className="grid grid-cols-12 gap-x-4 mt-5">
                {/* ! ================== ! Filter Wrapper ! ================== ! */}
                <div className={`fixed z-30 right-0 left-0 bottom-0 lg:sticky lg:top-1 ${isOpenFilterBox ? 'lg:translate-y-0' : 'translate-y-full lg:translate-y-0'} col-span-12 lg:col-span-3 dark:bg-gray-800 bg-white rounded-lg shadow p-4 self-start transition-all`}>
                    {/* ! ================== ! Filter Title  ! ================== ! */}
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-200 text-lg">فیلترها</span>
                        <button onClick={removeFiltersAndSortHandler} type="button" className="text-sm text-blue-500 dark:text-blue-400 cursor-pointer">حذف فیلتر‌ها</button>
                    </div>
                    {/* ! ================== ! Filter Items  ! ================== ! */}
                    <ul className="divide-y divide-slate-200 dark:divide-gray-700/20 text-gray-800 dark:text-gray-100 mt-4">
                        <li className="py-4">
                            <ToggleCheckBox filterCahngeHandler={filterCahngeHandler}
                                            checkStatus={filters.lastest} id="lastest"
                                            title="بروزترین"/>
                        </li>
                        <li className="py-4">
                            <ToggleCheckBox filterCahngeHandler={filterCahngeHandler}
                                            checkStatus={filters.news} id="news"
                                            title="اخبار"/>
                        </li>
                    </ul>
                </div>
                {/* ! ================== ! Articles Wrapper ! ================== ! */}
                <div className="col-span-12 lg:col-span-9">
                    {/* ! ================== ! Sort Wrapper ! ================== ! */}
                    <div className={`fixed z-30 lg:static right-0 left-0 bottom-0 ${isOpenSortBox ? 'lg:translate-y-0' : 'translate-y-full lg:translate-y-0'} flex flex-col-reverse lg:flex-row lg:items-center justify-between lg:mb-6 p-4 lg:p-0 bg-white dark:bg-gray-800 lg:dark:bg-transparent transition-all rounded-lg lg:rounded-none`}>
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
                                <button data-sort-id="newest" className={`${sort === 'newest' ? 'text-blue-400' : 'text-gray-400'}`}>جدید
                                    ترین
                                </button>
                                <button data-sort-id="recently-updated" className={`${sort === 'recently-updated' ? 'text-blue-400' : 'text-gray-400'}`}>بروز
                                    ترین
                                </button>
                            </div>
                        </div>
                        {/* ! ================== ! Product Count ! ================== ! */}
                        <div className="hidden lg:inline-block text-sm text-gray-400">
                            <span className="inline-block pl-1"> {String(filteredArticles.length).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                            مقاله
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
                            <span className="">{String(filteredArticles.length).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                            کالا
                        </div>
                    </div>
                    {/* ! ================== ! Product Wrapper ! ================== ! */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            isLoading ? skeletonItems.map(item=>(
                                <ArticleSkeleton key={item.id}/>
                            )) :  showArticles.map(article => (
                                <ArticleBox key={article.id} {...article} />
                            ))
                        }

                    </div>
                     {/*! ================== ! Pagination Product ! ================== !*/}
                    <ProductPagination pagination={{items: filteredArticles , setItem: setShowArticles , itemsPerPage:itemsPerPage , currentPage:currentPage , setCurrentPage:setCurrentPage}} />
                </div>
            </div>
        </section>
    );
}

export default Blog;