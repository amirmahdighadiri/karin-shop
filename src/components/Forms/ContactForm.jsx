import React, {useState} from 'react';
import useForm from "../../hook/useForm.jsx";
import {Link} from "react-router-dom";
import Input from "../Input/input.jsx";
import {maxValidator, minValidator, requiredValidator} from "../../validators/rules.jsx";

function ContactForm({setIsOpenModal,setMessageStatus}) {

    const [formState, onInputChange] = useForm({
        phoneNumber: {
            value: "",
            isValid: false,
        },
        title: {
            value: "",
            isValid: false,
        }
    }, false)

    const [contentText , setContentText] = useState("");

    const sendQuestionHandler = (event)=>{
        event.preventDefault()

        if (formState.isFormValid && contentText.length >0){
            setMessageStatus(true)
        }else {
            setMessageStatus(false)
        }

        setIsOpenModal(true)


    }


    return (
        <form className="w-6/12 mx-auto bg-white dark:bg-gray-800 shadow rounded-lg p-5 mt-10 mb-20">
            {/* ! ================== ! Form Header  ! ================== ! */}
            <h1 className="font-Dana-DemiBold text-zinc-900 dark:text-zinc-100 text-lg mb-2 mt-4">تماس با ما</h1>
            <p className="text-zinc-900 dark:text-zinc-100 text-sm">
                قبل از مطرح کردن هر گونه سوال بخش
                <Link to="/faq" className="text-blue-500"> سوالات متداول </Link>
                را مطالعه نمایید.
            </p>
            {/* ! ================== ! Form Inputs  ! ================== ! */}
            <div className="flex items-center gap-x-5 *:flex-1 mt-10">
                <Input id="phoneNumber" type="text" placeHolder="شماره تماس" onInputChange={onInputChange} validations={[requiredValidator(), minValidator(11), maxValidator(11)]}/>
                <Input id="title" type="text" placeHolder="عنوان" onInputChange={onInputChange} validations={[requiredValidator(), minValidator(3), maxValidator(25)]}/>
            </div>
            <textarea id="contentText" value={contentText} onChange={(event) => setContentText(event.target.value)} placeholder="متن دیدگاه" className="w-full border-2 border-transparent focus:border-blue-400 resize-none bg-slate-100 dark:bg-gray-900 text-zinc-900 dark:text-zinc-100 mt-5 p-4 text-sm rounded-lg transition-all outline-none"></textarea>
            {/* ! ================== ! Form Submit Button  ! ================== ! */}
            <button onClick={sendQuestionHandler} type="button" className="w-full flex-center p-3 rounded-md text-white bg-blue-400 dark:bg-blue-600 mt-4 text-sm cursor-pointer">ارسال پیام</button>
            <div className="flex items-center justify-center gap-x-5 *:flex *:items-center *:gap-x-1 text-gray-400 text-sm mt-5">
                <p className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mb-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک ۱۰
                </p>
                <p className="">
                    KarinShop
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mb-1 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </p>
                <p className="">
                    0919100000
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mb-1 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </p>
            </div>
        </form>
    );
}

export default ContactForm;