import React ,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { productDetail } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import {useHistory} from 'react-router-dom';

const SingleProduct=(props)=>{
    let prdId = props.match.params.id;
    const [qty,addQty] = useState(1);
    const prdDetail = useSelector(state=> state.productDetail);
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(()=>{
        dispatch(productDetail(prdId));
    },[])

    let {product,loading,error} = prdDetail;


    const addToCartHandler=()=>{
      dispatch(addToCart(prdId,qty));  
    }
    if(error){
        return(<div><h2>Product Not Found</h2></div>)
    }
    if(product){

        return(<div style={{display:"inline-block"}}>
            <div style={{display:"inline-block"}}>
                <div>
                    {product.images.map((image) =>(<img key={image} src={"http://localhost:5005/uploads/"+image}/>))}
                </div>
                <div>
                    <a href="#"><img alt="#" src="#"/></a>
                    <a href="#"><img alt="#" src="#"/></a>
                    <a href="#"><img alt="#" src="#"/></a>
                </div>
            </div>
        
            <div style={{display:"inline-block"}}>
              <h2>{product.name}</h2>
              <div>
                <div>
                  <strong><span>INR</span>{product.price}</strong>
                  <em>INR<span>{product.price}</span></em>
                </div>
                <div>
                  Availability: <strong>In Stock</strong>
                </div>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
              <div>
                <div>
                  <label>Size:</label>
                  <select>
                    <option>S</option>  
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
                <div>
                  <label>Color:</label>
                  <select>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Black</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                    <div>
                        <span><button type="button"><i></i></button></span>
                        <input type="text"/>
                        <span><button type="button"><i></i></button></span>
                    </div>
                </div>
                <button type="submit" onClick={(e)=>addToCartHandler()}>Add to cart</button>
              </div>
            </div>
        </div>);
    }

    return(<div><h2>loading</h2></div>)



}

export default SingleProduct;