'use strict'

import React from 'react';
import ProductList from '../containers/ProductList';

export default class Genre extends React.Component {
    render() {
        const {products, params} = this.props;
        return (
            <div>
                <h4>{products.length} results found for '{params.genre}'</h4>
                <ProductList />
            </div>
        )
    }
}