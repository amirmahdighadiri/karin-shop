import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Input from "../../components/Input/input.jsx";
import ContactForm from "../../components/Forms/ContactForm.jsx";
import Notification from "../../components/Notification/Notification.jsx";
import DynamicIcon from "../../icon/DynamicIcon.jsx";

function ContactUs(props) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [messageStatus , setMessageStatus] = useState(false);
    return (
        <section className="container">
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
                    <span className="pt-1 text-sm">تماس با ما</span>
                </span>
            </div>
            {/* ! ================== ! Contact US From ! ================== ! */}
            <ContactForm  setIsOpenModal={setIsOpenModal} setMessageStatus={setMessageStatus} />

            {
                isOpenModal && messageStatus && (
                    <Notification title="موفق" message="پبام شما با موفقیت ارسال شد" isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}  IconComponent={() => <DynamicIcon name="tickCircle" />} />
                )
            }

            {
                isOpenModal && !messageStatus && (
                    <Notification title="خطا" message="لطفا دوباره تلاش کنید"  IconComponent={() => <DynamicIcon name="closeCircle" />} />
                )
            }


        </section>
    );
}

export default ContactUs;