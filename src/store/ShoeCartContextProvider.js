import ShoeCartContext from "./shoe-context";
import { useState } from "react";

const ShoeCartContextProvider = props => {
    const [cartItems, setCartItems] = useState([]);
    const addProductHandler = (product) => {
        setCartItems(preProduct => {
            return [product,...preProduct];
        })
      
    }
    const addProductCartHandler = (product) => {
        const index = cartItems.findIndex(ct => ct.id === product.id);
        if(index === -1) {
            const updateCart = cartItems.push({
                ...product,
              });
              setCartItems(updateCart)
            }
              else{
                cartItems[index].large -= 1;
                cartItems[index].quantity +=1;
                setCartItems([...cartItems]);
              }
              
       
            // setCartItems(updateCart);
        setCartItems([...cartItems])
        console.log(cartItems)
    }
    const cartContext = {
        products: cartItems,
        totalAmount: 0,
        addProduct: addProductHandler,
        addProductCart:addProductCartHandler,
        removeProductCart:(id) => {}
    }
    return (
        <ShoeCartContext.Provider value={cartContext}>
            {props.children}
        </ShoeCartContext.Provider>
    )
}

export default ShoeCartContextProvider;