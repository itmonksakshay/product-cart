import axios from 'axios';

const productList = async()=>{
    try {
        let res = await axios.get(
            'http://localhost:5001/api/products',
            {headers: {'Access-Control-Allow-Origin' : '*',}
        });
        return res.data;
    }
    catch(e){
        return e;
    }

}







export {productList};