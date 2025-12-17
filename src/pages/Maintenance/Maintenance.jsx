import maintenanceImage from '../../assets/images/maintenance/maintenance.png'
import {Link} from "react-router-dom";

function Maintenance(props) {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <div className="">
                <img src={maintenanceImage} alt="Maintenance" className=""/>
            </div>
            <h2 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100 text-lg md:text-2xl text-center mb-2"> در حال توسعه این صفحه میباشیم.</h2>
            <Link to="/" className="flex items-center justify-center gap-x-1 text-blue-400 font-Dana-Medium text-sm mt-3 mb-10">
                بازگشت به صفحه اصلی
                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor"
                      className="rotate-90 size-3.5 transition-all" viewBox="0 0 24 24">
                    <path  d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
            </Link>
        </section>
    );
}

export default Maintenance;