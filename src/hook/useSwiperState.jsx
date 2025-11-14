import React, {useSyncExternalStore} from 'react';
import {getSnapshot, subscribe} from "../store/SwiperStore.jsx";

function useSwiperState() {
    return useSyncExternalStore(subscribe, getSnapshot);
}

export default useSwiperState;