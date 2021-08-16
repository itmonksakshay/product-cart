import React,{useState,useMemo,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

const ProductList=({items})=>{

    let products = useMemo(()=> items.map((item)=>{
        return(<tr>
                <td>1</td>
                <td>image</td>
                <td>lorem ipsume</td>
                <td>2</td>
                <td>edit</td>
                <td>delete</td>
            </tr>);
            }),[items]);

    return(<div>
        <table style={{width:"100%"}}>
            <thead>
                <th>S.No</th>
                <th>Product Image</th>
                <th>Product Title</th>
                <th>Qty</th>
                <th colSpan={2}>Action</th>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
    </div>);
}


const UserProducts =()=>{

    useEffect(()=>{


    },[]);

    return(<div>
        <h2>All Products</h2>
        <div><Link to="/account/product-add">Add Product</Link></div>
    
    </div>);
}

export default UserProducts;