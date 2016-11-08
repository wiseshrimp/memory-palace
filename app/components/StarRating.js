import React from 'react';
import { Link } from 'react-router';
import ReactStars from 'react-stars';

const genRating = (product) => {
  let averageRating = 0;
  if (product.reviews){
    for (var i = 0; i < product.reviews.length; i++){
      averageRating += product.reviews[i].rating
    }
    averageRating /= product.reviews.length;
    averageRating = (Math.round(averageRating * 2) / 2).toFixed(1);
  }
  return averageRating;
}

const StarRating = ({product}) => (
  <div className="product-rating">
    <ReactStars count={5} value={genRating(product)} edit={false} size={24} color2={'#ffd700'} />
  </div>
);


export default StarRating;
