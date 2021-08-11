import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {productsFetch} from './actions/productActions';

class Test extends PureComponent {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getProductList();

    }

    render(){
        console.log(this.props.products);
        return(<><h2>Hello test</h2></>);
    }

}

const mapStateToProps=(state)=>{
    
    return {products:state.productList};
}
const mapDispatchToProps=(dispatch)=>{
    return{getProductList:()=>dispatch(productsFetch())}
}
export default connect(mapStateToProps,mapDispatchToProps)(Test);