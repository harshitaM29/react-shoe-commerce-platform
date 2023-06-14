import { Fragment } from "react";
import ShoeForm from './ShoeForm';
import ShoeList from "./ShoeList";

const Shoe = props => {
    return (
    <Fragment>
        <ShoeForm />
        <ShoeList />
    </Fragment>
    )

}

export default Shoe;