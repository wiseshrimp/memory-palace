import {Link} from 'react-router';
import CurrencyFormatter from 'currency-formatter';

/*
    TO DO:
        1). Update quantity of products: Make helper function to loop through products and count duplicates
        2). Rendering more than one item --- Test?
*/


import React from 'react';

export default class Cart extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.changeQuantitySubmit = this.changeQuantitySubmit.bind(this);
   }
  
  changeQuantitySubmit(event) {
      event.preventDefault();
      this.props.changeQuantity(this.state);
    }

    render() {
        let {products} = this.props.cart;
        return (
          <div>
            <h1> Your Cart </h1>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-10 col-md-offset-1">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th></th>
                        <th>Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Total</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>

                      {/* PRODUCT LOOP BEGINS HERE: */}
                      {products && products.map((product,i) => {

                          const productQuantity = product.cart_product.quantity;
                          const productPrice = CurrencyFormatter.format(product.price, { code: 'USD' });
                          const totalProduct = CurrencyFormatter.format((productQuantity*product.price), { code: 'USD' });

                        return (
                  
                          <tr key={product.id}>
                            <td className="col-sm-8 col-md-6">
                              <div className="media">
                                <Link to={`/products/${product.id}`} className="thumbnail pull-left product-icon"> <img className="media-object" src={product.imageUrl} /> </Link>
                                <div className="media-body">
                                  <h4 className="media-heading"><Link to={`/products/${product.id}`}>{product.title}</Link></h4>
                                  <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                </div>
                              </div>
                            </td>
                        
                            <td></td>
                            <td className="col-sm-1 col-md-1">

                                  <input type="number" className="form-control" name="quantity" id="quantity" min="0" defaultValue={productQuantity} onChange={(event) => {
                                    products[i].cart_product.quantity = Number(event.target.value);
                                    this.setState({products: products});
                                  }} />
                                

                            </td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>{productPrice}</strong></td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>{totalProduct}</strong></td>
                          </tr>

                        )
                      })
                      }

                      <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Subtotal</h5></td>
                        <td className="text-right"><h5><strong>$24.59</strong></h5></td>
                      </tr>
                      <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Estimated shipping</h5></td>
                        <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                      </tr>
                      <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h3>Total</h3></td>
                        <td className="text-right"><h3><strong>$31.53</strong></h3></td>
                      </tr>
                      <tr>
                        <td>   </td>
                        <td>   </td>
                    
                          <td className="col-sm-1 col-md-1">
                            
                                <button type="button" className="btn btn-info" onClick={this.changeQuantitySubmit}>
                                  Update
                                </button>
                            
                            </td>
                        <td>
                          <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                          </button></td>
                        <td>
                          <Link to="/checkout">
                            <button type="button" className="btn btn-success">
                            Checkout <span className="glyphicon glyphicon-play"></span>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        )
    }
}
