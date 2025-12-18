import React from 'react';

function ArticleSkeleton(props) {
    return (
        <div className="bg-gray-800 rounded-lg p-4 space-y-4 animate-pulse">
            {/* ! ================== ! Image Box Skeleton ! ================== ! */}
            <div className="h-40 w-full rounded-lg bg-white/10" />
            {/* ! ================== ! Text Content Skeleton ! ================== ! */}
            <div className="space-y-2">
                <div className="h-4 w-11/12 rounded bg-white/10" />
                <div className="h-4 w-7/12 rounded bg-white/10" />
            </div>
            {/* ! ================== ! Details Box Skeleton ! ================== ! */}
            <div className="flex items-center justify-between pt-2">
                <div className="h-4 w-14 rounded bg-white/10" />
                <div className="h-4 w-20 rounded bg-white/10" />
            </div>
        </div>
    );
}

export default ArticleSkeleton;