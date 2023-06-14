import React from "react";

const ShoeCartContext = React.createContext({
    products: [],
    totalAmount: 0,
    addProduct: (proudct) => {},
    addProductCart:(product) => {},
    removeProductCart:(id) => {}
});

export default ShoeCartContext;