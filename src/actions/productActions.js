import { PRODUCT_FETCHING,PRODUCT_FETCH_SUCCESS,PRODUCT_FETCH_FAILURE,
    PRODUCT_SAVE_REQUEST,PRODUCT_SAVE_SUCCESS,PRODUCT_SAVE_FAIL} from './action-types/actionConstants';
import {productListRequest,productSaveRequest} from '../helperFunctions/productHelpers';


const productsFetch = (searchQuery)=>{
    return async(dispatch) => {
            try{

                dispatch({type: PRODUCT_FETCHING});
                let data = await productListRequest(searchQuery);
                dispatch({type:PRODUCT_FETCH_SUCCESS,payload:data});
            }
            catch(e){
                dispatch({type:PRODUCT_FETCH_FAILURE,payload:e.message});
            }
    }
}

const productSave =(formData)=>{
    return async(dispatch) =>{
        try{
            dispatch({type:PRODUCT_SAVE_REQUEST});
            let data = await productSaveRequest(formData);
            dispatch({type:PRODUCT_SAVE_SUCCESS,payload:data});

        }catch(e){
            dispatch({type:PRODUCT_SAVE_FAIL,payload:e.message})
        }

    }

}


export {productsFetch,productSave};