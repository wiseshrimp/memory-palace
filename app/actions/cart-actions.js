import axios from 'axios';

export const RECEIVE_USER_CART = 'RECEIVE_USER_CART';

// action-creators
export const receiveUserCart = (cart) => {
    return {
        type: RECEIVE_USER_CART,
        payload: cart
    }
}


// async action creators
export const loadCart = (userId) => {
    const thunk = function (dispatch) {
        fetch(`api/cart/${userId}`)
            .then(res => res.json())
            .then(cart => dispatch(receiveUserCart(cart)))
            .catch(err => console.log(err))
    }
    return thunk;
}

export const changeQuantityAsync = (details) => {
    const thunk = function (dispatch) {
        axios.post(`api/cart/update`, details)
            .then(res => res.data)
            .then(updatedCart => dispatch( receiveUserCart(updatedCart) ) )
            .catch(err => console.log(err))
    }
    return thunk;
}
