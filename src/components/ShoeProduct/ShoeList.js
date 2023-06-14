import classes from './ShoeList.module.css';
import ShoeItem from './ShoeItem';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ShoeCartContext from '../../store/shoe-context';
import { useContext } from 'react';
const DUMMY_SHOES = []

const ShoeList = props => {
    const productList = useContext(ShoeCartContext);
    console.log(productList.products)
    const shoeList =  productList.products.map(shoe => <ShoeItem key={shoe.id}
        id={shoe.id} 
        name={shoe.name} 
        des={shoe.des} 
        price={shoe.price} 
        large={shoe.large}
        medium={shoe.medium}
        small={shoe.small}
        quantity = {shoe.quantity} />)
        console.log(shoeList)
    return (
        
    <section className={classes.list}>
        <Card>
    <ul>
       {shoeList}
      
        </ul>
        </Card>
    </section>
    )
}

export default ShoeList;