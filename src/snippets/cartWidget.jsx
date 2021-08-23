import React from 'react';

const CartWidget =()=>{

    return(<div>
        <h4>
            <span >Your cart</span>
            <span >3</span>
        </h4>
    </div>);
}

const CartItemsWidget =()=>{

    return(<div>
        <ul>
            <li>
                <div>
                    <h6>Product name</h6>
                    <small>Brief description</small>
                </div>
                <span>$12</span>
            </li>
            <li>
                <div>
                    <h6>Second product</h6>
                    <small>Brief description</small>
                </div>
                <span>$8</span>
            </li>
            <li>
                <div>
                    <h6>Third item</h6>
                    <small>Brief description</small>
                </div>
                <span>$5</span>
            </li>
            <li>
                <div>
                    <h6>Promo code</h6>
                    <small>EXAMPLECODE</small>
                </div>
                <span>-$5</span>
            </li>
            <li>
                <span>Total (USD)</span>
                <strong>$20</strong>
            </li>
        </ul>
    </div>);
}


export default CartWidget;
export {CartItemsWidget};