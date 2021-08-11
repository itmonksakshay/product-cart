import React,{useMemo,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
//import { addToCart } from '../actions/cartActions';

const ProductCard =({item})=>{

    const dispatch = useDispatch();

    return(<div className="card">
            <div className="card-image" >
                <img src={item.img} alt={item.title}/>
                <p className="card-title" >{item.title}</p>
                <button onClick={() => console.log("hello")}>Add To Cart </button>
            </div>

            <div className="card-content" >
                <p>{item.desc}</p>
                <p><b>Price: {item.price}$</b></p>
            </div>
 </div>);

}
export default ProductCard;