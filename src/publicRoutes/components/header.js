import React from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
const Header =()=>{

    return(<div className="bg-gray-800 flex flex-row justify-between px-4 py-2 items-center">
        <div>
           <Link to="#">  <img src="https://logo.clearbit.com/haulnepal.com" height="50px" width="100px"/></Link>
        </div>
        <div className="w-auto">
            <Navbar/>
        </div>
        <div>
            <nav className="flex px-2  text-lg text-white font-bold">
                <div className="px-2"><Link to="#">Sign In</Link></div>
                <div className="px-2"><Link to="#">Sign Up</Link></div>
            </nav>
        </div>
    </div>)
}
export default Header;