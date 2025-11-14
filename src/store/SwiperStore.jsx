let store = {
    isBeginning: true,
    isEnd: false,
};

let listeners = new Set();

export function getSnapshot() {
    return store;
}

export function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

export function updateSwiperState(isBeginning, isEnd) {
    store = { isBeginning, isEnd };
    listeners.forEach((fn) => fn());
}