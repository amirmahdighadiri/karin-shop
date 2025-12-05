import React from 'react';
// Images
import map from '../../../assets/images/icon/map.png'

function UserAddress(props) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-8">
            {/* ! ================== ! My Address Title ! ================== ! */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <img src={map} alt="map icon" className="size-8 object-cover"/>
                    <h2 className="font-Dana-Medium text-lg text-zinc-900 dark:text-zinc-100">آدرس های من:</h2>
                </div>
                <button type="button" className="flex items-center gap-x-1 text-blue-500 font-Dana-DemiBold">
                    <svg xmlns="http://www.w3.org/2000/svg" id="plus" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                    </svg>
                    آدرس جدید
                </button>
            </div>
            {/* ! ================== ! Address Item List ! ================== ! */}
            <ul className="mt-5 space-y-3">
                <li className="border border-blue-300 dark:border-blue-400 p-4 rounded-lg">
                    <div className="flex items-center gap-x-1 text-blue-500 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" id="map" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0"></path>
                        </svg>
                        <h2 className="font-Dana-DemiBold">نام آدرس</h2>
                    </div>
                    <div className="space-y-1.5 text-gray-600 dark:text-gray-300 mt-3 mr-2">
                        <p className="">استان تهران-بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک ۱۰</p>
                        <p className="">کد پستی: 000000000</p>
                        <p className="">گیرنده: امیرمهدی قدیری | ۰۹000000000</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default UserAddress;