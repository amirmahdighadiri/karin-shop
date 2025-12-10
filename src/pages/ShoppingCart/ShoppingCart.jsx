import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ShoppingCartBox from "../../components/ShoppingCartBox/ShoppingCartBox.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import WebTitle from "../../util/WebTitle.jsx";

function ShoppingCart(props) {
    const [userShoppingProducts,setUserShoppingProducts] = useState([]);
    const [getLocalStorageProductItem, setGetLocalStorageProductItem] = useState(()=> JSON.parse(localStorage.getItem("shoppingCart")));
    const [totalQuantity , setTotalQuantity] = useState(0);
    const [totalPrice , setTotalPrice] = useState(0);
    const [userId, setUserId] = useState(()=> localStorage.getItem('userID'))
    const {setUserShoppingCartCount} = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://karin-shop-db.onrender.com/cart?userId=${userId}&_expand=product`).then(res=>res.json()).then((data)=>setUserShoppingProducts(data)).catch((err)=>console.log(err));
    },[])

    useEffect(() => {
        setTotalQuantity(userShoppingProducts.reduce((acc , item)=> acc + item.quantity , 0))
        setTotalPrice(userShoppingProducts.reduce((acc , item)=> acc + item.quantity * item.product.price , 0))
    },[userShoppingProducts])
    useEffect(() => {
        setUserShoppingCartCount(totalQuantity);
    },[totalQuantity])

    const updateQuantityProduct = (id, newQuantity) => {
        fetch(`https://karin-shop-db.onrender.com/cart/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({quantity: newQuantity}),
        }).then(res =>{
            if (res.ok){
                fetch(`https://karin-shop-db.onrender.com/cart?userId=${userId}&_expand=product`).then(res=>res.json()).then((data)=>setUserShoppingProducts(data)).catch((err)=>console.log(err));
            }
        }).catch(err => console.log(err));
    }

    const removeShoppingProductItem =async (id)=>{
        await fetch(`https://karin-shop-db.onrender.com/cart/${id}`, {
            method: "DELETE",
        }).then(res => {
            if (res.ok){
                fetch(`https://karin-shop-db.onrender.com/cart?userId=${userId}&_expand=product`).then(res=>res.json()).then((data)=>setUserShoppingProducts(data)).catch((err)=>console.log(err));
            }
        })
            .catch(err => console.log(err));
    }

    const removeAllShoppinProduct = async (event)=>{
        event.preventDefault()
        for(const item of userShoppingProducts){
            await fetch(`https://karin-shop-db.onrender.com/cart/${item.id}`, {
                method: "DELETE",
            })
        }
        setUserShoppingProducts([])
    }

    return (
        <section className="container">
            <WebTitle title="کارین شاپ | سبد خرید"/>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 9 4-4-4-4"></path>
                    </svg>
                    <span className="pt-1 text-sm">سبد خرید</span>
                </span>
            </div>
            {/* ! ================== ! Shopping Cart Wrapper  ! ================== ! */}
            {userShoppingProducts.length > 0 ?
                    <div className="grid grid-cols-12 gap-4 mt-5">
                        {/* ! ================== ! Shopping Item Wrapper ! ================== ! */}
                        <div className="col-span-12 xl:col-span-9 bg-white dark:bg-gray-800 p-4 rounded-lg">
                            {/* ! ================== ! Shopping Details ! ================== ! */}
                            <div className="flex items-center justify-between mb-8">
                                {/* ! ================== ! Title ! ================== ! */}
                                <div className="flex items-center gap-x-1">
                                    <h2 className="text-xl font-Dana-Medium text-gray-800 dark:text-white">سبد خرید</h2>
                                    <span className="text-gray-400">{`(${totalQuantity} کالا)`}</span>
                                </div>
                                {/* ! ================== ! Remove All ITems ! ================== ! */}
                                <button onClick={removeAllShoppinProduct} type="buttton" className="flex items-center gap-x-1 text-red-600 dark:text-red-400 cursor-pointer">
                                    <span className="inline-block font-Dana-Medium text-lg mt-1">حذف همه</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="trash" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5 shrink-0" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21q.512.078 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48 48 0 0 0-3.478-.397m-12 .562q.51-.089 1.022-.165m0 0a48 48 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a52 52 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a49 49 0 0 0-7.5 0"></path>
                                    </svg>
                                </button>
                            </div>
                            {/* ! ================== ! Shopping Item ! ================== ! */}
                            <div className="space-y-4 divide-y-2 divide-gray-200 dark:divide-white/20">
                                {
                                    userShoppingProducts.map(product => (
                                        <ShoppingCartBox key={product.id} {...product} updateQuantityProduct={updateQuantityProduct} removeShoppingProductItem={removeShoppingProductItem}/>
                                    ))
                                }

                            </div>
                        </div>
                        {/* ! ================== ! Price Box Wrapper ! ================== ! */}
                        <div className="col-span-12 xl:col-span-3 sticky top-5 bg-white dark:bg-gray-800 p-4 rounded-lg self-start">
                            <ul className="text-gray-600 dark:text-gray-300 space-y-8">
                                <li className="flex items-center justify-between">
                                    <span className="">{`قیمت کالاها (${totalQuantity})`}</span>
                                    <span className="flex items-center gap-x-1">
                                    <span className="">{String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                    تومان
                                </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="">تخفیف</span>
                                    <span className="flex items-center gap-x-1">
                                    <span className="">۵۰۰,۰۰۰ </span>
                                    تومان
                                </span>
                                </li>
                                <li className="flex items-center justify-between border-t-2 border-dashed pt-8">
                                    <span className="">مبلغ نهایی :</span>
                                    <span className="flex items-center gap-x-1">
                                    <span className="">{String(totalPrice-500000).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>
                                    تومان
                                </span>
                                </li>
                            </ul>
                            <Link to="/" className="w-full flex-center gap-x-1 bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-lg transition-all mt-10">
                                <span className="">تایید و تکمیل سفارش</span>
                                <svg xmlns="http://www.w3.org/2000/svg" id="shopping-bag" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>:
                    <div className="flex flex-col items-center justify-center gap-y-20 my-20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="max-w-100" viewBox="0 0 896 747.971">
                            <path fill="#2f2e41" d="M41.634 712.738c12.428 23.049 38.806 32.943 38.806 32.943s6.227-27.475-6.201-50.524-38.806-32.944-38.806-32.944-6.227 27.476 6.201 50.525"></path>
                            <path fill="#3b82f6" d="M50.177 705.155c22.438 13.5 31.08 40.314 31.08 40.314s-27.738 4.927-50.177-8.573S0 696.582 0 696.582s27.738-4.927 50.177 8.573"></path>
                            <path fill="#f2f2f2" d="M413.248 35.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M513.249 37.408h2v18.5h-2zM452.248 37.408h2v18.5h-2zM484.248 131.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M522.249 113.908h2v18.5h-2zM583.249 113.908h2v18.5h-2zM670.249 176.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M708.249 158.908h2v18.5h-2zM769.249 158.908h2v18.5h-2zM656.249 640.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M694.249 622.908h2v18.5h-2zM755.249 622.908h2v18.5h-2zM417.248 319.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M455.248 301.908h2v18.5h-2zM516.249 301.908h2v18.5h-2zM461.248 560.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M499.248 542.908h2v18.5h-2zM560.249 542.908h2v18.5h-2zM685.249 487.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M723.249 469.908h2v18.5h-2zM784.249 469.908h2v18.5h-2z"></path>
                            <path fill="#2f2e41" d="M362.06 702.184H125.274v-1.703h235.082v-82.62H145.18l-10.453-21.777 1.536-.737 9.989 20.81H362.06z"></path>
                            <circle cx="156.789" cy="726.033" r="17.887" fill="#3f3d56"></circle>
                            <circle cx="333.101" cy="726.033" r="17.887" fill="#3f3d56"></circle>
                            <circle cx="540.927" cy="346.153" r="11.073" fill="#3f3d56"></circle>
                            <path fill="#2f2e41" d="M387.385 589.753H121.237L63.648 401.517h383.045l-.349 1.107Zm-264.888-1.703h263.639l58.234-184.83H65.95Z"></path>
                            <path fill="#f2f2f2" d="M366.61 579.958H132.842L82.26 413.015h336.441l-.306.983z"></path>
                            <path fill="#2f2e41" d="m451.465 384.7-1.647-.437 11.241-42.369h65.389v1.704H462.37zM82.258 458.584h345.293v1.704H82.258zM101.459 521.344h306.319v1.704H101.459z"></path>
                            <path fill="#2f2e41" d="M254.314 402.368h1.704v186.533h-1.704zM320.057 588.844l12.229-186.529 1.7.112-12.228 186.528zM176.38 402.424l1.7-.11 12.158 186.532-1.7.111zM0 745h896v2H0z"></path>
                            <path fill="#a0616a" d="M595.41 61.876s14.62 41.606 5.623 48.007 30.361 58.676 30.361 58.676l47.23-12.802-25.864-43.74s-3.374-43.74-3.374-50.141-53.975 0-53.975 0"></path>
                            <path d="M595.41 61.876s14.62 41.606 5.623 48.007 30.361 58.676 30.361 58.676l47.23-12.802-25.864-43.74s-3.374-43.74-3.374-50.141-53.975 0-53.975 0" opacity="0.1"></path>
                            <path fill="#2f2e41" d="M570.874 358.454s-4.268 53.341 0 81.079 10.668 104.549 10.668 104.549 0 145.089 23.47 147.222 40.54 4.268 42.673-4.267-10.668-12.802-4.267-17.07 8.535-19.202 0-36.271 0-189.896 0-189.896l40.54 108.817s4.267 89.613 8.534 102.415-4.267 36.272 10.668 38.406 32.005-10.668 40.54-14.936-12.802-4.267-8.535-6.4 17.07-8.535 12.802-10.669-8.535-104.55-8.535-104.55-11.735-218.699-26.67-227.233-24.537 6.165-24.537 6.165Z"></path>
                            <path fill="#2f2e41" d="M609.28 682.77v17.069s-19.203 46.4 0 46.4 34.138 4.808 34.138-1.593v-57.61ZM735.165 682.74v17.069s19.203 46.399 0 46.399-34.138 4.808-34.138-1.593v-57.608Z"></path>
                            <circle cx="625.282" cy="54.408" r="38.406" fill="#a0616a"></circle>
                            <path fill="#3b82f6" d="M613.547 125.886s10.668 32.004 27.737 25.604l17.07-6.401 29.87 204.83s-23.47 34.139-57.608 12.802-17.07-236.835-17.07-236.835"></path>
                            <path fill="#3f3d56" d="m643.418 119.485 9.601-20.27s56.542 26.67 65.077 35.205 8.534 21.337 8.534 21.337l-14.935 53.341s4.267 117.351 4.267 121.619 14.936 27.737 4.267 19.202-12.801-17.069-21.336-4.267-27.738 27.738-27.738 27.738Z"></path>
                            <path fill="#a0616a" d="m718.096 273.108-6.401 59.742s-38.406 34.139-29.871 36.272 12.802-6.4 12.802-6.4 14.935 14.935 23.47 6.4 29.871-89.613 29.871-89.613Z"></path>
                            <path fill="#2f2e41" d="M626.1.13c-8.514-.305-17.625-.455-24.804 4.133a36.3 36.3 0 0 0-8.572 8.392c-6.992 8.838-13.033 19.959-10.436 30.925l3.016-1.176a19.75 19.75 0 0 1-1.905 8.462c.425-1.235 1.848.762 1.467 2.011l-3.323 10.9c5.462-2.002 12.257 2.053 13.088 7.81.38-12.66 1.693-27.18 11.964-34.593 5.18-3.739 11.735-4.88 18.042-5.893 5.818-.935 11.918-1.827 17.49.088s10.32 7.615 9.056 13.371c2.57-.885 5.443.906 6.713 3.309s1.337 5.237 1.375 7.955c2.74 1.936 5.857-1.908 6.973-5.071 2.62-7.424 4.95-15.328 3.538-23.073s-7.724-15.148-15.597-15.174a5.47 5.47 0 0 0 1.422-3.849l-6.49-.548a7.17 7.17 0 0 0 4.287-2.26C650.798 8.716 630.314.28 626.1.13"></path>
                            <path fill="#3f3d56" d="M624.215 113.084s-17.37-17.021-23.62-15.979-14.786 15.979-14.786 15.979-51.207 17.069-49.074 34.138 25.604 100.282 25.604 100.282 19.203 100.282 2.134 110.95 81.079 38.406 83.212 25.604 6.401-140.821 0-160.024-23.47-110.95-23.47-110.95M698.893 147.222h26.383s18.424 81.08 20.557 89.614 6.401 49.074 4.268 49.074-44.807-8.535-44.807-2.134Z"></path>
                            <path fill="#f2f2f2" d="M698 348H597c-9.856-45.34-10.68-89.146 0-131h101c-16.3 41.1-17.318 84.607 0 131"></path>
                            <path fill="#a0616a" d="m555.938 292.31 29.871 12.803s57.609 8.534 57.609-14.936-57.609-10.668-57.609-10.668l-19.204-6.14Z"></path>
                            <path fill="#3f3d56" d="m562.339 134.42-25.604 6.401-19.203 113.084s-6.4 29.871 4.268 32.005 40.539 19.203 40.539 19.203 4.267-32.005 12.802-32.005l-21.337-17.07 12.802-74.677Z"></path>
                            <path fill="#f2f2f2" d="M60.248 352.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M98.249 334.908h2v18.5h-2zM159.249 334.908h2v18.5h-2zM109.249 56.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M209.249 58.408h2v18.5h-2zM148.249 58.408h2v18.5h-2zM250.249 253.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M350.248 255.408h2v18.5h-2zM289.248 255.408h2v18.5h-2zM12.248 252.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M112.249 254.408h2v18.5h-2zM51.248 254.408h2v18.5h-2zM180.249 152.908h140v2h-140z"></path>
                            <path fill="#f2f2f2" d="M218.249 134.908h2v18.5h-2zM279.248 134.908h2v18.5h-2z"></path>
                        </svg>
                        <div className="">
                            <h2 className="font-Dana-DemiBold text-2xl text-gray-800 dark:text-gray-100 mb-2">سبد خرید شما خالی است!</h2>
                            <Link to="/" className="flex items-center justify-center gap-x-1 text-blue-400 text-sm">
                                <span className="">مشاهده فروشگاه</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="rtl:rotate-180 size-2" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="m1 9 4-4-4-4"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
            }
        </section>
    );
}

export default ShoppingCart;