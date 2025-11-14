import {Link} from "react-router-dom";

function ProductBox({title, price, dicountPercent, score, todaySend, src}) {
    return (
        <div className="h-full bg-white dark:bg-gray-800 px-4 pt-3 pb-2 rounded-xl shadow-lg">
            {/* ! ================== ! TopBox ! ================== ! */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-x-0.5 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" id="rocket" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.9 14.9 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.9 14.9 0 0 0-2.58 5.84m2.699 2.7-.311.06a15 15 0 0 1-2.448-2.448l.06-.312m-2.24 2.39a4.49 4.49 0 0 0-1.757 4.306 4.49 4.49 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                    </svg>
                    <span className="text-xs pt-1">ارسال امروز</span>
                </div>
                <div className="flex items-center gap-x-0.5 text-gray-400">
                    <span className="text-sm pt-1">{score}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" id="star" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z"></path>
                    </svg>
                </div>
            </div>
            {/* ! ================== ! Product Image ! ================== ! */}
            <Link to="/" className="flex-center">
                <img src={`${import.meta.env.BASE_URL}${src}`} alt="" className="w-44 h-32 object-cover" loading={"lazy"}/>
            </Link>
            {/* ! ================== ! Product Title ! ================== ! */}
            <Link to="/" className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 mt-1">
                {title}
            </Link>
            {/* ! ================== ! Product Price Wrapper ! ================== ! */}
            <div className="flex items-center justify-between text-zinc-900 dark:text-zinc-100 pt-4 border-t-2 dark:border-gray-700 border-gray-200 mt-2">
                <div className="h-6 w-10 inline-flex items-center justify-center bg-blue-500 text-white rounded-xl text-xs pt-1">
                    {dicountPercent}%
                </div>
                <span className="flex items-center gap-x-1 text-lg">
                    {String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span className="text-xs">تومان</span>
                </span>
            </div>
        </div>
    );
}

export default ProductBox;