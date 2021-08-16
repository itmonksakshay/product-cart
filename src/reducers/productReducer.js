import{
    PRODUCT_FETCHING,PRODUCT_FETCH_SUCCESS,PRODUCT_FETCH_FAILURE,
    PRODUCT_SAVE_REQUEST,PRODUCT_SAVE_SUCCESS,PRODUCT_SAVE_FAIL } from '../actions/action-types/actionConstants';


const productState ={isLoading:false,data:[],error:false};

const productListReducer=(state = productState,action)=>{
    switch(action.type) {
        case PRODUCT_FETCHING : return({...state,isLoading:true,});
        case PRODUCT_FETCH_SUCCESS:return({...state,data:action.payload,isLoading:false});
        case PRODUCT_FETCH_FAILURE:return({...state,error:true,isLoading:false,data:[]});
        default:return(state);
    }
}
const productSaveReducer=(state={loading:false,product:{},success:false,error:null},action)=>{

    switch (action.type) {
        case PRODUCT_SAVE_REQUEST:
          return { ...state,success:false, error:null,loading:true,product:{}};
        case PRODUCT_SAVE_SUCCESS:
          return {...state,success: true, product: action.payload,loading:false,error:null };
        case PRODUCT_SAVE_FAIL:
          return {...state,success:false, error: action.payload,loading:false,product:{}};
        default:return state;
    }
}


export {productListReducer,productSaveReducer};
