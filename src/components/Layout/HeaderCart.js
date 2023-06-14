import classes from './HeaderCart.module.css';
import CartIcon from '../Cart/CartIcon';
import { Fragment, useContext} from 'react';


const HeaderCart = props => {
    return (
        <Fragment>
       <button className={classes.button} onClick={props.onClick}>
        <span  className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{0}</span>

       </button>
       </Fragment>
    )
}

export default HeaderCart;