import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../actions/productActions';

const Home =()=>{
    	let items =useSelector((state) => state.items);
		let cartItems = useSelector((state) => state.addedItems); 
		const dispatch = useDispatch();
        let itemList = items.map(item=>{
            return(
                <div className="card" key={item.id}>
                	<div className="card-image" >
                    	<img src={item.img} alt={item.title}/>
                        <p className="card-title" >{item.title}</p>
						<button onClick={() => dispatch(addToCart(item.id))}>Add To Cart </button>
						{(cartItems.find(cartItem=>cartItem.id === item.id))?(<p style={{color:"red"}}>Added to the cart</p>):(null)} 
                    </div>

                        <div className="card-content" >
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="text-center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
}
export default Home
