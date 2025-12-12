import React, {useEffect} from 'react';
import ReactDOM from "react-dom";

function AcceptModal({updateDataHandler ,CancelOperationHandler}) {
    useEffect(() => {
        document.body.className = "min-h-screen overflow-hidden";

        return () => {
            document.body.className = "";
        };
    }, []);

    const acceptButtonHandler = (event) => {
        event.preventDefault();
        updateDataHandler()
    }
    const cancelButtonHandler = (event) => {
        event.preventDefault();
        CancelOperationHandler()
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 w-80 mx-auto flex-center z-20">
            <div className="w-full p-5 rounded-lg bg-white dark:bg-gray-800 shadow">
                <p className="font-Dana-DemiBold text-center text-xl text-zinc-900 dark:text-zinc-100">آیا مایلید تغییرات اعمال شوند؟</p>
                <div className="flex items-center justify-center gap-x-3 *:px-3 *:py-2 *:border *:border-blue-500 *:rounded-lg *:cursor-pointer mt-4">
                    <button onClick={acceptButtonHandler} className="bg-blue-500 text-zinc-100">تایید</button>
                    <button onClick={cancelButtonHandler} className="bg-transparent text-blue-500">انصراف</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export default AcceptModal;