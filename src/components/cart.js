import React,{ useEffect }  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import QtySelector from '../snippets/qtySelector';
import {removeItem,addQuantity} from '../actions/cartActions';
import {Link} from 'react-router-dom';
const Cart=(props)=>{

    console.log("cart page");
    const productCart = useSelector((state) => state.productCart); 
    const dispatch = useDispatch(); 
    
    useEffect(() => {


    }, []);


    const qtySelectorHandler=(id,value)=>{

            dispatch(addQuantity(id,value));
    }

    const {isLoading,cartItems,error} = productCart;
    console.log(cartItems);

    let subTotal =0;
	let addedItems = cartItems.length?( cartItems.map(item=>{

                    subTotal += item.cartQuantity*item.price;
                    return(<li key={item._id} style={style.cartItemList}>
                        <div>
                          <img src={`http://localhost:5005/uploads/${item.images[0]}`} width="100px" height="100px" alt="Item image" />
                        </div>
                        <div>
                            <h4>{item.name}</h4>
                            <h5>{item.brand}</h5>
                            <p>{item.description}</p>
                            <div>{item.price} INR Per/Piece</div>
                        </div>
                        <div>
                            <QtySelector prdId={item._id} quantity={item.cartQuantity} actionFunc={qtySelectorHandler} />
                            <button onClick={()=>dispatch(removeItem(item._id))}>Remove</button>
                            <div>{item.cartQuantity*item.price} INR</div>
                        </div>
                        </li>)
                })
            ):(<p>Nothing.</p>)
       return(<div>
                <h1>Shopping cart</h1>
                <h2>Free shipping from $100!</h2>
                <section>
                    <ol>
                        {addedItems}
                    </ol>
                </section>
                <footer style={style.footerStyle}>
                    <div>
                        <div>Subtotal</div>
                        <div>{subTotal} INR</div>
                    </div>
                    <div>
                        <div>Shipping</div>
                        <div>$0.00</div>
                    </div>
                    <div>
                        <div>Taxes (6%)</div>
                        <div>$0.00</div>
                    </div>
                    <div>
                        <div>Total</div>
                        <div>$0.00</div>
                    </div>
                    <div>
                        <Link to="/checkout">Checkout</Link>
                    </div>
                </footer>
            </div>);
}

export default Cart;

const style={
    footerStyle:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
    },
    cartItemList:{
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    qtyOperator:{
        display:"flex",
        flexDirection:"row"
    }
}
