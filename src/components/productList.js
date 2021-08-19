import React ,{useMemo,useEffect,} from 'react';
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
        
        if(!productList.isLoading && !productList.error && !productList.isFetched){
            dispatch(productsFetch(searchTerm));
        }

        return () => {

            productList.isFetched = false;
        }

    },[searchTerm]);

    let {isLoading,isFetched,data} = productList;



    let itemList = useMemo(()=> {

        return data.map((item,key)=>{
            return(<div style={style.productCard} key={key} >
                    <ProductCard item={item} />
                </div>);
        });


    },[searchTerm]);


    if(isLoading){
        return(<div><h2>Loading</h2></div>);
    }

    if(isFetched && !data.length){
        return(<div><h2>No Products Found</h2></div>)
    }


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

