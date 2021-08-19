import{
    PRODUCT_FETCHING,PRODUCT_FETCH_SUCCESS,PRODUCT_FETCH_FAILURE,
    PRODUCT_SAVE_REQUEST,PRODUCT_SAVE_SUCCESS,PRODUCT_SAVE_FAIL,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL } from '../actions/action-types/actionConstants';


const productState ={isLoading:false,data:[],error:false,isFetched:false};

const productListReducer=(state = productState,action)=>{
    switch(action.type) {
        case PRODUCT_FETCHING : return({...state,isLoading:true,data:[],error:false,isFetched:false});
        case PRODUCT_FETCH_SUCCESS:return({...state,data:action.payload,isLoading:false,isFetched:true});
        case PRODUCT_FETCH_FAILURE:return({...state,error:true,isLoading:false,data:[],isFetched:true});
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

const productDetailReducer=(state={loading:false,product:null,error:false},action)=>{

  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state,loading:true,product:null,error:false};
    case PRODUCT_DETAILS_SUCCESS:
      return {...state,loading:false,product:action.payload,error:false };
    case PRODUCT_DETAILS_FAIL:
      return {...state,loading:false,product:null,error:action.payload};
    default:return state;
  }


}


export {productListReducer,productSaveReducer,productDetailReducer};
