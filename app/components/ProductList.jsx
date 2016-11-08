import React from 'react';
import { Link } from 'react-router';
import ProductThumbnail from './ProductThumbnail'

export default class ProductList extends React.Component {
    render() {
      const {products} = this.props;

      return (
          <div className="row">
            {products && products.map(product => (
              <ProductThumbnail key={product.id} product={product} />
              ))
            }
          </div>
      )
    }
}
