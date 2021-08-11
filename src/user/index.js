import React ,{useContext}from 'react';
import axios from 'axios';
import {Route,Redirect} from 'react-router-dom';
import UserProducts from './pages/userProducts';
import UserDashboard from './pages/userDashboard';
import { AppContext } from '../App';

const UserAccount =(props)=>{
    return(<>
        <Route  exact path="/account/" component={UserDashboard} />
        <Route  path="/account/products" component={UserProducts} />
        </>);

}

export default UserAccount;