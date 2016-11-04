export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    payload: product
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
