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
import OrderHistory from './containers/OrderHistory';

import { loadCart } from './actions/cart-actions';
import { loadOrderHistory } from './actions/orderhistory-actions';

function onEnterUserCart(nextState) {
  store.dispatch(loadCart(nextState.params.userId))
}

function onEnterOrderHistory(nextState) {
  store.dispatch(loadOrderHistory(nextState.params.userId))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path='/cart/:userId' component={Cart} onEnter={onEnterUserCart} />
        <Route path='/orderhistory/:userId' component={OrderHistory} onEnter={onEnterOrderHistory} />
      </Route>
    </Router>  
  </Provider>,
  document.getElementById('main')
)