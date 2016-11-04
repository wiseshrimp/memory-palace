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
import ProductContainer from './containers/Product';
import Home from './components/Home';

import { loadCart } from './actions/cart-actions';
import { loadProduct } from './actions/product-actions';

function onEnterUserCart(nextState) {
  store.dispatch(loadCart(nextState.params.userId))
}

function onEnterLoadProduct(nextState) {
  store.dispatch(loadProduct(nextState.params.productId))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path='/cart/:userId' component={Cart} onEnter={onEnterUserCart} />
        <Route path='/products/:productId' component={ProductContainer} onEnter={onEnterLoadProduct} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
