import React, {useContext, useEffect, useState} from 'react';
import Input from "../../Input/input.jsx";
import useForm from "../../../hook/useForm.jsx";
import {maxValidator, minValidator} from "../../../validators/rules.jsx";
import DynamicIcon from "../../../icon/DynamicIcon.jsx";
import {AuthContext} from "../../../context/AuthContext.jsx";
import {userFields} from "../../../data.jsx";
import {AppContext} from "../../../context/AppContext.jsx";
import AcceptModal from "../../Modals/AcceptModal/AcceptModal.jsx";
import Notification from "../../Notification/Notification.jsx";

function UserInformation() {

    const [filds, setFilds] = useState(userFields);
    const [formState, onInputChange , dispatch] = useForm({
        fullname: {
            value: "",
            isValid: false,
        },
        phone: {
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
        },
        password: {
            value: "",
            isValid: false,
        }
    }, false)
    const [isOpenEditPopup, setIsOpenEditPopup] = useState(false);
    const {userInfo} = useContext(AuthContext);
    const {setOverlay ,isShowModal , setIsShowModal} = useContext(AppContext);
    const [selectedInputId , setSelectedInputId ] = useState("");
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [messageStatus , setMessageStatus] = useState(false);
    const userId = localStorage.getItem("userID");

    useEffect(() => {
        dispatch({
            type: "SET_USER_VALUES",
            value : userInfo
        })
    },[userInfo])

    const openEditPopupHandler = (event , id) => {
        event.preventDefault();
        setIsShowModal(true);
        setOverlay(true)
        setSelectedInputId(id)
    }
    const CancelOperationHandler = () => {
        setOverlay(false)
        setIsShowModal(false)
    }

    const updateDataHandler = async () => {
        try {
            const res = await fetch(`https://karin-shop-db.onrender.com/users/${userId}` , {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({[selectedInputId] : formState?.inputs[selectedInputId].value})
            })

            if (!res.ok){
                setMessageStatus(false)
                throw new Error('خطا در آپدیت داده ها')
            }else {
                setMessageStatus(true)
            }

        }catch (err){

        } finally {
            setOverlay(false)
            setIsShowModal(false)
            setIsOpenNotification(true)
        }
    }

    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            {/* ! ================== ! Page Title ! ================== ! */}
            <h2 className="font-Dana-DemiBold md:text-lg text-zinc-900 dark:text-zinc-100 mb-5">اطلاعات حساب کاربری :</h2>
            {/* ! ================== ! User Information Inputs ! ================== ! */}
            <div className="grid grid-cols-12 gap-5">
                {
                    userFields.map(field =>(
                        <div key={field.id} className="col-span-12 md:col-span-6">
                            <span className="inline-block mb-2 text-zinc-900 dark:text-zinc-100 text-sm">{field.lable}</span>
                            <Input id={field.inputId} type={field.inputType} value={formState?.inputs?.[field.inputId]?.value} onInputChange={onInputChange} validations={[minValidator(11), maxValidator(11)]} clickEvent={openEditPopupHandler} submitButton={true} textColor="text-gray-400"/>
                        </div>
                    ))
                }
            </div>
            {/* ! ================== ! Modal ! ================== ! */}
            {isShowModal && <AcceptModal updateDataHandler={updateDataHandler} CancelOperationHandler={CancelOperationHandler}/>}
            {/* ! ================== ! Notificatio ! ================== ! */}
            {isOpenNotification && (<Notification title={messageStatus ? 'موفق' : 'خطا'} message={messageStatus ? 'تغییرات با موفقیت انجام شد.' : 'خطا در آپدیت داده ها'} isOpenNotification={isOpenNotification} setIsOpenNotification={setIsOpenNotification}  IconComponent={() => <DynamicIcon name="closeCircle" />} />)}
        </div>
    );
}

export default UserInformation;