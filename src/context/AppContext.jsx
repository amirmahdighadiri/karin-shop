import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const AppContext = createContext()

function AppProvider({children}) {
    const [overlay, setOverlay] = useState(false);
    const [isShowCityBox, setIsShowCityBox] = useState(false);
    const [isShowResultSearchBox, setIsShowResultSearchBox] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [isOpenLoginPopup, setIsOpenLoginPopup] = useState(false);
    const [isResetInput, setIsResetInput] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [isOpenFilterBox, setIsOpenFilterBox] = useState(false);
    const [isOpenSortBox, setIsOpenSortBox] = useState(false);
    const [lastUrl, setLastUrl] = useState("");
    const [isOpenGallery, setIsOpenGallery] = useState(false);
    const [isOpenDasboardMenu, setIsOpenDasboardMenu] = useState(false);
    const location = useLocation();

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light"
    });

    useEffect(()=>{
        setOpenMenu(false);
        setOverlay(false)
    },[location.pathname])

    useEffect(() => {
        document.documentElement.className = String(theme)
        localStorage.setItem("theme", String(theme));
    }, [theme])

    return (
        <AppContext.Provider value={{
            overlay, setOverlay, isShowCityBox,
            setIsShowCityBox,isShowResultSearchBox, setIsShowResultSearchBox,openMenu, setOpenMenu ,
            theme, setTheme,isOpenLoginPopup, setIsOpenLoginPopup,isResetInput, setIsResetInput ,isRegister, setIsRegister,isOpenFilterBox, setIsOpenFilterBox,
            isOpenSortBox, setIsOpenSortBox,lastUrl, setLastUrl , isOpenGallery, setIsOpenGallery ,isOpenDasboardMenu, setIsOpenDasboardMenu
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;