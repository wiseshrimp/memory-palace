import React from 'react';
import { Link } from 'react-router';
import CurrencyFormatter from 'currency-formatter';
import StarRating from './StarRating'

const ProductThumbnail = ({product}) => (
  <div className="col-sm-6 col-md-3">
    <div className="thumbnail clearfix">
      <Link to={`products/${product.id}`}><img src={ product.imageUrl} /></Link>
      <div className="caption">
        <h3 className="product-thumbnail-header"><Link to={`products/${product.id}`}>{product.title}</Link></h3>
        <StarRating product={product} />
        <small>{product.description}</small>
        <hr />
        <div>
          <h4 className="pull-left">{CurrencyFormatter.format(product.price, { code: 'USD' })}</h4>
          <Link to={`products/${product.id}`}><button className="btn btn-primary pull-right">View Memory</button></Link>
        </div>
      </div>
    </div>
  </div>
);


export default ProductThumbnail;
