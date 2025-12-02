import React from 'react';
import ReactDOM from "react-dom";

function Notification({title, message , IconComponent}) {
    return ReactDOM.createPortal(
        <div className="w-90 h-20 fixed top-12.5 left-0 right-0 mx-auto flex items-center gap-x-3 p-3.5 pr-7 rounded-lg bg-gray-200 dark:bg-gray-800 shadow overflow-hidden">
            {/* ! ================== ! Notification Icon ! ================== ! */}
            <div className="relative h-full flex-center">
                <div className="absolute -right-1/2 -z-10 w-8 h-full rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                {IconComponent && <IconComponent />}
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