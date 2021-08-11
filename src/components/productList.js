import React ,{useMemo,useState,useEffect,useContext} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductCard from '../snippets/productCard';
import {productsFetch} from '../actions/productActions';
import AppContext from '../App'

const ProductList =({searchTerm})=>{
    const style={
        productCard:{
            width:"25%",
            padding:"5px"
        }
    }
    
  //  console.log(useContext(AppContext));
   // let cartItems = useSelector((state) => state.addedItems);
    let [productList,setProducts] = useState(useSelector(state =>state.productList));
 
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('loading');
        //dispatch(productsFetch());
    },[searchTerm]);
    console.log(productList);

    let itemList = useMemo(()=> productList.data.map((item,key)=>{
        return(<div style={style.productCard} key={key} >
                <ProductCard item={item} />
             
                {/*(cartItems.find(cartItem=>cartItem.id === item.id))?(<p style={{color:"red"}}>Added to the cart</p>):(null)*/} 
                </div>)
    }),[productList.data]);



    return(
        <div className="container">
            <h3 className="text-center">Our Products</h3>
            <div className="box">
                {itemList}
            </div>
        </div>
    )
    
}
export default ProductList;

