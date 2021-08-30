import React,{useRef} from 'react';
import { Link } from 'react-router-dom';

 const Navbar = ()=>{
    const dropDownRef = useRef(null)
    const openSubmenu=(e)=>{
        console.log(e);
        e.preventDefault();
        
        if(dropDownRef.current.style.display ==='none'){
            dropDownRef.current.style.display = 'inline-block';
        }else{
            dropDownRef.current.style.display = 'none';
        }
       
    }

    return(<nav className="flex px-2 text-2xl text-white font-bold">
                <div className="px-2"><Link to="#">Home</Link></div>
                <div className="px-2" onClick={(e)=>openSubmenu(e)} className="relative">Shop</div>
                <div className="px-2"><Link to="#">About Us</Link></div>
                <div className="px-2"><Link to="#">Contact Us</Link></div>
                <div ref={dropDownRef} className="z-10 absolute mt-12 bg-gray-400" style={{display:"none"}}>
                    <ul>
                        <li>Search By Brand</li>
                        <li>Select By Category</li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;
