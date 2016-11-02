import React from 'react';
import ProductList from './ProductList';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>MOST POPULAR</h1>
                <ProductList />
            </div>
        )
    }
}