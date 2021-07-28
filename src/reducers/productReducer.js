import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cartActions';
const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsuectetuadipisicing elit. Minima, ex.", price:110,img:"https://picsum.photos/seed/picsum/200/300"},
		{id:2,title:'Adidas', desc: "Lorem ipsum dolodipisicing elit. Minima, ex.", price:80,img:"https://picsum.photos/id/237/200/300"},
        {id:3,title:'Vans', desc: "Lorem ipsadipisicing elit. Minima, ex.",price:120,img:"https://picsum.photos/200/300?grayscale"},
        {id:4,title:'White', desc: "Lorem i adipisicing elit. Minima, ex.", price:260,img:"https://picsum.photos/200/300/?blur"},
    ],
    addedItems:[],
    total: 0

}
const productReducer= (state = initState,action)=>{
    
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item){
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity ) 
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1
		let updateItems = state.addedItems.map(item =>{
			if(item.id === action.id){
				return addedItem;
			}
			else{
				return item;
			}
		});
          let newTotal = state.total + addedItem.price
          return{
              ...state,
			  addedItem:updateItems,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
			let updateItems = state.addedItems.map(item =>{
				if(item.id === action.id){
					return addedItem;
				}else{
					return item;
				}
			});

            let newTotal = state.total - addedItem.price
            return{
                ...state,
				addedItems:updateItems,
                total: newTotal
            }
        }
        
	}else{
    	return state
	}

}
export default productReducer;
