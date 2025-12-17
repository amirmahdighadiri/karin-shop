import React, {useContext, useEffect} from 'react';
import ReactDOM from "react-dom";
import {AppContext} from "../../context/AppContext.jsx";

function Loader() {

    useEffect(() => {
        document.body.className = "min-h-screen overflow-hidden";

        return () => {
            document.body.className = "";
        };
    }, []);

    return ReactDOM.createPortal (
        <div className="fixed inset-0 z-30 flex-center min-h-screen bg-white dark:bg-gray-900">
            {/* ! ================== ! Background Effect ! ================== ! */}
            <svg className="absolute -z-10 left-0 top-0 h-full w-full mask-radial stroke-black/10 stroke-[2] [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1)_20%,rgba(255,255,255,0)_95%)] dark:stroke-white/10">
                <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
                <defs>
                    <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse" viewBox="0 0 64 64">
                        <path fill="none" d="M64 0H0v64"></path>
                    </pattern>
                </defs>
            </svg>
            <div className="w-70 p-5 bg-gray-200 dark:bg-gray-800 rounded-lg">
                <p className="font-Morabba text-4xl text-zinc-900 dark:text-zinc-100 mb-5 text-center"><span className="text-blue-500">کارین</span> شاپ </p>
                <div className="loader"></div>
            </div>
        </div> ,
        document.getElementById("loader")
    )
}

export default Loader;