import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Cart from './components/cart';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App"> 
              <Navbar/>
				    <Switch>
                    <Route exact path="/" component={Home}/>
					<Route path="/cart" component={Cart}/>
				  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}
export default App;
