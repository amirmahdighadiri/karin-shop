import {memo} from "react";


function ServicesBox({title , icon}) {
    return (
        <div className="flex items-center w-full gap-x-2 p-2 border border-gray-200 dark:border-white/20 text-gray-400 rounded-lg">
            {icon}
            <span className="">{title}</span>
        </div>
    );
}

export default memo(ServicesBox);