import {productListReducer,productSaveReducer} from './productReducer';
import {cartReducer} from './cartReducer';
import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    productList:productListReducer,
    productCart:cartReducer,
    productSave:productSaveReducer,
});
export default rootReducer;