import React from 'react';
import { combineReducers } from 'redux';

import { RECEIVE_USER_CART } from '../actions/cart-actions';
import { SEARCHBAR_REQUEST } from '../actions/searchbar-actions';
import { LOAD_PRODUCTS } from '../actions/home-actions';
import { LOGIN_USER, LOGOUT_USER } from '../actions/login-actions';


const initialState = {
  cart: {},
  products: []
};

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
    default: return state;
  }
}

const loginReducer = function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    case LOGOUT_USER:
      return action.payload;
    default: return state;
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productListReducer,
  loginUser: loginReducer
})

export default rootReducer;
