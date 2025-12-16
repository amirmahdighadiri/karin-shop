import React from 'react';
import Tooltip from "../Tooltip/Tooltip.jsx";
import {Link} from "react-router-dom";

function ProductSkeleton() {
    return (
        <div className=" rounded-xl bg-gray-800 p-4 space-y-4">
            {/* ! ================== ! Top Content Skeleton ! ================== ! */}
            <div className="flex items-center justify-between">
               {/* ! ================== ! Action Button Skeleton ! ================== ! */}
               <div className="flex gap-2 top-3 left-3">
                   <div className="h-7 w-7 rounded-full bg-white/10 animate-pulse" />
                   <div className="h-7 w-7 rounded-full bg-white/10 animate-pulse" />
                   <div className="h-7 w-7 rounded-full bg-white/10 animate-pulse" />
               </div>
               {/* ! ================== ! Percent Box Skeleton ! ================== ! */}
               <div className="top-3 right-3 h-5 w-20 rounded-full bg-white/10 animate-pulse" />
            </div>
            {/* ! ================== ! Image Box Skeleton ! ================== ! */}
            <div className="h-40 w-full rounded-lg bg-white/10 mt-6 animate-pulse" />
            {/* ! ================== ! Text Box Skeleton ! ================== ! */}
            <div className="space-y-2 mt-7">
                <div className="h-4 w-11/12 rounded bg-white/10 animate-pulse" />
                <div className="h-4 w-8/12 rounded bg-white/10 animate-pulse" />
            </div>
            {/* ! ================== ! Price Box Skeleton ! ================== ! */}
            <div className="h-9 w-full rounded-lg bg-white/10 animate-pulse" />
        </div>
    );
}

export default ProductSkeleton;