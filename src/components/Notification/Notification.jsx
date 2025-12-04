import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";

function Notification({title, message, IconComponent, setIsOpenModal, isOpenModal}) {
    const [modalTopPosition, setModalTopPosition] = useState(0);

    useEffect(() => {

        setModalTopPosition(window.scrollY + 20)

        const closeModalTimer = setTimeout(() => {
            setIsOpenModal(false)
        }, 2700)

        const changgePositionTimer = setTimeout(() => {
            setModalTopPosition(-50)
        }, 2500)


        return () =>{
            clearTimeout(closeModalTimer)
            clearTimeout(changgePositionTimer)
        }

    }, [])
    return ReactDOM.createPortal(
        <div className={`w-90 h-20 absolute left-0 right-0 z-20 mx-auto flex items-center gap-x-3 p-3.5 pr-7 rounded-lg bg-gray-200 dark:bg-gray-800 shadow overflow-hidden transition-all`}
            style={{
                top: modalTopPosition ,
            }}>
            {/* ! ================== ! Notification Icon ! ================== ! */}
            <div className="relative h-full flex-center">
                <div className="absolute -right-1/2 -z-10 w-8 h-full rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                {IconComponent && <IconComponent/>}
            </div>
            {/* ! ================== ! Notification Content ! ================== ! */}
            <div className="text-zinc-900 dark:text-zinc-100">
                <p className="font-Dana-DemiBold text-lg">{title}</p>
                <p className="text-sm">{message}</p>
            </div>
            {/* ! ================== ! Progress Bar ! ================== ! */}
            <div className="absolute bottom-0 -right-0 w-full h-0.75 bg-blue-500 animate-grow-width"></div>
        </div>,
        document.getElementById("notification"));
}

export default Notification;