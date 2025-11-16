
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../../context/AppContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";

function LoginPopup({title, description,children}) {

    const {setIsOpenLoginPopup, setIsResetInput} = useContext(AppContext);
    const {isLogin}= useContext(AuthContext);
    const navigate = useNavigate();

    const redirectUserToHomePage=()=>{
        setIsOpenLoginPopup(false);
        setIsResetInput(false);
        isLogin && navigate("/")
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 w-full h-full flex-center z-10 bg-black/60 backdrop-blur-xs">
            {/* ! ================== ! Popup Box  ! ================== ! */}
            <div className="w-100 flex flex-col items-center justify-center px-4 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 rounded-md py-4">
                {/* ! ================== ! Popup Content  ! ================== ! */}
                {children}
                <span className="block mt-5 mb-4 font-Dana-DemiBold text-3xl">{title}</span>
                <span className="font-Dana-DemiBold text-center">{description}</span>
                {/* ! ================== ! Popup Btn  ! ================== ! */}
                <button onClick={redirectUserToHomePage} type="submit" className="px-4 py-2 text-white bg-blue-600/70 rounded-md mt-5 cursor-pointer">باشه</button>
            </div>
        </div>,
        document.getElementById("popup")
    )
}

export default LoginPopup;