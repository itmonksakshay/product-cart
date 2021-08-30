import React , {useState} from 'react';
import {Link} from 'react-router-dom';

const Login =()=>{
    const [userId,setUserId] = useState('');
    const [userPassword,setUserPasword] = useState('');
    const handleFormSubmit =(e)=>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        console.log(formdata.get(userId));
    }

    
    return(<div className="flex h-screen items-center justify-center bg-gray-900 relative">
    <div className="absolute top-per-30">
            <p className="text-8xl font-bold text-center text-red-900"> User Login</p>
            <form className="bg-white mt-4 p-5 rounded" id="userLoginForm" onSubmit={(e)=>handleFormSubmit(e)}>
                <div className="mb-4">
                    <label className="text-gray-700 pr-2">UserName:</label>
                    <input name="userId" required className="border-2 border-gray-200 rounded" type="input" placeholder="UserName" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
                </div><div className="mb-4">
                <label className="text-gray-700 pr-4">Password:</label>
                    <input name="passWord" required className="border-2 border-gray-200 rounded" type="password" placeholder="Password" value={userPassword} onChange={(e)=> setUserPasword(e.target.value)}/>
                </div><div className="text-center">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded">  Sign In  </button>
                </div>
                <div className="text-center mt-4">
                    <label className="text-lg font-bold text-red-900"><Link to="/signup">Sign Up Instead</Link></label>
                </div>
            </form>
    </div>
    </div>);

}
export default Login;