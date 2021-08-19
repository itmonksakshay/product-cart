import {productListReducer,productSaveReducer,productDetailReducer} from './productReducer';
import {cartReducer} from './cartReducer';
import { searchTermReducer } from './searchReducer';
import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    productList:productListReducer,
    productCart:cartReducer,
    productSave:productSaveReducer,
    productDetail:productDetailReducer,
    searchTerm:searchTermReducer
});
export default rootReducer;