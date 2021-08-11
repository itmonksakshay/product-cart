import React,{ useEffect }  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeItem,addQuantity,subtractQuantity} from '../actions/productActions'
const Cart=()=>{
        const items = useSelector((state) => state.addedItems); 
		let total = useSelector((state) => state.total); 
    	const dispatch = useDispatch();  

   useEffect(() => {

	console.log(items);

    }, [dispatch,items])

	let addedItems = items.length ?( items.map(item=>{
                    return(
                        <li className="collection-item avatar"key={item.id}>
                        	<div> 
                            	<img src={item.img} alt={item.img}/>
                            </div>    
                            <div className="item-desc">
								<span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p> 
                                <p><b>Quantity: {item.quantity}</b></p>      
								<div><button onClick={() => dispatch(subtractQuantity(item.id))}>-</button>
									<span>Quantity</span>
									<button  onClick={() => dispatch(addQuantity(item.id))}>+</button>
								</div>
                            	<button  onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                            </div>    
                        </li>)
                })
            ):(<p>Nothing.</p>)
       return(<div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
		   		<div>
					<h2>total :{total} </h2>
				</div>
            </div>);
}

export default Cart;
