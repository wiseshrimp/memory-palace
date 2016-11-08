import {loadCart} from './cart-actions';
import axios from 'axios';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    payload: product
  }
}

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    payload: review
  }
}

// async action creators
export const loadProduct = (productId) => {
  const thunk = function (dispatch) {
    fetch(`api/products/${productId}`)
      .then(res => res.json())
      .then(product => dispatch(receiveProduct(product)))
      .catch(err => console.log(err))
  }
  return thunk;
}

export const addToCartAsync = (details) => {
  const thunk = function (dispatch) {
    axios.post(`api/cart/addProduct`, details)
      .then( () => dispatch( loadCart(1) ) )
      .catch(err => console.log(err))
  }
  return thunk;
}
