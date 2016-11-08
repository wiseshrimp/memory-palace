import React from 'react';
import StarRating from 'react-star-rating';


// TO DO: add user association to reviews so that name of reviewer can show up next to reviews
// add integration of averageRating

export default class Product extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      productId: null,
      user: null,
      showAdded: false
    };
    this.onQuantitySubmit = this.onQuantitySubmit.bind(this);
  }

  onQuantitySubmit(event) {
    event.preventDefault();
    this.props.addToCart(this.state);
    console.log("THIS DOT STATE", this.state)
  }


  render() {
    // format for inline styling in React
    const productImage = {
        backgroundImage: 'url(/product-images/default.jpg)',
    }
    const starRating = {
        width: '52%'
    }
    const { product, loginUser } = this.props;
    console.log("********PRODUCT & LOGIN USER*******", product, loginUser)

    // find and set average of product reviews once state has updated
    let averageRating = 0;
    if (product.reviews) {
        for (var i = 0; i < product.reviews.length; i++) {
            averageRating += product.reviews[i].rating
        }
        averageRating /= product.reviews.length;
    }

    if (product && loginUser) {
      return (
        <div className="container-fluid">
          <div className="content-wrapper">
            <div className="item-container">
              <div className="container">
                <div className="col-md-12">
                  <div className="product col-md-3 service-image-left pull-left" style={productImage}></div>

                  <div className="col-md-9 product-top-right">
                    <div className="product-title">{product.title}</div>
                    <div className="product-rating"><i className="fa fa-star gold"></i> <i className="fa fa-star gold"></i> <i className="fa fa-star gold"></i> <i className="fa fa-star gold"></i> <i className="fa fa-star-o"></i> </div>
                    <hr />
                    <div className="product-price">${product.price}</div>
                    <div className="product-genre">{product.genre}</div>
                    <div className="product-stock">In Stock</div>
                    <div className="list-group list-group-horizontal">
                      { product.keywords && product.keywords.map(keywords => {
                          <a href="#" >{keywords}, </a>
                          {/* <a href="#" >Keyword Two, </a>
                          <a href="#" >Keyword Three, </a>
                          <a href="#" >Keyword Four</a> */}
                        })
                      }
                    </div>
                    <hr />

                    <form onSubmit={this.onQuantitySubmit} className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div className="input-group cart">
                        <input placeholder="Qty" className="form-control" type="number" min="1" defaultValue="1" onChange={(event) => this.setState({quantity: Number(event.target.value)})}/>
                        <div className="input-group-btn">
                          <button type="submit" onClick={() => this.setState({showAdded: true, productId: product.id, user: loginUser.id})} className="btn btn-success">Add to cart</button>
                        </div>
                      </div>
                      <span className="added-to-cart-alert"> {this.state.showAdded ? "✔ Added to your cart!" : ""}</span>
                    </form>


                  </div>

                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="col-md-12 product-info">
                <ul id="myTab" className="nav nav-tabs" role="tablist">
                  <li className="active"><a href="#service-one" data-toggle="tab">DESCRIPTION HELLO</a></li>
                  <li><a href="#service-three" data-toggle="tab">REVIEWS</a></li>
                </ul>
                <div id="myTabContent" className="tab-content">
                  <div className="tab-pane fade in active" id="service-one">
                    <section className="container product-info">{product.description}</section>
                  </div>
                  <div className="tab-pane fade" id="service-three">
                    {product.reviews && product.reviews.map(review =>
                      <div key={review.id}>Rating: {review.rating}
                      <p>{review.text}</p></div>
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
