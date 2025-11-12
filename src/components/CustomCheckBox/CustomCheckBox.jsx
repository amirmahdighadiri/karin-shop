import React from 'react';

function CustomCheckBox({id,inputId,checked,title,changeCategoryFilterHandler}) {
    const clickHandler= ()=>{
        changeCategoryFilterHandler(id)
    }
    return (
        <label htmlFor={inputId} className="inline-flex items-center gap-x-4 cursor-pointer group">
            <input onClick={clickHandler} id={inputId} type="checkbox" className="hidden"/>
            <span className={`relative flex-center size-5 shadow ${checked ? 'bg-blue-500 border-blue-500 text-white' : 'dark:bg-gray-600 border-slate-300 dark:border-transparent text-transparent transition-all'} border rounded cursor-pointer before:content-[''] before:absolute before:z-0 before:size-12 before:rounded-full before:opacity-0 before:invisible before:bg-slate-400 group-hover:before:opacity-10 group-hover:before:visible before:transition-all`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 text-inherit">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
            </span>
            <span className={`text-gray-800 dark:text-gray-400`}>{title}</span>
        </label>
    );
}

export default CustomCheckBox;