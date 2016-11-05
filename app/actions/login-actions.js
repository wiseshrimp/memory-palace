'use strict'

import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loadLoggingInUser = (loginUser) => {
    return ({
        type: LOGIN_USER,
        payload: loginUser
    })
}

export const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_USER,
        payload: null
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
        axios.put('api/login')
            .then(res => {
                console.log('Ending current session.')
                dispatch(logoutCurrentUser())
            })
    }
    return thunk;
}