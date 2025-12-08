import React, {useContext, useEffect, useState} from 'react';
import Input from "../../Input/input.jsx";
import useForm from "../../../hook/useForm.jsx";
import {maxValidator, minValidator} from "../../../validators/rules.jsx";
import DynamicIcon from "../../../icon/DynamicIcon.jsx";
import {AuthContext} from "../../../context/AuthContext.jsx";

function UserInformation() {

    const [formState, onInputChange , dispatch] = useForm({
        fullName: {
            value: "",
            isValid: false,
        },
        phoneNumber: {
            value: "",
            isValid: false,
        },
        email: {
            value: "",
            isValid: false,
        },
        birthday: {
            value: "",
            isValid: false,
        }
    }, false)
    const [isOpenEditPopup, setIsOpenEditPopup] = useState(false);
    const {userInfo} = useContext(AuthContext);

    useEffect(() => {
        dispatch({
            type: "SET_USER-VALUES",
            value : userInfo
        })
    },[userInfo])

    const openEditPopupHandler = (event) => {
        event.preventDefault();
        console.log(1)
    }
    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <h2 className="font-Dana-DemiBold md:text-lg text-zinc-900 dark:text-zinc-100 mb-5">اطلاعات حساب کاربری :</h2>
            
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6">
                    <span className="inline-block mb-2 text-zinc-900 dark:text-zinc-100 text-sm">نام و نام خانوادگی</span>
                    <Input id="fullName" type="text" onInputChange={onInputChange} validations={[minValidator(11), maxValidator(11)]} IconComponent={()=> <DynamicIcon name="pencilSquare" />} clickEvent={openEditPopupHandler} textColor="text-gray-400"/>
                </div>
                {/*<div className="col-span-6">*/}
                {/*    <span className="inline-block mb-2 text-zinc-900 dark:text-zinc-100 text-sm">نام و نام خانوادگی</span>*/}
                {/*    <Input id="fullName" type="text" onInputChange={onInputChange} validations={[minValidator(11), maxValidator(11)]} IconComponent={()=> <DynamicIcon name="pencilSquare" />} clickEvent={openEditPopupHandler} textColor="text-gray-400"/>*/}
                {/*</div>*/}
                {/*<div className="col-span-6">*/}
                {/*    <span className="inline-block mb-2 text-zinc-900 dark:text-zinc-100 text-sm">نام و نام خانوادگی</span>*/}
                {/*    <Input id="fullName" type="text" onInputChange={onInputChange} validations={[minValidator(11), maxValidator(11)]} IconComponent={()=> <DynamicIcon name="plus" />} clickEvent={openEditPopupHandler} textColor="text-gray-400"/>*/}
                {/*</div>*/}
                {/*<div className="col-span-6">*/}
                {/*    <span className="inline-block mb-2 text-zinc-900 dark:text-zinc-100 text-sm">نام و نام خانوادگی</span>*/}
                {/*    <Input id="fullName" type="text" onInputChange={onInputChange} validations={[minValidator(11), maxValidator(11)]} IconComponent={()=> <DynamicIcon name="pencilSquare" />} clickEvent={openEditPopupHandler} textColor="text-gray-400"/>*/}
                {/*</div>*/}
                {/*<div className="col-span-6">*/}
                {/*    <span className="inline-block mb-2 text-zinc-900 dark:text-zinc-100 text-sm">نام و نام خانوادگی</span>*/}
                {/*    <Input id="fullName" type="text" onInputChange={onInputChange} validations={[minValidator(11), maxValidator(11)]} IconComponent={()=> <DynamicIcon name="pencilSquare" />} clickEvent={openEditPopupHandler} textColor="text-gray-400"/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default UserInformation;