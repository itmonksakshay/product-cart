import React,{useContext} from 'react';
import AppContext from '../../App';
import {Link} from 'react-router-dom';
const UserDashboard =()=>{

 console.log(useContext(AppContext));

    return(<div><h2>User Dashboard</h2>
    <aside>
        <ul>
            <Link to="/account/products">Products</Link>
        </ul>
    </aside></div>);
}

export default UserDashboard;