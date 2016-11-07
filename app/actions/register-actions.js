export const REGISTER_USER = 'REGISTER_USER';
import axios from 'axios';

export const newUser = (user) => ({
    type: REGISTER_USER,
    payload: user
})

export const createUser = (userCred) => {
    const thunk = (dispatch) => {
        axios.post('api/register', userCred)
            .then(res => dispatch(newUser(res.data)))
            .catch(err => console.error('Error creating user: ', err))
    }
    return thunk;
}