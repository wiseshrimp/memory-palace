import React from 'react';
import { combineReducers } from 'redux';

import { RECEIVE_USER_CART } from '../actions/cart-actions';
import { RECEIVE_PRODUCT } from '../actions/product-actions';

const initialState = {};

const cartReducer = function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER_CART:
      return action.payload;
    default: return state;
  }
}

const productReducer = function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return action.payload;
    default: return state;
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer
})

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default rootReducer;
