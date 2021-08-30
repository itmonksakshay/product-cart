import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Home from './components/home';
import Cart from './components/cart';
import SingleProduct from './components/singleProduct';
import CheckoutPage from './components/checkoutPage';
import Header from './components/header';
const PublicRoutes =()=>{

    return(<div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/product/:id" component={SingleProduct}/>
            <Route path="/checkout" component={CheckoutPage}/>
        </Switch>
    </div>);

}

export default PublicRoutes;