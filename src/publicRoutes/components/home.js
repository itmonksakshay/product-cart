import React,{useContext,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductList from './productList';
import withSearch from './productListWithSearch';
import {productsFetch} from '../../actions/productActions';
import  ImageSlider from '../../snippets/mainImageSlider';


const Home =(props)=>{

 let dispatch = useDispatch();

 useEffect(()=>{

 },[dispatch])
     const images =["http://placeimg.com/1940/940/any","https://www.placecage.com/1940/940","http://placekitten.com/1940/940"]
 //const ProductListWithSearch = withSearch(ProductList);

    return(<div>
         <ImageSlider images={images}/>
         <h2>Home Page</h2>
    </div>);

}
export default Home;
