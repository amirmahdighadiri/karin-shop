import {Link} from "react-router-dom";
import useForm from "../../hook/useForm.jsx";
import React, {useContext, useEffect, useReducer, useState} from "react";
import {requiredValidator, minValidator, maxValidator} from "../../validators/rules.jsx"
import Input from "../Input/input.jsx";
import {AppContext} from "../../context/AppContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import DynamicIcon from "../../icon/DynamicIcon.jsx";


function Login(props) {
    const [formState, onInputChange] = useForm({
        username: {
            value: "",
            isValid: false,
        },
        password: {
            value: "",
            isValid: false,
        }
    }, false)



    const {isOpenLoginPopup, setIsOpenLoginPopup,isResetInput, setIsResetInput,isRegister, setIsRegister} = useContext(AppContext);
    const {login}= useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [passwordTypeStatus , setPasswordTypeStatus] = useState('password');

    useEffect(() => {
        fetch("https://karin-shop-db.onrender.com/users").then(res => res.json()).then(data => setUsers(data)).catch(err => console.log(err));
    },[])

    const checkLoginHandler = async (event) => {
        event.preventDefault()
        const hasUser = users.filter(user => user.phone === formState.inputs.username.value && user.password === formState.inputs.password.value)


        if (hasUser.length > 0) {
            await login(hasUser[0])
        }

        setIsOpenLoginPopup(true)
        setIsRegister(false)
        setIsResetInput(true);
    }
    const showPasswordHandler = (event)=> {
        passwordTypeStatus === 'password' ? setPasswordTypeStatus('text') : setPasswordTypeStatus('password')
    }

    return (
       <>
           {/* ! ================== ! Form  ! ================== ! */}
           <form className="mt-10">
               <span className="block text-gray-800 dark:text-gray-100 text-lg font-Dana-Medium mb-2">ورود | ثبت‌نام</span>
               <span className="block text-sm/6 text-blue-500 dark:text-gray-300 font-Dana-Medium mb-3">لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
               <Input id="username" type="text"
                      errorText="لطفا شماره موبایل معتبر وارد کنید"
                      validations={[requiredValidator(), minValidator(11), maxValidator(11)]}
                      onInputChange={onInputChange} resetInput={isResetInput}/>
               <Input id="password" type={passwordTypeStatus}
                      validations={[requiredValidator(), minValidator(10), maxValidator(20)]} placeHolder={"رمز عبور"}
                      onInputChange={onInputChange} resetInput={isResetInput} IconComponent={()=> <DynamicIcon name={passwordTypeStatus === 'password' ? 'eyeSlash' : 'eye'} /> } clickEvent={showPasswordHandler}/>
               <button onClick={checkLoginHandler}
                       className={`w-full flex-center p-3 rounded-md text-white bg-blue-400 dark:bg-blue-600 mt-5 ${formState.isFormValid ? 'opacity-100 cursor-pointer' : 'opacity-20 cursor-not-allowed'}`}
                       type="submit" disabled={!formState.isFormValid}>ورود
               </button>
               <p className="mt-8 text-center text-sm/6 text-gray-500 dark:text-gray-300">
                   ورود شما به معنای پذیرش
                   <Link to="" className="text-blue-400"> قوانین سایت </Link>
                   است
               </p>
           </form>
       </>
    );
}

export default Login;