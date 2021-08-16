import React ,{useContext}from 'react';
import axios from 'axios';
import {Route,Redirect} from 'react-router-dom';
import UserProducts from './pages/userProducts';
import UserDashboard from './pages/userDashboard';
import ProductAdd from './pages/productAdd';
import { AppContext } from '../App';

const UserAccount =(props)=>{
    return(<>
        <Route  exact path="/account/" component={UserDashboard} />
        <Route  path="/account/products" component={UserProducts} />
        <Route path="/account/product-add" component={ProductAdd}/>
        </>);

}

export default UserAccount;