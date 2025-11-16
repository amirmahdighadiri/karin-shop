import React, {memo, useEffect, useState} from 'react';

function LiveText({text}) {
    const [liveText, setLiveText] = useState(text);
    const [textIndex, setTextIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setFade(true)
                setTextIndex(prev => (prev + 1) % liveText.length)
            }, 300)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <p className={`transition-all duration-400 ease-initial text-sm ${fade ? 'opacity-100' : 'opacity-0'} text-${liveText[textIndex].colorName}`}>{liveText[textIndex].text}</p>
    );
}

export default memo(LiveText);