import React, {memo, useState} from 'react';

function CommentForm({userId, productId, setIsOpenNotification, setNotificatioStatus,setComments}) {
    const [commentTitle, setCommentTitle] = useState("")
    const [commentReaction, setCommentReaction] = useState(null)
    const [commentContent, setCommentContent] = useState("")

    const toggleReaction = reaction => {
        setCommentReaction(prev => prev === reaction ? null : reaction);
    }
    const sendCommentToServer = async event => {
        event.preventDefault()
        if (commentTitle.length && commentContent.length && commentReaction.length) {
            const newComment = {
                id: Date.now(),
                productId,
                userId,
                title: commentTitle,
                content: commentContent,
                createdAt: new Date().toISOString(),
                likes: commentReaction === 'like' ? [userId] : [],
                dislikes: commentReaction === 'dislike' ? [userId] : []
            }
           await fetch("https://karin-shop-db.onrender.com/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment)
            }).then(res => {
                if (res.ok) {
                    setNotificatioStatus(true)
                    setComments(prev => [...prev , newComment])
                }
            }).catch(err => setNotificatioStatus(false))
        } else {
            setNotificatioStatus(false)
        }
        setIsOpenNotification(true)
    }

    return (
        <form className="w-full lg:w-1/4">
            <p className="text-lg mb-2 text-zinc-900 dark:text-white">ثبت دیدگاه</p>
            <input type="text" value={commentTitle} onChange={(event) => setCommentTitle(event.target.value)}
                   className="w-full border dark:border-white/20 dark:text-zinc-100 rounded-lg p-2 mb-4 focus:pr-3 focus:border-blue-400 transition-all duration-300 outline-none"
                   placeholder="عنوان"/>
            <p className="dark:text-white text-gray-500 text-sm mb-4">این محصول را به دیگران پیشنهاد :</p>
            {/* ! ================== ! Reaction Wrapper ! ================== ! */}
            <div className="flex items-center gap-4">
                <button onClick={() => toggleReaction("like")} type="button"
                        className={`flex-1 flex items-center justify-center gap-x-2 text-green-600 border ${commentReaction === "like" ? 'border-green-600' : 'dark:border-white/20'} py-2 rounded-lg transition-all duration-300 cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="hand-up" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9 9 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.5 4.5 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715q.068.633.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.5 4.5 0 0 1-1.423-.23l-3.114-1.04a4.5 4.5 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5q.125.307.27.602c.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.96 8.96 0 0 0-1.302 4.665 9 9 0 0 0 .654 3.375Z"></path>
                    </svg>
                    میکنم
                </button>
                <button onClick={() => toggleReaction("dislike")} type="button"
                        className={`flex-1 flex items-center justify-center gap-x-2 text-red-500 border ${commentReaction === "dislike" ? 'border-red-500' : 'dark:border-white/20'} py-2 rounded-lg transition-all duration-300 cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="hand-down" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="size-6" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12 12 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.5 7.5 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9 9 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75q.015.075.05.148a8.95 8.95 0 0 1 .925 3.977 8.95 8.95 0 0 1-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a9 9 0 0 0 .303-.54"></path>
                    </svg>
                    نمیکنم
                </button>
            </div>
            <textarea value={commentContent} onChange={(event) => setCommentContent(event.target.value)}
                      className="h-24 w-full outline-none dark:text-zinc-100 dark:placeholder:text-white/40  border dark:border-white/20 rounded-lg p-2 mt-5 mb-4 focus:pr-3 focus:border-blue-400 transition-all duration-300 resize-none"
                      placeholder="متن دیدگاه"></textarea>
            <button type="submit" onClick={sendCommentToServer}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 cursor-pointer transition-all">ثبت
            </button>
        </form>
    );
}

export default memo(CommentForm);