'use strict'

import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const loadLoggingInUser = (loginUser) => {
    return ({
        type: LOGIN_USER,
        payload: loginUser
    })
}

export const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_USER,
        payload: {}
    })
}

export const updateUser = (loginUser) => {
    return ({
        type: UPDATE_USER,
        payload: loginUser
    })
}

export const fetchLoginUser = (userCred) => {
    const thunk = (dispatch) => {
        axios.post('api/login', userCred)
            .then(res => {
                dispatch(loadLoggingInUser(res.data))
            })
    }
    return thunk;
}

export const logoutUser = () => {
    const thunk = (dispatch) => {
        axios.get('api/login')
            .then(res => {
                dispatch(logoutCurrentUser());
                console.log('Ending current session.')
            })
            .catch(err => console.error('Error logging out current user: ', err))
    }
    return thunk;
}

// updates store.loginUser with current user on session
export const retrieveLoggedInUser = () => dispatch => {
    axios.get('/api/login/me')
        .then(res => dispatch(loadLoggingInUser(res.data)))
        .catch(err => console.error('retrieveLoggedInUser unsuccessful: ', err));
}

export const updateUserInfo = (userCred, id) => dispatch => {
  axios.put(`/api/updateUser/${id}`, userCred)
    .then(res => dispatch(updateUser(res.data)))
    .catch(err => console.error(`Updating user: ${userCred} unsuccesful`, err))
}
