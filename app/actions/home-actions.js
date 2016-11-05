export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

// action-creators
export const loadProductList = (products) => {
    return {
        type: LOAD_PRODUCTS,
        payload: products
    }
}

// async action creators
export const loadProducts = () => {
    const thunk = function (dispatch) {
      fetch('api/products')
          .then(res => res.json())
          .then(products => dispatch(loadProductList(products)))
          .catch(err => console.log(err));
    }
    return thunk;
}