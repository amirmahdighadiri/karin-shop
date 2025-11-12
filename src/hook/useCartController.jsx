import {useReducer} from "react";

const reducer = (state, action) => {

}

function useCartController({products}) {
   const [CartController , dipatch] = useReducer(reducer, products);


}

export default useCartController;