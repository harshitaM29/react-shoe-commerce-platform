import classes from './ShoeList.module.css';
import ShoeItem from './ShoeItem';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
const DUMMY_SHOES = []

const ShoeList = props => {
    const shoeList =  DUMMY_SHOES.map(shoe => <ShoeItem key={shoe.id}
        id={shoe.id} 
        name={shoe.shoeName} 
        des={shoe.shoeDescription} 
        price={shoe.shoePrice} 
        large={shoe.shoeLarge}
        medium={shoe.shoeMedium}
        small={shoe.shoeSmall}
        quantity = {shoe.quantity} />)
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