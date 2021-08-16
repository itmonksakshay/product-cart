import React,{useContext,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductList from './productList';
import withSearch from './productListWithSearch';
import {productsFetch} from '../actions/productActions';
import { AppContext } from '../App';


const Home =(props)=>{

 let dispatch = useDispatch();

 useEffect(()=>{

 },[dispatch])

 const ProductListWithSearch = withSearch(ProductList);

    return(<>
       <ProductListWithSearch/>
    </>);

}
export default Home;
