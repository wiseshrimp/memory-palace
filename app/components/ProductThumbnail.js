import React from 'react';
import { Link } from 'react-router';

const ProductThumbnail = ({product}) => (
  <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
          <Link to={`products/${product.id}`}><img src={ product.imageUrl} /></Link>
          <div className="caption">
              <h3><Link to={`products/${product.id}`}>{product.title}</Link></h3>
              <p><a href="#" className="btn btn-primary" role="button">Add To Cart</a></p>
          </div>
      </div>
  </div>
);


export default ProductThumbnail;
