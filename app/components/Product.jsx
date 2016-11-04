import React from 'react';

export default class Product extends React.Component {
  render() {
    // format for inline styling in React
    const productImage = {
        backgroundImage: 'url(/product-images/default.jpg)',
    }
    const { product } = this.props;
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
        					<div className="product-rating"><i className="fa fa-star gold"></i> <i className="fa fa-star gold"></i> <i className="fa fa-star gold"></i> <i className="fa fa-star gold"></i> <i className="fa fa-star-o"></i> </div>
        					<hr />
        					<div className="product-price">${product.price}</div>
                  <div className="product-genre">{product.genre}</div>
        					<div className="product-stock">In Stock</div>
                  <div className="list-group list-group-horizontal">
                  {product.keywords && product.keywords.map(product => {
                      <a href="#" >{product.keywords}, </a>
                      {/* <a href="#" >Keyword Two, </a>
                      <a href="#" >Keyword Three, </a>
                      <a href="#" >Keyword Four</a> */}
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
                        <p>THIS IS A REVIEW??</p>
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
