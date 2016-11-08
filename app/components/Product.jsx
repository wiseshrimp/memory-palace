import React from 'react';
import ReactStars from 'react-stars';

// TO DO: add user association to reviews so that name of reviewer can show up next to reviews
// add integration of averageRating

export default class Product extends React.Component {
  render() {
    // format for inline styling in React
    const productImage = {
        backgroundImage: 'url(/product-images/default.jpg)',
    }

    const { product } = this.props;

    // find and set average of product reviews once state has updated
    let averageRating = 0;
    if (product.reviews){
      for (var i = 0; i < product.reviews.length; i++){
        averageRating += product.reviews[i].rating
      }
      averageRating /= product.reviews.length;
      averageRating = (Math.round(averageRating * 2) / 2).toFixed(1);
    }

    if (product) {
      return (
        <div className="container-fluid">
            <div className="content-wrapper">
        		<div className="item-container">
        			<div className="container">
        				<div className="col-md-12">
        					<div className="product col-md-3 service-image-left pull-left" style={productImage}>
        					</div>

        				<div className="col-md-9 product-top-right">
        					<div className="product-title">{product.title}</div>
        					<div className="product-rating">
                  <ReactStars count={5} value={averageRating} edit={false} size={24} color2={'#ffd700'} /></div>
        					<hr />
        					<div className="product-price">${product.price}</div>
                  <div className="product-genre">{product.genre}</div>
        					<div className="product-stock">In Stock</div>
                  <div className="list-group list-group-horizontal">
                  {product.keywords && product.keywords.map(keywords => {
                      <a href="#" >{keywords}, </a>
                  })
                }
                  </div>
        					<hr />
        					<div className="btn-group cart">
        						<button type="button" className="btn btn-success">
        							Add to cart
        						</button>
        					</div>
                </div>
              </div>
        				</div>
        			</div>
        		<div className="container-fluid">
        			<div className="col-md-12 product-info">
        					<ul id="myTab" className="nav nav-tabs" role="tablist">
        						<li className="active"><a href="#service-one" data-toggle="tab">DESCRIPTION</a></li>
        						<li><a href="#service-three" data-toggle="tab">REVIEWS</a></li>
        					</ul>
        				<div id="myTabContent" className="tab-content">
        						<div className="tab-pane fade in active" id="service-one">
        							<section className="container product-info">
        								{product.description}
        							</section>
        						</div>
          					<div className="tab-pane fade" id="service-three">
                    <br />
                    {product.reviews && product.reviews.map(review =>
                      <div key={review.id}>Rating: {review.rating}
                      <p>"{review.text}"</p>
                      <p>- {review.user.name}</p>
                      <br /></div>
                    )}
          					</div>
        				</div>
        				<hr />
        			</div>
        		</div>
        	</div>
        </div>

      )
    } else {
      return (
        <div></div>
      )
    }
  }
}
