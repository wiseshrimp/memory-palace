import React from 'react';
import { combineReducers } from 'redux';

import { RECEIVE_USER_CART } from '../actions/cart-actions';
import { SEARCHBAR_REQUEST } from '../actions/searchbar-actions';

const cartReducer = function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER_CART:
      return action.payload;
    default: return state;
  }
}

const searchbarReducer = function (state = [], action) {
  switch (action.type) {
    case SEARCHBAR_REQUEST:
      return action.payload;
    default: return state;
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: searchbarReducer
})

export default rootReducer;