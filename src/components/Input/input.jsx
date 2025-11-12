import {useEffect, useReducer, useState} from "react";
import {maxValidator, minValidator, requiredValidator} from "../../validators/rules.jsx";
import validator from "../../validators/validator.jsx";

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_USERNAME": {
            return {
                ...state,
                value: action.value,
                isValid: validator(action.value , action.validations),
            }
        }
        case "RESET":{
            return {
                ...state,
                value: action.value,
                isValid: validator(action.value , action.validations),
            }
        }
        default : {
            return state;
        }
    }
}

function Input({id,type,validations,onInputChange,placeHolder,errorText,resetInput}) {
    const [input, dispatch] = useReducer(reducer, {
        value: "",
        isValid: false,
    })

    {/* ! ================== ! State For Error Label ! ================== ! */}
    const [isChange, setIsChange] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type)

    const inputChangeHandler = (event) => {
        setIsChange(true);
        dispatch({
            type: 'CHANGE_USERNAME',
            value: event.target.value,
            validations: validations
        })
    }

    const resetInputHandler = () => {
        dispatch({
            type: 'RESET',
            value: "",
            validations: validations
        })
    }

    useEffect(() => {
        onInputChange(id, input.value, input.isValid)
    }, [input.value])

    useEffect(() => {
        resetInput && resetInputHandler()
    },[resetInput])

    const showPasswordHandler = (event)=> {
        inputType === 'password' ? setInputType('text') : setInputType('password')
        setIsShowPassword(prev => !prev)
    }


    return (
        <div className="relative">
            <input id={id} type={inputType} value={input.value} onChange={inputChangeHandler} autoComplete="off" placeholder={placeHolder || ''}
                   onPaste={e => e.preventDefault()}
                   data-validations={[requiredValidator(), minValidator(11), maxValidator(30)]}
                   className="w-full bg-slate-100 dark:bg-gray-900 text-base sm:text-sm/6 text-gray-800 dark:text-gray-100 p-3 rounded-lg border-2 border-transparent outline-none focus:border-indigo-100 dark:focus:border-blue-400 transition-all"/>
            {errorText && <span className={`block text-red-500 dark:text-rose-500 text-sm mt-2.5 pr-2 pb-2`}>
                    {input.value.length === 0 && isChange ? 'این فیلد نمی‌تواند خالی باشد': !input.isValid && isChange ? 'لطفا شماره موبایل معتبر وارد کنید' : ''}
                </span>}
            {type === 'password' && <div className="absolute left-3 top-1/2 -translate-y-1/2 my-auto text-gray-800 dark:text-gray-500 cursor-pointer" onClick={showPasswordHandler}>
                {/* ! ================== ! Show Password Icon  ! ================== ! */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isShowPassword ? 'block' : 'hidden'} size-4.5`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                {/* ! ================== ! Hide Password Icon  ! ================== ! */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isShowPassword ? 'hidden' : 'block'} size-4.5`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
            </div>}
        </div>

    )
}

export default Input;