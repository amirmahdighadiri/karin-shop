import React, {useEffect, useState} from 'react';
import Input from "../Input/input.jsx";
import {maxValidator, minValidator, requiredValidator} from "../../validators/rules.jsx";
import useForm from "../../hook/useForm.jsx";
import regex from "../../validators/regex.jsx";


function Password() {

    const [formState, onInputChange] = useForm({
        password: {
            value: "",
            isValid: false,
        },
        repeatPassword: {
            value: "",
            isValid: false,
        }
    }, false)
    const [passwordSecurity, setPasswordSecurity] = useState(0)
    const [conditions, setConditions] = useState([])
    const [passCount , setPassCount] = useState(0);



    useEffect(() => {

        const newConditions = [
            {id: 1 , check: formState.inputs.password.value.length >=8, label: "حداقل ۸ حرف" },
            {id: 2 , check: regex.numberRegex(formState.inputs.password.value), label: "شامل عدد" },
            {id: 3 , check: regex.upperCaseRegex(formState.inputs.password.value), label: "شامل یک حروف بزرگ" },
        ];

        setConditions(newConditions)

    }, [formState.inputs.password.value])

    useEffect(() => {
        setPassCount(()=> conditions.filter(item => item.check === true).length)
    }, [conditions])

    const checkLoginHandler = (event)=>{
        event.preventDefault()

        if (formState.inputs.password.value === formState.inputs.repeatPassword.value){
            console.log("welcome")
        }else {
            console.log("error")
        }
    }


    return (
        <form className="">
            <span className="block text-gray-800 dark:text-gray-100 text-lg font-Dana-Medium mb-2">تغییر رمز عبور</span>
            <span className="block text-sm/6 text-blue-500 dark:text-gray-300 font-Dana-Medium mb-3">رمز عبور باید حداقل 8 حرفی باشد</span>
            {/* ! ================== ! Password Input  ! ================== ! */}
            <div className="">
                <Input id="password" type="password"
                       validations={[requiredValidator(), minValidator(10), maxValidator(20)]} placeHolder={"رمز عبور"}
                       onInputChange={onInputChange}/>
                <div className="flex items-center gap-x-2 mt-6">
                    {
                        conditions.map((item, index) => (
                            <div key={item.id} className={`w-full h-1 ${index < passCount ? 'bg-blue-500' : 'bg-gray-300'} rounded-full transition-all`}></div>
                        ))
                    }

                </div>
                {/* ! ================== ! Password Rule  ! ================== ! */}
                <div className="my-5 space-y-1">
                    {
                        conditions.map((item) => (
                            <span key={item.id} className={`block ${item.check ? 'text-blue-500' : 'text-gray-300 dark:text-gray-500'} text-sm font-Dana-Medium rounded-full transition-all`}>{item.label}</span>
                        ))
                    }
                </div>
            </div>
            {/* ! ================== ! Repeat Password Input  ! ================== ! */}
            <Input id="repeatPassword" type="password"
                   validations={[requiredValidator(), minValidator(10), maxValidator(20)]} placeHolder={"تکرار رمز عبور*"}
                   onInputChange={onInputChange}/>
            <button onClick={checkLoginHandler}
                    className={`w-full flex-center p-3 rounded-md text-white dark:bg-blue-600 mt-5 ${passCount === 3 ? 'opacity-100 cursor-pointer' : 'opacity-20 cursor-not-allowed'}`}
                    type="submit" disabled={passCount !== 3}>ورود
            </button>
        </form>
    );
}

export default Password;