import classes from './HeaderCart.module.css';
import CartIcon from '../Cart/CartIcon';
import { Fragment, useContext} from 'react';
import ShoeCartContext from '../../store/shoe-context';


const HeaderCart = props => {
    const cartCtx = useContext(ShoeCartContext);
    let quantity = 0;
    cartCtx.products.forEach(product => {
        quantity = quantity + Number(product.quantity);
    })
    return (
        <Fragment>
       <button className={classes.button} onClick={props.onClick}>
        <span  className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>

       </button>
       </Fragment>
    )
}

export default HeaderCart;