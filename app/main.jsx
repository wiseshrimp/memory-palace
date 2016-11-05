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
import SearchedItemList from './containers/SearchedItemList';

import { loadCart } from './actions/cart-actions';
import { fetchSearchRequest } from './actions/searchbar-actions';
import { loadProducts } from './actions/home-actions';


function onEnterUserCart(nextState) {
  store.dispatch(loadCart(nextState.params.userId))
}

function onEnterHome() {
  store.dispatch(loadProducts())
}

function onEnterSearchBar(nextState) {
  store.dispatch(fetchSearchRequest(nextState.params.term));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} onEnter={onEnterHome} />
        <Route path='/cart/:userId' component={Cart} onEnter={onEnterUserCart} />
        <Route path='/login' component={Login} />
        <Route path='/search/:term' component={SearchedItemList} onEnter={onEnterSearchBar} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
