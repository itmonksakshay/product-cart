import React,{} from 'react';
import { Link } from 'react-router-dom';

const ProductCard =({item})=>{

    return(<div className="card">
            <div className="card-image" >
                <img src = {`http://localhost:5005/uploads/${item.images[0]}`} width="100%" alt={item.title}/>
                <p className="card-title" >{item.title}</p>
                <button>Add To Cart </button>
                <Link type="button" to={'/product/' + item._id}>View</Link>
            </div>

            <div className="card-content" >
                <p>{item.brand}</p>
                <p>{item.desc}</p>
                <p><b>Price: {item.price}$</b></p>
            </div>
 </div>);

}
export default ProductCard;

