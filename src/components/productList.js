import React ,{useMemo,useState,useEffect,useContext,useReducer} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductCard from '../snippets/productCard';
import {productsFetch} from '../actions/productActions';
import AppContext from '../App'
//import { productList } from '../helperFunctions/productHelpers';
import axios from 'axios';


const ProductList =({searchTerm})=>{


    const style={
        productCard:{
            width:"25%",
            padding:"5px"
        }
    }
    

    let productList = useSelector(state =>state.productList);
 
    const dispatch = useDispatch();
    useEffect(() => {

        if((!productList.isLoading && !productList.error && (!productList.data.length || searchTerm ))){
            dispatch(productsFetch(searchTerm));
        }

    },[searchTerm]);
    let itemList = useMemo(()=> {

        return productList.data.map((item,key)=>{
            return(<div style={style.productCard} key={key} >
                    <ProductCard item={item} />
                 
                    {/*(cartItems.find(cartItem=>cartItem.id === item.id))?(<p style={{color:"red"}}>Added to the cart</p>):(null)*/} 
                    </div>)
        });


    },[searchTerm]);
    
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

