import {memo, useState} from 'react';

function CommentBox({title,content,createdAt,likes,dislikes,user}) {
    const [reaction, setReaction] = useState(null);
    const [userId, setUserId] = useState(()=> localStorage.getItem('userID'));

    const toggleReaction =(reaction)=>{
        setReaction(prev => prev === reaction ? null : reaction);
    }

    const toJalali = iso =>
        new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(iso));
    return (
        <div className="py-4">
            {/* ! ================== ! Comments Title ! ================== ! */}
            <div className="flex items-center gap-x-2">
                <h3 className="font-Dana-Medium text-zinc-900 dark:text-zinc-100 text-lg">{title}</h3>
                <span className="text-white text-xs bg-blue-500 px-2 py-1 rounded-lg">خریدار</span>
            </div>
            {/* ! ================== ! User ُSggestion ! ================== ! */}
            <p className="flex items-center gap-x-1 text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" id="hand-up" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9 9 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.5 4.5 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715q.068.633.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.5 4.5 0 0 1-1.423-.23l-3.114-1.04a4.5 4.5 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5q.125.307.27.602c.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.96 8.96 0 0 0-1.302 4.665 9 9 0 0 0 .654 3.375Z"></path>
                </svg>
                پیشنهاد میشود
            </p>
            {/* ! ================== ! Comment Text ! ================== ! */}
            <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">{content}</p>
            {/* ! ================== ! Comment Details ! ================== ! */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-y-2">
                {/* ! ================== ! Comment Date & User Name ! ================== ! */}
                <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                    <span className="">{toJalali(createdAt)}</span>
                    <span className="">{user?.fullname}</span>
                </div>
                {/* ! ================== ! Comment Reaction Wrapper ! ================== ! */}
                <div className="flex items-center gap-x-2 mt-3 lg:mt-0">
                    <p className="text-gray-400 text-sm">آیا این دیدگاه برایتان مفید بود؟</p>
                    <div className="flex items-center gap-x-2">
                        <button onClick={()=>toggleReaction('like')} type="button" className={`flex items-center justify-center gap-x-2 text-sm text-green-600 border ${reaction === 'like' ? 'border-green-600' : 'border-transparent'} p-2 rounded-lg transition-all duration-300 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="hand-up" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9 9 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.5 4.5 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715q.068.633.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.5 4.5 0 0 1-1.423-.23l-3.114-1.04a4.5 4.5 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5q.125.307.27.602c.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.96 8.96 0 0 0-1.302 4.665 9 9 0 0 0 .654 3.375Z"></path>
                            </svg>
                            {likes.length}
                        </button>
                        <button onClick={()=>toggleReaction('dislike')} type="button" className={`flex items-center justify-center gap-x-2 text-sm text-red-500 border ${reaction === 'dislike' ? 'border-red-500' : 'border-transparent'} p-2 rounded-lg transition-all duration-300 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="hand-down" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12 12 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.5 7.5 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9 9 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75q.015.075.05.148a8.95 8.95 0 0 1 .925 3.977 8.95 8.95 0 0 1-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a9 9 0 0 0 .303-.54"></path>
                            </svg>
                            {dislikes.length}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(CommentBox);