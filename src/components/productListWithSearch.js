import React ,{useState,useEffect} from  'react';
import {useSelector,useDispatch} from 'react-redux';
import { searchAction } from '../actions/searchActions';

const withSearch=(ChildComponent)=>{

  return ()=>{

    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.searchTerm);
    const [searchValue,setSearchValue] = useState(searchTerm.searchQuery);
    const [typingTimeout,setTypingTimeout]= useState(0);

    useEffect(()=>{

    },[]);

    
    const handleSearch = event => {
      
      if(typingTimeout){
        clearTimeout(typingTimeout);
      }
      setSearchValue(event.target.value);
      setTypingTimeout(setTimeout(()=>{
        
        return dispatch(searchAction(event.target.value));
      },1000));
    }   
    const {isTyping,searchQuery}= searchTerm;

    return(<>
      <input onChange={(event)=>handleSearch(event)} value={searchValue} type="text" placeholder="Search" autoFocus />
        {(isTyping)?<div><h2>Searching</h2></div>:<div>
              <ChildComponent searchTerm={searchQuery.toLowerCase()}/>
              </div>
        }
      </>);    
    }


}

export default withSearch;