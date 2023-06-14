import ShoeCartContext from "./shoe-context";
import { useState } from "react";

const ShoeCartContextProvider = props => {
    const [cartItems, setCartItems] = useState([]);
    const addProductHandler = (product) => {
        setCartItems(preProduct => {
            return [product,...preProduct];
        })
      
    }
    const cartContext = {
        products: cartItems,
        totalAmount: 0,
        addProduct: addProductHandler,
        addProductCart:(product) => {},
        removeProductCart:(id) => {}
    }
    return (
        <ShoeCartContext.Provider value={cartContext}>
            {props.children}
        </ShoeCartContext.Provider>
    )
}

export default ShoeCartContextProvider;