

function OrderTable(props) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg">
            {/* ! ================== ! Recent Order TItle ! ================== ! */}
            <div className="flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-10" fill="none" viewBox="0 0 64 64">
                    <path fill="url(#paint0_linear)" fillRule="evenodd"
                          d="M32 8a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-13.333 8c0-7.364 5.97-13.333 13.333-13.333S45.333 8.637 45.333 16 39.363 29.333 32 29.333 18.667 23.363 18.667 16"
                          clipRule="evenodd"></path>
                    <path fill="url(#paint1_linear)"
                          d="M10.667 17.933a3 3 0 0 1 3-3h36.666a3 3 0 0 1 3 3v35.734a5 5 0 0 1-5 5H15.667a5 5 0 0 1-5-5z"></path>
                    <g filter="url(#filter0_i)">
                        <path fill="url(#paint2_linear)" fillRule="evenodd"
                              d="m21.333 37.12 3.584-3.413 4.48 4.266 10.752-10.24 3.584 3.414L29.397 44.8z"
                              clipRule="evenodd"></path>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear" x1="21.333" x2="21.333" y1="5.333" y2="26.667"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#83D788"></stop>
                            <stop offset="1" stopColor="#4DB051"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="10.667" x2="10.667" y1="14.933" y2="58.667"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#83D888"></stop>
                            <stop offset="1" stopColor="#4CAF50"></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="24.548" x2="21.544" y1="25.802" y2="43.225"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2E7B32"></stop>
                            <stop offset="1" stopColor="#2E7B32"></stop>
                        </linearGradient>
                        <filter id="filter0_i" width="22.4" height="17.067" x="21.333" y="27.733"
                                colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feColorMatrix in="SourceAlpha" result="hardAlpha"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                            <feColorMatrix
                                values="0 0 0 0 0.0493759 0 0 0 0 0.339079 0 0 0 0 0.0644254 0 0 0 0.4 0"></feColorMatrix>
                            <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
                        </filter>
                    </defs>
                </svg>
                <h2 className="font-Dana-DemiBold text-lg text-zinc-900 dark:text-zinc-100">سفارش های اخیر :</h2>
            </div>
            {/* ! ================== ! Recent Order Table ! ================== ! */}
            <div className="relative mt-5 overflow-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="w-full text-right text-sm">
                    <thead className="">
                    <tr className="text-xs text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 *:px-6 *:py-3.5">
                        <th className="">نام محصول</th>
                        <th className="">تاریخ</th>
                        <th className="">قیمت</th>
                        <th className="">وضعیت</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-400">
                    <tr className="*:px-6 *:py-5 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-700 transition-all">
                        <th className="flex items-center gap-x-2 text-gray-900 dark:text-white text-nowrap">
                            <img src={`${import.meta.env.BASE_URL}/images/products/phone-image/11.png`} alt="iphone 16"
                                 className="size-10 object-cover"/>
                            <p className="">گوشی موبایل اپل مدل iPhone 16</p>
                        </th>
                        <td className="">1402/11/11</td>
                        <td className="">62,000,000 تومان</td>
                        <td className="text-red-500 font-Dana-DemiBold">لغو شده</td>
                    </tr>
                    <tr className="*:px-6 *:py-5 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-700 transition-all">
                        <th className="flex items-center gap-x-2 text-gray-900 dark:text-white text-nowrap">
                            <img src={`${import.meta.env.BASE_URL}/images/products/7.webp`} alt="macbook air"
                                 className="size-10 object-cover"/>
                            <p className="">گوشی موبایل اپل مدل iPhone 16</p>
                        </th>
                        <td className="">1402/11/11</td>
                        <td className="">62,000,000 تومان</td>
                        <td className="text-yellow-500 font-Dana-DemiBold">درانتظار پرداخت</td>
                    </tr>
                    <tr className="*:px-6 *:py-5 cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-700 transition-all">
                        <th className="flex items-center gap-x-2 text-gray-900 dark:text-white text-nowrap">
                            <img src={`${import.meta.env.BASE_URL}/images/products/5.webp`} alt="asus TUF"
                                 className="size-10 object-cover"/>
                            <p className="">گوشی موبایل اپل مدل iPhone 16</p>
                        </th>
                        <td className="">1402/11/11</td>
                        <td className="">62,000,000 تومان</td>
                        <td className="text-green-500 font-Dana-DemiBold">پرداخت شده</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderTable;