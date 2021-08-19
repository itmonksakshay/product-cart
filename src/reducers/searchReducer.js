import{SEARCH_QUERY_TYPING,SEARCH_QUERY_DONE} from '../actions/action-types/actionConstants';
const searchTermReducer=(state ={isTyping:false,searchQuery:''},action)=>{
    switch(action.type) {
        case SEARCH_QUERY_TYPING : return({isTyping:true,searchQuery:''});
        case SEARCH_QUERY_DONE: return({isTyping:false,searchQuery:action.payload});
        default:return(state);
    }
}
export {searchTermReducer};