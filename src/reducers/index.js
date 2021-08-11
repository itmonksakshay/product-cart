import {productReducer} from './productReducer';
import {cartReducer} from './cartReducer';
import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    productList:productReducer,
    productCart:cartReducer,
});
export default rootReducer;