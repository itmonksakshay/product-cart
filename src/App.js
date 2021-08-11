import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
//import Cart from './components/cart';
import UserAccount from './user';
import Test from './test';


let contextValue ={vans:"context color"};

export const AppContext = React.createContext(contextValue);


class App extends Component {
  render() {
    return (
        <BrowserRouter>
           <AppContext.Provider value={{vane:"hello"}}>
              <div className="App"> 
                <Navbar/>
                <Switch>  
                    <Route exact path="/" component={Home}/>
                    <UserAccount path="/account/"/>
                  
                </Switch>
              </div>
              </AppContext.Provider>
       </BrowserRouter>
       
      
      
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.productList
})

export default connect(mapStateToProps)(App);
