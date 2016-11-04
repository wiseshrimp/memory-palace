'use strict'
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
  // change to browserHistory to remove the necessary '#'?

import store from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Root from './components/Root';
import Cart from './containers/Cart';
import Home from './components/Home';
import Login from './components/Login';

import { loadCart } from './actions/cart-actions';

function onEnterUserCart(nextState) {
  store.dispatch(loadCart(nextState.params.userId))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path='/cart/:userId' component={Cart} onEnter={onEnterUserCart} />
        <Route path='/login' component={Login} />
      </Route>
    </Router>  
  </Provider>,
  document.getElementById('main')
)