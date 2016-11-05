export const SEARCHBAR_REQUEST = "SEARCHBAR_REQUEST";

// action creators:
export const receiveSearchRequest = (products) => {
    return {
        type: SEARCHBAR_REQUEST,
        payload: products
    }
}

export const fetchSearchRequest = (searchTerm) => {
    const thunk = function (dispatch) {
        fetch(`api/products?searchAllProducts=${searchTerm}`) // epilogue request
                // searchAllProducts being the param (see products.js file in models)
            .then(res => res.json())
            .then(searchedItems => dispatch(receiveSearchRequest(searchedItems))) 
            .catch(err => console.log(err));
    }
    return thunk;
}