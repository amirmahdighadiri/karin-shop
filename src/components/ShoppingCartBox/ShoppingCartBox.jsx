import { Link} from "react-router-dom";
import {useEffect, useState} from "react";

function ShoppingCartBox({id, quantity, colorCode, colorName, warranty, deliveryTime, product , updateQuantityProduct , removeShoppingProductItem}) {


    const incrementItem = () => updateQuantityProduct(id, quantity+1);
    const decrementItem = () => quantity > 1 ? updateQuantityProduct(id, quantity-1) : console.log("remove item")
    const removeProductItem = ()=> removeShoppingProductItem(id)

    return (
        <div className="flex justify-between p-4">
            <div className="flex items-center">
                {/* ! ================== ! Product Image AND (incrementItem , decrementItem) Button ! ================== ! */}
                <div className="shrink-0 ml-6">
                    <img src={product.src} alt={product.title} className="w-36"/>
                    <div className="w-full flex items-center justify-between border border-gray-200 dark:border-white/20 px-2 py-1 rounded-lg">
                        <button onClick={incrementItem} className="text-green-600 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" id="plus" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                        </button>
                        <span className="text-lg text-gray-800 dark:text-white">{quantity}</span>
                        <button onClick={decrementItem} className="text-red-500 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" id="minus" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* ! ================== ! Product Details ! ================== ! */}
                <div className="flex flex-col gap-y-4">
                    <h2 className="font-Dana-Medium text-gray-800 dark:text-white line-clamp-1">{product.title}</h2>
                    <ul className="text-gray-400 space-y-4 text-sm">
                        <li className="flex items-center gap-x-1.5">
                            <span className={`size-5 bg-[${colorCode}] bg-blue-500 rounded-full`}></span>
                            <span className="">{colorName}</span>
                        </li>
                        <li className="flex items-center gap-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" id="shield" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6 12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"></path>
                            </svg>
                            <span className="">{warranty}</span>
                        </li>
                        <li className="flex items-center gap-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" id="truck" fill="none" stroke="currentColor"
                                 strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.9 17.9 0 0 0-3.213-9.193 2.06 2.06 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.6 48.6 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path>
                            </svg>
                            <span className="">{deliveryTime}</span>
                        </li>
                    </ul>
                    <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 font-Dana-Medium mt-4 text-lg">
                    <span className="text-xl">{String(product.price*quantity).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    تومان
                </span>
                </div>
            </div>
            {/* ! ================== ! Product Remove Button And Link ! ================== ! */}
            <div className="flex flex-col items-end justify-between shrink-0">
                <div onClick={removeProductItem} className="hidden md:block text-gray-800 dark:text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" id="x-mark" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <Link to="/" className="flex items-center mt-auto gap-x-1 text-blue-500 text-sm">
                    <span className="hidden lg:block">افزودن به خرید بعدی</span>
                    <span className="block lg:hidden">خرید بعدی</span>
                    <svg xmlns="http://www.w3.org/2000/svg" id="chevron-left" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default ShoppingCartBox;