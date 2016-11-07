'use strict'

import axios from 'axios';

export const LOAD_GENRE = 'LOAD_GENRE';

export const loadGenreProducts = (products) => ({
    type: LOAD_GENRE,
    payload: products
});

export const getGenreProducts = (genreType) => {
    const thunk = (dispatch) => {
        axios.get(`api/genre/${genreType}`)
            .then(products => dispatch(loadGenreProducts(products.data)))
            .catch(err => console.error('Error loading genre products: ', err))
    }
    return thunk;
}