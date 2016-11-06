import React from 'react';
import { Link } from 'react-router';
import ProductThumbnail from './ProductThumbnail'


export default class SearchedItemList extends React.Component {
    render() {
        const {products, routeParams} = this.props;
        if (products.length !== 0) {
            return (
                <div className="row">
                  <h4>{products.length} results for {routeParams.term}</h4>
                    {products && products.map(product => (
                      <ProductThumbnail key={product.id} product={product} />
                      ))
                    }
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Nothing Found for {routeParams.term}</h1>
                </div>
            )
        }
    }
}
