var Promise = require('bluebird');

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
      Promise.all([
        fetch('api/products')
          .then(res => res.json())
          .catch(err => console.log(err))
        ,
        fetch('api/mostPopular')
          .then(res => res.json())
          .catch(err => console.log(err))
      ])
      .then((results) => {
        let tmp = {};
        results[1].forEach(e => tmp[e.product_id] = Number(e.Product_Count))
        results[0].forEach(e => e["count"]=tmp[e.id]||0)
        dispatch(loadProductList(results[0]));
       })
    }
    return thunk;
}
