import React from 'react';

function UserMessage(props) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            {/* ! ================== ! Section Tite ! ================== ! */}
            <h2 className="font-Dana-DemiBold md:text-lg text-zinc-900 dark:text-zinc-100">پیام های من :</h2>
            {/* ! ================== ! Message Wrapper ! ================== ! */}
            <div className="mt-5 space-y-4">
                <div className="border border-blue-400/50 rounded-lg p-4">
                    {/* ! ================== ! Message Title ! ================== ! */}
                    <h3 className="text-blue-500 font-Dana-DemiBold lg:text-lg mb-5">پارسا وصالی عزیز سفارش شما با شماره پیگیری #۱۲۳۲۲۴ ارسال شد</h3>
                    {/* ! ================== ! Message Details ! ================== ! */}
                    <div className="flex flex-col gap-y-4 items-center justify-between">
                        <p className="flex items-center gap-x-2 text-gray-400">
                            <span className="">۱۴۰۴/۳/۹</span>
                            <span className="">|</span>
                            <span className="flex items-center gap-x-1">
                                ۱۴:۰۰
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mb-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                                </svg>
                            </span>
                        </p>
                        <button type="button" className="w-full md:w-auto flex items-center justify-center gap-x-2 bg-blue-400/20 text-blue-500 px-2 py-1.5 rounded-md cursor-pointer">
                            پیگیری سفارش
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="border border-blue-400/50 rounded-lg p-4">
                    {/* ! ================== ! Message Title ! ================== ! */}
                    <h3 className="text-green-500 font-Dana-DemiBold text-lg mb-5">پارسا وصالی عزیز سفارش شما در حال پیگیری می‌باشد</h3>
                    {/* ! ================== ! Message Details ! ================== ! */}
                    <div className="flex items-center justify-between">
                        <p className="flex items-center gap-x-2 text-gray-400">
                            <span className="">۱۴۰۴/۳/۹</span>
                            <span className="">|</span>
                            <span className="flex items-center gap-x-1">
                                ۱۴:۰۰
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mb-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                                </svg>
                            </span>
                        </p>
                        <button type="button" className="flex items-center gap-x-2 bg-blue-400/20 text-blue-500 px-2 py-1.5 rounded-md cursor-pointer">
                            پیگیری سفارش
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserMessage;