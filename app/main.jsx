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
import Home from './components/Home';
import Login from './containers/Login';

import Cart from './containers/Cart';
import ProductContainer from './containers/Product';
import SearchedItemList from './containers/SearchedItemList';
import OrderHistory from './containers/OrderHistory';
import Genre from './containers/Genre';
import UserPage from './containers/UserPage';
import EditUserPage from './containers/EditUserPage';

import { loadCart } from './actions/cart-actions';
import { fetchSearchRequest } from './actions/searchbar-actions';
import { loadProducts } from './actions/home-actions';
import { loadProduct } from './actions/product-actions';
import { loadOrderHistory } from './actions/orderhistory-actions';
import { retrieveLoggedInUser } from './actions/login-actions';
import { getGenreProducts } from './actions/genre-actions';

function onEnterUserCart(nextState) {
  store.dispatch(loadCart(nextState.params.userId))
}

function onEnterHome() {
  store.dispatch(loadProducts())
}

function onEnterSearchBar(nextState) {
  store.dispatch(fetchSearchRequest(nextState.params.term));
}

function onEnterLoadProduct(nextState) {
  store.dispatch(loadProduct(nextState.params.productId))
}

function onEnterOrderHistory(nextState) {
  store.dispatch(loadOrderHistory(nextState.params.userId))
}

function onEnterRetrieveLoggedInUser(nextState) {
  store.dispatch(retrieveLoggedInUser())
}

function onEnterGenre(nextState) {
  store.dispatch(getGenreProducts(nextState.params.genre))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" onEnter={onEnterRetrieveLoggedInUser} onChange={(prevState, nextState) => {
          if (nextState.location.action !== "POP") {
            window.scrollTo(0, 0);
          }
        }} component={Root}>
        <IndexRoute component={Home} onEnter={onEnterHome} />
        <Route path='/cart/:userId' component={Cart} onEnter={onEnterUserCart} />
        <Route path='/login' component={Login} />
        <Route path='/search/:term' component={SearchedItemList} onEnter={onEnterSearchBar} />
        <Route path='/products/:productId' component={ProductContainer} onEnter={onEnterLoadProduct} />
        <Route path='/orderhistory/:userId' component={OrderHistory} onEnter={onEnterOrderHistory} />
        <Route path='/genre/:genre' component={Genre} onEnter={onEnterGenre} />
        <Route path='/users/profile' component={UserPage}/>
        <Route path='/users/profile/edit' component={EditUserPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
