import {createContext, useCallback, useEffect, useRef, useState} from "react";

export const AuthContext = createContext({
    isLogin: false,
    userInfo: {},
    login: () => {},
    logout: () => {},
})

function AuthProvider({children}) {
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [localCart , setLocalCart] = useState([]);
    const [serverCart , setServerCart] = useState([]);
    const [userShoppingCartCount, setUserShoppingCartCount] = useState(0);


    const login = useCallback (async userInfo=>{
        const getProduct = await JSON.parse(localStorage.getItem("shoppingCart")) || []
        setLocalCart(getProduct)

        try {
            const res = await fetch(`http://localhost:3000/cart?userId=${userInfo.id}`)
            const data = await res.json()

            if (data.length > 0) {
                setServerCart(data)
            }else {
                setServerCart([])
            }
        }catch (err){
            console.log(err)
        }

        setIsLogin(true);
        setUserInfo(userInfo);
        localStorage.setItem("userID", JSON.stringify(userInfo.id));

    },[])
    const logout = useCallback(() => {
        setIsLogin(false);
        setUserInfo({});
        localStorage.removeItem("userID");
    },[])

    const getProductCount = (id)=>{
        let userId = id
        if (!userId){
            userId = localStorage.getItem("userID");
        }

        fetch(`http://localhost:3000/cart?userId=${userId}`).then(res => res.json()).then(data => {
            setUserShoppingCartCount(data.reduce((acc, item) => acc + item.quantity, 0))
        })
    }

    useEffect(() => {
        if (!isLogin) return

        const allProducts = [
            ...serverCart.map(item=> ({...item}))
            , ...localCart.map(item=> ({...item}))
        ]

        setUserShoppingCartCount(allProducts.reduce((acc,item)=> acc + item.quantity , 0))

        const finalCart = []
        /* ! ================== ! Merge Item ! ================== ! */
        allProducts.forEach(item =>{
            const findItem = finalCart.find(product => product.productId === item.productId)

            if (findItem){
                findItem.quantity += item.quantity
            }else {
                finalCart.push(item)
            }
        })
        /* ! ================== ! Update Server And Local ! ================== ! */
        finalCart.map(async item =>{
            await fetch(`http://localhost:3000/cart/${item.id}` , {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item),
            }).then(res =>res.json()).then(data =>console.log(data)).catch(err =>{console.log(err)})
        })
        localStorage.setItem("shoppingCart" , JSON.stringify(finalCart));
        getProductCount()
    } , [serverCart , localCart])

    useEffect(() => {
        const initializeUserData = async ()=>{
            const isLoggedIn = localStorage.getItem("userID");
            getProductCount()
            if (isLoggedIn) {
                const res = await fetch(`http://localhost:3000/users/${isLoggedIn}`)
                const data = await res.json()

                setUserInfo(data)
                setIsLogin(true)
            }
        }
        initializeUserData().catch(err =>{console.log(err)})
    },[])

    return (
        <AuthContext.Provider value={{isLogin,userInfo,login,logout,userShoppingCartCount,setUserShoppingCartCount}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;