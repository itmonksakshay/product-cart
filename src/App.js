import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import SingleProduct from './components/singleProduct';
import NotFound from './components/notFound';
import Cart from './components/cart';
import CheckoutPage from './components/checkoutPage';
import UserAccount from './user';
import Test from './test';


let contextValue ={vans:"context color"};

export const AppContext = React.createContext(contextValue);


class App extends Component {
  render() {
    return (<BrowserRouter>
           <AppContext.Provider value={{vane:"hello"}}>
              <div className="App"> 
                <Navbar/>
                <Switch>  
                    <Route exact path="/" component={Home}/>
                    <Route path="/test" component={Test}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/product/:id" component={SingleProduct}/>
                    <Route path="/checkout" component={CheckoutPage}/>
                    <UserAccount path="/account/"/>
                    <Route component={NotFound} />
                  
                </Switch>
              </div>
              </AppContext.Provider>
       </BrowserRouter>);
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {products: state.productList}

}

export default connect(mapStateToProps)(App);
