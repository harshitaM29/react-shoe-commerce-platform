import Card from '../UI/Card/Card';
import classes from './ShoeForm.module.css'
import Button from '../UI/Button/Button'
import { Fragment, useContext, useState } from "react";
import ShoeCartContext from '../../store/shoe-context';


const ProductForm = props => {
    const [enteredId, setEnteredId] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredDes,setEnteredDes] = useState('');
    const [enteredPrice, setEnteredPrice] =useState('');
    const [enteredLarge, setEnteredLarge] = useState('');
    const [enteredMedium, setEnteredMedium] = useState('');
    const [enteredSmall, setEnteredSmall] = useState('');
    const prdCtx = useContext(ShoeCartContext);

    const updateId = (e) => {
        setEnteredId(e.target.value);
        
    }
    const updateName = (e) => {
        setEnteredName(e.target.value);
    }
    const updateDes = (e) => {
        setEnteredDes(e.target.value);
    }
    const updatePrice = (e) => {
        setEnteredPrice(e.target.value);
        
    }
    const updateLarge = (e) => {
        setEnteredLarge(e.target.value);
        
    }
    const updateMedium = (e) => {
        setEnteredMedium(e.target.value);
        
    }
    const updateSmall = (e) => {
        setEnteredSmall(e.target.value);
        
    }
   const addProductItem = (e) =>{
    e.preventDefault();
    const prodcutItem = {
        id: enteredId,
        name: enteredName,
        des: enteredDes,
        price: enteredPrice,
        large: enteredLarge,
        medium: enteredMedium,
        small: enteredSmall,
        quantity:0
    }
    prdCtx.addProduct(prodcutItem);
    setEnteredId('');
    setEnteredName('');
    setEnteredDes('');
    setEnteredPrice('');
    setEnteredLarge('');
    setEnteredMedium('');
    setEnteredSmall('')
   }
  return (
       <section className={classes.form}>
       
        <form onSubmit={addProductItem}>
        <div className={classes.input}>
            <label htmlFor="productID">Shoe ID</label>
            <input type="number" id="productID" value={enteredId} onChange={updateId} />
            </div>
         <div className={classes.input}>
            <label htmlFor="name">Shoe Name</label>
            <input type="text" id="name" value={enteredName} onChange={updateName} />
        </div>
        <div className={classes.input}>
            <label htmlFor="shoeDes">Shoe Description</label>
            <input type="text" id="shoeDes" value={enteredDes} onChange={updateDes}/>
            </div>
            <div className={classes.input}>
            <label htmlFor="shoePrice">Shoe Price</label>
            <input type="number" id="shoePrice" value={enteredPrice} onChange={updatePrice} />
        </div>
        <div className={classes.input} >
            <label htmlFor="large">Large</label>
            <input type ="number" id="large" value={enteredLarge} onChange={updateLarge}/>
        </div>
            <div className={classes.input} >
            <label htmlFor="medium">Medium</label>
            <input type ="number" id="medium" value={enteredMedium} onChange={updateMedium} />
        </div>
        <div className={classes.input} >
            <label htmlFor="small">Small</label>
           
            <input type ="number" id="small" value={enteredSmall} onChange={updateSmall} />
            </div>
        <div className={classes.action} >
            <Button type="submit">Add Product</Button>
            </div>
        </form>
       </section>
       
    )
};

export default ProductForm;