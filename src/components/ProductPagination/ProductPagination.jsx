import React, {useEffect, useState} from "react";
import clsx from "clsx";


function ProductPagination({pagination}) {
    const {items, setItem, itemsPerPage ,currentPage, setCurrentPage} = pagination;


    const pageCount = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedItems = items.slice(startIndex, endIndex);

        setItem(paginatedItems);

    }, [currentPage,items])

    const changePageHandler = (pageNumber) => setCurrentPage(pageNumber);
    const paginationButtons = () => {
        const pageNumberButton = []

        for (let i = 1; i <= pageCount; i++) {
            pageNumberButton.push(<button key={i} onClick={() => changePageHandler(i)} className={clsx('pagination pagination-hover' , {'active-pagination' : currentPage === i})}>{i}</button>)
        }

        return pageNumberButton
    }

    return (
        <div className="flex items-center justify-center gap-x-3 mt-10">
            <button disabled={currentPage === 1} onClick={()=> changePageHandler(currentPage +1)} className={clsx('pagination-next-button',{'pagination-hover' : currentPage !== 1 },{'disabled-pagination-button' : currentPage === 1})}>
                <svg xmlns="http://www.w3.org/2000/svg" id="chevron-left" fill="none" stroke="currentColor"
                     strokeWidth="1.5" className="size-5 rotate-180 text-znic-900 dark:text-zinc-100"
                     viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                </svg>
            </button>
            {paginationButtons()}
            <button disabled={currentPage === pageCount} onClick={()=> changePageHandler(currentPage +1)} className={clsx('pagination-next-button',{'pagination-hover' : currentPage !== pageCount },{'disabled-pagination-button' : currentPage === pageCount})}>
                <svg xmlns="http://www.w3.org/2000/svg" id="chevron-left" fill="none" stroke="currentColor"
                     strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                </svg>
            </button>
        </div>
    );
}

export default ProductPagination;