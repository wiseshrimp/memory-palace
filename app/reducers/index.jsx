import React from 'react';
import { combineReducers } from 'redux';

import { RECEIVE_USER_CART } from '../actions/cart-actions';
import { SEARCHBAR_REQUEST } from '../actions/searchbar-actions';
import { LOAD_PRODUCTS } from '../actions/home-actions';
import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from '../actions/login-actions';
import { RECEIVE_PRODUCT } from '../actions/product-actions';
import { RECEIVE_USER_ORDER_HISTORY } from '../actions/orderhistory-actions';
import { REGISTER_USER } from '../actions/register-actions';
import { LOAD_GENRE } from '../actions/genre-actions';


// const initialState = {
//   cart: {},
//   products: [],
//   product: {},
//   orderHistory: []
// };

const cartReducer = function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER_CART:
      return action.payload;
    default: return state;
  }
}

const productListReducer = function (state = [], action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload;
    case SEARCHBAR_REQUEST:
      return action.payload;
    case LOAD_GENRE:
      return action.payload;
    default: return state;
  }
}

const loginReducer = function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    case LOGOUT_USER:
      return action.payload;
    case REGISTER_USER:
      return action.payload;
    case UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
}

const productReducer = function (state = {}, action) {
    switch (action.type) {
      case RECEIVE_PRODUCT:
        return action.payload;
      default: return state;
    }
}


const orderHistoryReducer = function (state = [], action) {
  switch (action.type) {
    case RECEIVE_USER_ORDER_HISTORY:
      return action.payload;
    default: return state;
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productListReducer,
  loginUser: loginReducer,
  product: productReducer,
  orderHistory: orderHistoryReducer
});

export default rootReducer;
