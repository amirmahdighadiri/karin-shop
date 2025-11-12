import ReactDOM from 'react-dom';
import {AppContext} from "../../context/AppContext.jsx";
import {useContext} from "react";


function Overlay() {
    const {overlay, setOverlay, setIsShowCityBox, setIsShowResultSearchBox,setOpenMenu, setIsOpenFilterBox, setIsOpenSortBox} = useContext(AppContext);
    const closeOverlayHandler = () => {
        setOverlay(false)
        setIsShowCityBox(false);
        setIsShowResultSearchBox(false);
        setOpenMenu(false);
        setIsOpenFilterBox(false);
        setIsOpenSortBox(false);
    }

    return ReactDOM.createPortal(
        <div
            className={`${overlay ? 'block' : 'hidden'} fixed inset-0 w-full h-full bg-black/30 z-10 backdrop-blur-xs transition-all`}
            onClick={closeOverlayHandler}></div>,
        document.getElementById("overlay")
    );
}

export default Overlay;