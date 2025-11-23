import React, {useContext, useState} from 'react';
import {data, Link, useLocation} from "react-router-dom";
import Input from "../Input/input.jsx";
import {maxValidator, minValidator, requiredValidator, phoneNumberValidator} from "../../validators/rules.jsx";
import useForm from "../../hook/useForm.jsx";
import {AppContext} from "../../context/AppContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";


function Register(props) {

    const {isOpenLoginPopup, setIsOpenLoginPopup,isResetInput, setIsResetInput,isRegister, setIsRegister} = useContext(AppContext);
    const {login}= useContext(AuthContext);

    const [formState, onInputChange] = useForm({
        username: {
            value: "",
            isValid: false,
        },
        phone: {
            value: "",
            isValid: false,
        },
        fullName: {
            value: "",
            isValid: false,
        },
        password: {
            value: "",
            isValid: false,
        }
    }, false)

    const registerHandler = async (event) => {
        event.preventDefault()
        const users = await fetch("https://karin-shop-db.onrender.com/users").then(res => res.json()).then(data => data).catch(err => console.log(err));
        const newUser = {
            id: users.length + 1,
            username: formState.inputs.username.value,
            fullname: formState.inputs.fullName.value,
            phone: formState.inputs.phone.value,
            email: "",
            password: formState.inputs.password.value
        }


        setIsRegister(true)

        await fetch("https://karin-shop-db.onrender.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        }).then(res => {
            if (!res.ok){
                return res.text().then(text =>{
                    throw new Error(text);
                })
            }else {
                return res.json()
            }
        }).then(data =>{
            setIsOpenLoginPopup(true);
            login(data)
        }).catch(err => {
            setIsOpenLoginPopup(true);
            setIsResetInput(true);
        });
    }

    return (
        <form className="mt-10">

            <span className="block text-gray-800 dark:text-gray-100 text-lg font-Dana-Medium mb-2">ثبت‌نام</span>
            <span className="block text-sm/6 text-blue-500 dark:text-gray-300 font-Dana-Medium mb-3">لطفا اطلاعات خود را با دقت وارد کنید</span>
            {/* ! ================== ! Inputs  ! ================== ! */}
            <div className="space-y-4">
                <Input id="username" type="text" validations={[requiredValidator(), minValidator(10), maxValidator(20)]}
                       placeHolder={"نام کاربری"} onInputChange={onInputChange} resetInput={isResetInput}/>
                <Input id="phone" type="text" validations={[phoneNumberValidator()]} placeHolder={"شماره موبایل"}
                       onInputChange={onInputChange} resetInput={isResetInput}/>
                <Input id="fullName" type="text"
                       validations={[requiredValidator(), minValidator(3), maxValidator(20)]}
                       placeHolder={"نام و نام خانوادگی"} onInputChange={onInputChange} resetInput={isResetInput}/>
                <Input id="password" type="password"
                       validations={[requiredValidator(), minValidator(10), maxValidator(20)]} placeHolder={"رمز عبور"}
                       onInputChange={onInputChange} resetInput={isResetInput}/>
            </div>
            <button
                onClick={registerHandler}
                className={`w-full flex-center p-3 rounded-md text-white dark:bg-blue-600 mt-5 ${formState.isFormValid ? 'opacity-100 cursor-pointer' : 'opacity-20 cursor-not-allowed'}`}
                type="submit"
                disabled={!formState.isFormValid}
            >
                ثبت نام
            </button>
            <p className="mt-8 text-center text-sm/6 text-gray-500 dark:text-gray-300">
                ورود شما به معنای پذیرش
                <Link to="" className="text-blue-400"> قوانین سایت </Link>
                است
            </p>
        </form>


    );
}

export default Register;