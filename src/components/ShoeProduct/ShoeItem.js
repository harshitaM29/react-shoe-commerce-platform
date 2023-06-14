import classes from './ShoeItem.module.css';
import AddButton from './AddButton';

const ShoeItem = (props) => {
//    const price = `$${props.price.toFixed(2)}`;
console.log(props);

    return (
        <li  className={classes.shoe} key={props.id}>
            <div>
                
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.des}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
               <AddButton products={props} /> 
            </div>
        </li>
    )
}

export default ShoeItem;