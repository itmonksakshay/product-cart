import {  ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE,REMOVE_ITEM,QUANTITY_CHANGE} from './action-types/actionConstants';
import { productDetailRequest} from '../helperFunctions/productHelpers';

//add cart action
export const addToCart= (id,qty)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:ADD_TO_CART_REQUEST});
            let product = await productDetailRequest(id);
            let cartProduct = {...product,cartQuantity:qty}
            dispatch({type:ADD_TO_CART_SUCCESS,payload:cartProduct});

        }catch(e){
            dispatch({type:ADD_TO_CART_FAILURE,payload:e.message});
        }
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

//add qt action
export const addQuantity=(id,qty)=>{
    return{
        type: QUANTITY_CHANGE,payload:{id,qty}
    }
}