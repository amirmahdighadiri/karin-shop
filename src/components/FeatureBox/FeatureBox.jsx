import {memo} from "react";

function FeatureBox({question , value}) {
    return (
        <div className="col-span-4 flex flex-col gap-y-1.5 h-16 p-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm">
            <p className="text-gray-500">{question}</p>
            <span className="text-slate-800 font-Dana-DemiBold dark:text-slate-200 line-clamp-1">{value}</span>
        </div>
    );
}

export default memo(FeatureBox);