import {productListReducer,productSaveReducer,productDetailReducer} from './productReducer';
import {cartReducer} from './cartReducer';
import { searchTermReducer } from './searchReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'productCart',
    storage: storage,
   // whitelist: ['cartReducer']  which reducer want to store
  };


const rootReducer=combineReducers({
    productList:productListReducer,
    productCart:persistReducer(persistConfig,cartReducer),
    productSave:productSaveReducer,
    productDetail:productDetailReducer,
    searchTerm:searchTermReducer
});

export default rootReducer;