import{SEARCH_QUERY_TYPING,SEARCH_QUERY_DONE} from './action-types/actionConstants';


const searchAction =(searchQuery)=>{
    return (dispatch)=>{
        dispatch({type:SEARCH_QUERY_TYPING});
        dispatch({type:SEARCH_QUERY_DONE,payload:searchQuery});
    }
}
export {searchAction};