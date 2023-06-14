import classes from './AddButton.module.css';
import ShoeCartContext from '../../store/shoe-context';
import { useContext } from 'react';
const AddButton = props =>{

    const cartCtx = useContext(ShoeCartContext);
    const addCartItem = (e) => {
        e.preventDefault();
        let q = 0;
        q += 1;
        cartCtx.addProductCart({...props.products,quantity:q})
    }
    
    return (
    <div className={classes.action} >
        <button onClick={addCartItem}>Buy Large({props.products.large})</button>
        <button>Buy Medium({props.products.medium})</button>
        <button>Buy Small({props.products.small})</button>
    </div>
    )

}

export default AddButton;