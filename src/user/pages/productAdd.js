import React ,{useState} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { productSave } from '../../actions/productActions';

const ProductAdd = ()=>{

    const dispatch = useDispatch();

    let  productSaveState =  useSelector(state => state.productSave);
    console.log(productSaveState);

    const formSubmitEvent = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        dispatch(productSave(data));
    }

    if(productSaveState.loading){

        return(<div><h2>Saving Product</h2></div>)
    }

    return(<div>
        <h2>Add Product</h2>
        <form className="" onSubmit={(e)=>formSubmitEvent(e)}>
                <div className="">
                <label>Product Title :- </label>
                <input type="text" className="" name="title" id="" placeholder="" required/>
                </div>
                <div className="">
                    <label>Product Price :-</label>
                    <input type="number" name="price" className="" id="" placeholder="" required/>
                </div>
                <div className="">
                <label>Product Image:</label>
                <input  name="images" type="file" className="" id="" multiple required/>
                </div>
                <div className="">
                <label>Product Description :-</label>
                <textarea className="" name="description" rows="5" id="" required></textarea>
                </div>
                <button type="submit" className="" >Submit</button>
            </form>
    </div>);
}
export default ProductAdd;