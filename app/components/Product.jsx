import React from 'react';

export default class Product extends React.Component {
  render() {
    // format for inline styling in React
    const productImage = {
        backgroundImage: 'url(/product-images/default.jpg)',
    }
    let { product } = this.props.product;
    console.log("PRODUCT", product, this.props.product)
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
        					<div className="product-price">Product Price</div>
                  <div className="product-genre">Product Genre</div>
        					<div className="product-stock">In Stock</div>
                  <div className="list-group list-group-horizontal">
                      <a href="#" >Keyword One, </a>
                      <a href="#" >Keyword Two, </a>
                      <a href="#" >Keyword Three, </a>
                      <a href="#" >Keyword Four</a>
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
        								The Corsair Gaming Series GS600 power supply is the ideal price-performance solution for building or upgrading a Gaming PC. A single +12V rail provides up to 48A of reliable, continuous power for multi-core gaming PCs with multiple graphics cards. The ultra-quiet, dual ball-bearing fan automatically adjusts its speed according to temperature, so it will never intrude on your music and games. Blue LEDs bathe the transparent fan blades in a cool glow. Not feeling blue? You can turn off the lighting with the press of a button.

        								<h3>Corsair Gaming Series GS600 Features:</h3>
        								<li>It supports the latest ATX12V v2.3 standard and is backward compatible with ATX12V 2.2 and ATX12V 2.01 systems</li>
        								<li>An ultra-quiet 140mm double ball-bearing fan delivers great airflow at an very low noise level by varying fan speed in response to temperature</li>
        								<li>80Plus certified to deliver 80% efficiency or higher at normal load conditions (20% to 100% load)</li>
        								<li>0.99 Active Power Factor Correction provides clean and reliable power</li>
        								<li>Universal AC input from 90~264V — no more hassle of flipping that tiny red switch to select the voltage input!</li>
        								<li>Extra long fully-sleeved cables support full tower chassis</li>
        								<li>A three year warranty and lifetime access to Corsair’s legendary technical support and customer service</li>
        								<li>Over Current/Voltage/Power Protection, Under Voltage Protection and Short Circuit Protection provide complete component safety</li>
        								<li>Dimensions: 150mm(W) x 86mm(H) x 160mm(L)</li>
        								<li>MTBF: 100,000 hours</li>
        								<li>Safety Approvals: UL, CUL, CE, CB, FCC className B, TÜV, CCC, C-tick</li>
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
