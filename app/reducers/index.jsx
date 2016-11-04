import React from 'react';
import { combineReducers } from 'redux';

import { RECEIVE_USER_CART } from '../actions/cart-actions';
import { LOAD_PRODUCTS } from '../actions/home-actions';


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
    default: return state;
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productListReducer
})


export default rootReducer;
