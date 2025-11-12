import {Link} from "react-router-dom";

// Images

import namad1 from '../../assets/images/footer/1.png'
import namad2 from '../../assets/images/footer/2.png'

function Footer(props) {

    const GoTopHandler = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <footer className="md:container my-12">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-9">
                {/* ! ================== ! Footer Content ! ================== ! */}
                <div className="flex flex-col xl:flex-row items-start gap-x-8 gap-y-10">
                    {/* ! ================== ! About Carin ! ================== ! */}
                    <div className="flex-2">
                        {/* ! ================== ! Title ! ================== ! */}
                        <h2 className="font-Morabba text-xl text-white mb-4">درباره کارین شاپ</h2>
                        {/* ! ================== ! Content ! ================== ! */}
                        <p className="leading-8 text-gray-400 mb-5">در فروشگاه آنلاین ما، بهترین مدل‌های موبایل و لپ‌تاپ از برندهای معتبر جهانی را با کیفیت بالا و قیمتی مناسب برای شما فراهم آورده‌ایم. با انتخاب محصولات ما، تجربه‌ای حرفه‌ای و لذت‌بخش از فناوری را در خانه یا محل کار داشته باشید.</p>
                        {/* ! ================== ! Social Link ! ================== ! */}
                        <div className="flex items-center gap-x-4">
                            <Link to="/" className="size-10 flex-center bg-gray-950 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" id="instagram" fill="none" className="size-6 text-blue-500" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                            <Link to="/" className="size-10 flex-center bg-gray-950 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" id="whatsapp" fill="none" className="size-6 text-blue-500" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.96 9.96 0 0 1 2 12" clipRule="evenodd"></path>
                                    <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1 1 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308"></path>
                                </svg>
                            </Link>
                            <Link to="/" className="size-10 flex-center bg-gray-950 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" id="linkedin" fill="currentColor" className="size-6 text-blue-500" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clipRule="evenodd"></path>
                                    <path d="M7.2 8.809H4V19.5h3.2z"></path>
                                </svg>
                            </Link>
                            <Link to="/" className="size-10 flex-center bg-gray-950 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" id="youtube" fill="currentColor" className="size-6 text-blue-500" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.84 2.84 0 0 0-1.983.839 4.2 4.2 0 0 0-.79 1.965 30 30 0 0 0-.2 3.206v1.5a30 30 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.84 2.84 0 0 0 1.985-.84 4.3 4.3 0 0 0 .787-1.965 30 30 0 0 0 .2-3.206v-1.516a31 31 0 0 0-.202-3.206m-11.692 6.554v-5.62l5.4 2.819z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    {/* ! ================== ! Quick Access ! ================== ! */}
                    <div className="flex-1">
                        {/* ! ================== ! Title ! ================== ! */}
                        <h2 className="font-Morabba text-xl text-white mb-4">دسترسی سریع</h2>
                        {/* ! ================== ! Links ! ================== ! */}
                        <ul className="text-gray-400 space-y-2">
                            <li className=""><Link to="/" className="hover:text-blue-500 transition-all">صفحه اصلی</Link></li>
                            <li className=""><Link to="/" className="hover:text-blue-500 transition-all">فروشگاه</Link></li>
                            <li className=""><Link to="/" className="hover:text-blue-500 transition-all">تماس با ما</Link></li>
                            <li className=""><Link to="/" className="hover:text-blue-500 transition-all">سوالات متداول</Link></li>
                        </ul>
                    </div>
                    {/* ! ================== ! Contact US ! ================== ! */}
                    <div className="flex-[1.5] w-full">
                        {/* ! ================== ! Title ! ================== ! */}
                        <h2 className="font-Morabba text-xl text-white mb-4">تماس با ما</h2>
                        {/* ! ================== ! Contact US Content ! ================== ! */}
                        <ul className="text-gray-400">
                            <li className="flex items-center justify-between space-y-6">
                                <span className="">شماره تماس :</span>
                                <span className="" dir="ltr">021 - 345 678</span>
                            </li>
                            <li className="flex items-center justify-between space-y-6">
                                <span className="">آدرس ایمیل :</span>
                                <span className="" dir="ltr">KarinShop@gmail.com</span>
                            </li>
                            <li className="flex items-center justify-between space-y-6">
                                <span className="">آدرس :</span>
                                <span className="" dir="ltr">بلوار آزادی، استاد معین پلاک ۱۰</span>
                            </li>
                        </ul>
                    </div>
                    {/* ! ================== ! Namad ! ================== ! */}
                    <div className="flex-1 w-full flex flex-col items-end">
                        <div className="flex items-center gap-x-3">
                            <div className="size-16 lg:size-20 flex-center bg-gray-900 rounded-xl">
                                <img src={namad1} alt="namad" className="size-16" loading="lazy" />
                            </div>
                            <div className="size-16 lg:size-20 flex-center bg-gray-900 rounded-xl">
                                <img src={namad2} alt="namad" className="size-16" loading="lazy" />
                            </div>
                        </div>
                        {/* ! ================== ! Btn ! ================== ! */}
                        <button type="button" className="flex-center gap-x-2 rounded-lg text-sm mt-10 border-2 border-gray-400 text-gray-300 px-2 py-1.5 cursor-pointer mr-auto" onClick={GoTopHandler}>
                            <span className="">برگشت به بالا</span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 rotate-180" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* ! ================== ! Get Offers ! ================== ! */}
                <div className="flex flex-col md:flex-row gap-y-4 items-center justify-between p-4 md:p-6 rounded-xl bg-gray-950 dark:bg-gray-900 mt-6">
                    <Link to="/" className="text-3xl font-Morabba">
                        <span className="text-blue-500"> کارین </span>
                        <span className="text-gray-900 dark:text-white">شاپ</span>
                    </Link>
                    {/* ! ================== ! Btn ! ================== ! */}
                    <div className="flex items-center justify-between w-72 lg:w-88 p-2.5 bg-gray-900 dark:bg-gray-800 rounded-xl">
                        <input type="text" className="text-gray-200 border-none outline-none" placeholder="از جدیدترین تخفیف ها با خبر شوید"/>
                        <button type="button" className="px-4 py-1 rounded-xl font-Dana-Medium bg-blue-500 text-white">ثبت</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;