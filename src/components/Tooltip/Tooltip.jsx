import {memo} from "react";

function Tooltip({title}) {
    return (
        <div className={`absolute z-20 -left-7.5 -top-[125%] flex-center w-24 bg-blue-500 rounded-xl p-1.5 text-xs font-Dana-Medium text-gray-100 invisible opacity-0 group-hover/tooltip:visible group-hover/tooltip:opacity-100 transition-all before:content-[''] before:absolute before:bottom-0 before:translate-y-1/2 before:size-1.5 before:rotate-45 before:bg-blue-500`}>{title}</div>
    );
}

export default memo(Tooltip);