import React ,{useState,useEffect} from  'react';
import {connect} from 'react-redux';
import {productsFetch} from '../actions/productActions';
const withSearch=(ChildComponent)=>{

  const WithSearch =()=>{

    const [searchTerm,setSearchTerm]= useState("");
    const [typing,setTyping]= useState(false);
    const [typingTimeout,setTypingTimeout]= useState(0);

    useEffect(()=>{},[]);

    
    const setSearchTyping=()=>{
      setTyping(false);
      
    }

  
    const handleSearch = event => {

      if(typingTimeout){
        clearTimeout(typingTimeout);
      }
      setSearchTerm(event.target.value);
      setTyping(true);
      setTypingTimeout(setTimeout(()=>{
        return setSearchTyping();
      },1000));
    }
        
    return(<>
      <input onChange={(event)=>handleSearch(event)} value={searchTerm} type="text" placeholder="Search" />
        {(typing)?<div><h2>Searching</h2></div>:
              <ChildComponent searchTerm={searchTerm.toLowerCase()}/>}
      </>);    
    }

  return WithSearch;

}

export default withSearch;