import React,{useContext} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductList from './productList';
import withSearch from './productListWithSearch';
import { AppContext } from '../App';


const Home =(props)=>{

 const ProductListWithSearch = withSearch(ProductList);

    return(<>
       <ProductListWithSearch/>
    </>);

}
export default Home;
