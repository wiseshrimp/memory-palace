export const RECEIVE_USER_ORDER_HISTORY = 'RECEIVE_USER_ORDER_HISTORY';


// action-creators
export const receiveOrderHistory = (history) => {
    return {
        type: RECEIVE_USER_ORDER_HISTORY,
        payload: history
    }
}


// async action creators
export const loadOrderHistory = (userId) => {
    const thunk = function (dispatch) {
        fetch(`api/orderhistory/${userId}`)
            .then(res => res.json())
            .then(history => dispatch(receiveOrderHistory(history)))
            .catch(err => console.log(err))
    }
    return thunk;
}
