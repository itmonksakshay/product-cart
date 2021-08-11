import{
    PRODUCT_FETCHING,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_FAILURE } from '../actions/action-types/actionConstants';


const productState ={isLoading:false,data:[],error:false};

const productReducer=(state = productState,action)=>{

    switch(action.type) {
        case PRODUCT_FETCHING : return({...state,isLoading:true});
        case PRODUCT_FETCH_SUCCESS:return({...state,data:action.payload,isLoading:false});
        case PRODUCT_FETCH_FAILURE:return({...state,error:true,isLoading:false});
        default:return(state);
    }
}


export {productReducer};
