import { ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE,REMOVE_ITEM,QUANTITY_CHANGE}from '../actions/action-types/actionConstants';

const initState = {isLoading:false,cartItems:[],error:null};


const cartReducer= (state = initState,action)=>{

    if(action.type=== QUANTITY_CHANGE){
        let addedItem = state.cartItems.find(item=> item._id === action.payload.id)
        if(action.payload.qty > 0){
            addedItem.cartQuantity = action.payload.qty;
		    let updateItems = state.cartItems.map(item =>{
			    if(item._id === action.payload.id){
				    return addedItem;
		    	}
			    else{
				    return item;
			    }
		    });
            return {isLoading:false,cartItems:updateItems,error:null};
        }else{
            return state;
        }
    }
    if(action.type === REMOVE_ITEM){
        let new_items = state.cartItems.filter(item=> action.id !== item._id)      
        return {isLoading:false,cartItems:new_items,error:null};
    }

    switch(action.type){
        case ADD_TO_CART_REQUEST : return {isLoading:true,cartItems:[...state.cartItems],error:null};
        case ADD_TO_CART_SUCCESS : return {isLoading:false,cartItems:[...state.cartItems,action.payload],error:null};
        case ADD_TO_CART_FAILURE : return {isLoading:false,cartItems:[...state.cartItems],error:action.payload};
        default : return state;
    }

}

export {cartReducer};