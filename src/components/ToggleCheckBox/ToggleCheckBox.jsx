import React, {memo} from 'react';

function ToggleCheckBox({id , title ,checkStatus, children , filterCahngeHandler}) {
    const clickHandler= () =>{
        filterCahngeHandler(id)
    }

    return (
        <div className="w-full flex items-center justify-between">
            <label htmlFor={id} className="cursor-pointer inline-flex items-center gap-x-2">
                {title}
                {children && children}
            </label>
            <label htmlFor={id} className="relative w-11 h-6 cursor-pointer">
                <input type="checkbox" id={id} className="hidden" onClick={clickHandler}/>
                <span className={`absolute inset-0 rounded-full ${checkStatus ? 'bg-blue-500 dark:bg-blue-500' : 'bg-gray-200 dark:bg-neutral-700'}  transition-all`}></span>
                <span className={`absolute left-0.5 top-1/2 -translate-y-1/2 inline-block size-5 rounded-full ${checkStatus ? 'bg-white translate-x-full' : 'bg-white dark:bg-neutral-400'}  shadow-xs transition-all`}></span>
            </label>
        </div>
    );
}

export default memo(ToggleCheckBox);