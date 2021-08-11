import { PRODUCT_FETCHING,PRODUCT_FETCH_SUCCESS,PRODUCT_FETCH_FAILURE} from './action-types/actionConstants';
import {productList} from '../helperFunctions/productHelpers';
import axios from 'axios';
//add cart action
const productsFetch = ()=>{

    return (dispatch) => {
        dispatch({type: PRODUCT_FETCHING});
        productList().then((res)=> {
             dispatch({type:PRODUCT_FETCH_SUCCESS,payload:res});
        }).catch((e)=>{
            console.log(e);
           dispatch({type:PRODUCT_FETCH_FAILURE,payload:e});
        });
    }
}


export {productsFetch};