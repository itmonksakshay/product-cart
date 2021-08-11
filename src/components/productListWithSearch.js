import React ,{PureComponent} from  'react';
import {connect} from 'react-redux';
import {productsFetch} from '../actions/productActions';
const withSearch=(ChildComponent)=>{

  class WithSearch extends PureComponent {
    constructor(props){
      super(props);
      this.state= {
        searchTerm: '',
        typing: false,
        typingTimeout: 0
      }
      
    }
    
    searchTerm=()=>{
        this.setState({typing:false});
            
    }
    componentDidMount(){

    }
  
    handleSearch = event => {

      if(this.state.typingTimeout){
        clearTimeout(this.state.typingTimeout);
      }
      this.setState({searchTerm:event.target.value,typing:true,typingTimeout:setTimeout(()=>
         { this.searchTerm()},1000)});
    }
    render(){

          let {searchTerm,typing} = this.state;
        
          return(<>
              <input onChange={this.handleSearch} value={searchTerm} type="text" placeholder="Search" />
              {(typing)?<div><h2>Searching</h2></div>:
              <ChildComponent searchTerm={searchTerm.toLowerCase()}/>}
            </>);    
    }
  }
  return WithSearch
}

export default withSearch;