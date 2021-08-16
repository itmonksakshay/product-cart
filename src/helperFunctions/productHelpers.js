import axios from 'axios';

const productListRequest = async(searchQuery)=>{
    try {
        let res = await axios.get(
            'http://localhost:5005/api/products',
            {headers: {'Access-Control-Allow-Origin' : '*',},
            params:{search:searchQuery}
        })
        return res.data;
    }
    catch(e){
        throw new Error("server Issues");
    }
}


const productSaveRequest = async(formData)=>{
    try {
        const { data } = await axios.post('http://localhost:5005/api/products',formData,{headers: {
            'Content-Type': 'multipart/form-data'
          }});
        return data;
    }
    catch(e){
        throw new Error("product not Saved");
    }
}

export {productListRequest,productSaveRequest};