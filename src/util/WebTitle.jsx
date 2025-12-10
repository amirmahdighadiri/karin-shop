import {useEffect} from 'react';

function WebTitle({title}) {
    useEffect(()=>{
        document.title = title;
    } , [title])
}

export default WebTitle;