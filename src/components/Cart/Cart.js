import classes from './Cart.module.css';
import { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
const Cart = props => {
 
      
    return (
        <Modal>
        
                      
          
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{}</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} >Close</button>
         <button className={classes.button}>Order</button>
        </div>
        </Modal>
         
        
    )
}

export default Cart;