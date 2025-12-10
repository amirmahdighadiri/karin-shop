import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion.jsx";
import WebTitle from "../../util/WebTitle.jsx";

function Faq() {
    const [questions , setQuestions] = useState([]);
    const [openIndex, setOpenIndex] = useState(0);
    const [accrdionHeight, setAccrdionHeight] = useState(0);

    useEffect(() => {
        fetch("https://karin-shop-db.onrender.com/faq").then(res => res.json()).then((data) => setQuestions(data));
    } ,[])

    useEffect(() => {
        window.addEventListener("click",(event)=>{
            if (event.target.tagName !== "BUTTON" ) {
                setOpenIndex(null)
            }
        })

        return () => window.removeEventListener("click",(event)=>{
            if (event.target.tagName !== "BUTTON" ) {
                setOpenIndex(null)
            }
        })
    },[])

    const openAccordionHandler = (event , id)=>{
        setAccrdionHeight(event.target.parentNode.scrollHeight)
        setOpenIndex(prev => prev === id ? null : +event.target.id)

    }

    return (
        <section className="container">
            <WebTitle title="کارین شاپ |  سوالات متداول"/>
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
                    <span className="pt-1 text-sm">سوالات متداول</span>
                </span>
            </div>
            {/* ! ================== ! Page Content  ! ================== ! */}
            <div className="w-full my-20">
                {/* ! ================== ! Page Content Title  ! ================== ! */}
                <div className="flex flex-col items-center gap-y-2">
                    {/* ! ================== ! Icon ! ================== ! */}
                    <div className="size-10 flex-center rounded-full bg-white dark:bg-gray-700 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    {/* ! ================== ! Title ! ================== ! */}
                    <h1 className="text-zinc-900 dark:text-zinc-100 font-Dana-DemiBold text-lg">سوالات متداول</h1>
                    {/* ! ================== ! Descrption ! ================== ! */}
                    <p className="text-gray-400 text-center">
                        اگر سوال مورد نظر خود را پیدا نکردید به
                        <Link to="/" className="text-blue-500 text-sm"> پشتیبانی </Link>
                        تیکت بدهید.
                    </p>
                </div>
                {/* ! ================== ! Question Wrapper  ! ================== ! */}
                <ul className="w-full sm:w-10/12 md:w-5/12 mx-auto mt-10 text-gray-400 space-y-4">
                    {questions.map((item, index) => (
                       <Accordion key={item.id} {...item} openIndex={openIndex} openAccordionHandler={openAccordionHandler} accrdionHeight={accrdionHeight}/>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Faq;