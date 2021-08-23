import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

const presister = persistStore(store);

ReactDOM.render(<Provider store={store}>
    <PersistGate loading={null} persistor={presister}> 
        <App />
    </PersistGate>
</Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//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

