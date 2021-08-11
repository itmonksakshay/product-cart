import React,{useContext} from 'react';
import AppContext from '../../App';
const UserDashboard =()=>{

 console.log(useContext(AppContext));

    return(<div><h2>User Dashboard</h2></div>);
}

export default UserDashboard;