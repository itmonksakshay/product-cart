import React from 'react';

const QtySelector = ({prdId,quantity,actionFunc})=>{

    return(<div style={style.qtyOperator}>
        <button onClick={()=>actionFunc(prdId,quantity-1)}>-</button>
        <div style={style.quantity}>{quantity}</div>
        <button onClick={()=>actionFunc(prdId,quantity+1)}>+</button>
    </div>)

}

export default QtySelector

const style = {
    qtyOperator:{
        display:"flex",
        flexDirection:"row"
    },
    quantity:{
        paddingLeft:"5px",
        paddingRight:"5px"
    }
}