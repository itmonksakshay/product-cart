import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import NotFound from './publicRoutes/components/notFound';
import UserAccount from './user';
import Login from './authPages/userSignIn';
import UserSignUp from './authPages/userSignUp';
import PublicRoutes from './publicRoutes';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (<BrowserRouter>
              <div className="container max-w-full">
                <Switch>
                  <PublicRoutes exact path='/'/>
                  <Route path="/login" component={Login}/>
                  <Route path="/signup" component={UserSignUp}/>
                  <UserAccount path="/account/"/>
                  <Route component={NotFound} /> 
                </Switch>          
              </div>
       </BrowserRouter>);
  }
}

const mapStateToProps = (state, ownProps) => {

  return {products: state.productList}

}

export default connect(mapStateToProps)(App);
