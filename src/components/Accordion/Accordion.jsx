import React from 'react';

function Accordion({id , question,answer , openIndex , openAccordionHandler,accrdionHeight}) {
    return (
        <li className={` w-full flex flex-col py-3 px-5 rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden transition-all duration-300`}
            style={{
                height: openIndex === id ? `${accrdionHeight}px` : "48px",
            }}
        >
            <button id={id} onClick={(event)=>openAccordionHandler(event , id)} type="button" className="flex items-center justify-between cursor-pointer">
                {question}
                <svg xmlns="http://www.w3.org/2000/svg" id="chevron" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${openIndex === id ? 'rotate-0' : 'rotate-90'} size-4 transition-all`} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
            </button>
            <p className="mt-2.5 text-justify leading-7">{answer}</p>
        </li>
    );
}

export default Accordion;