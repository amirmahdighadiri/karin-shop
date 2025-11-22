import {memo} from "react";


function ServicesBox({title , icon}) {
    return (
        <div className="col-span-6 xl:col-span-3 flex items-center w-full gap-x-2 px-2 py-3 border border-gray-200 dark:border-white/20 text-gray-400 rounded-lg">
            {icon}
            <span className="text-sm">{title}</span>
        </div>
    );
}

export default memo(ServicesBox);