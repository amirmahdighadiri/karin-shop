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

function Input({id,type,validations,onInputChange,placeHolder,errorText,resetInput , textColor , IconComponent , clickEvent}) {

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


    const clickHandler = (event)=>{
        clickEvent(event)
    }

    return (
        <div className="relative">
            <input id={id} type={type} value={input.value} onChange={inputChangeHandler} autoComplete="off" placeholder={placeHolder || ''}
                   onPaste={e => e.preventDefault()}
                   data-validations={[requiredValidator(), minValidator(11), maxValidator(30)]}
                   className={`w-full bg-slate-100 dark:bg-gray-900 text-base sm:text-sm/6 ${textColor ? textColor : 'text-gray-800 dark:text-gray-100'} p-3 rounded-lg border-2 border-transparent outline-none focus:border-indigo-100 dark:focus:border-blue-400 transition-all`}/>
            {errorText && <span className={`block text-red-500 dark:text-rose-500 text-sm mt-2.5 pr-2 pb-2`}>
                    {input.value.length === 0 && isChange ? 'این فیلد نمی‌تواند خالی باشد': !input.isValid && isChange ? 'لطفا شماره موبایل معتبر وارد کنید' : ''}
                </span>}
            {IconComponent && <button type="button" className="absolute left-3 top-1/2 -translate-y-1/2 my-auto text-gray-400 cursor-pointer outline-none" onClick={clickHandler}><IconComponent /></button>}
        </div>

    )
}

export default Input;