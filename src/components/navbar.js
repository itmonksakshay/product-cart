import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../App';
 const Navbar = ()=>{

    return(
            <nav>
                <div>
                    <Link to="/">Shopping</Link>
                    <Link to="/account">Account</Link>
                    <ul>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;
