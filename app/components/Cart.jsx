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
        // let subtotal = products.reduce((pre,cur)=>pre+Number(cur.price));
        let subtotal = 0;

        products && products.forEach( e => {
          subtotal += Number(e.price) * Number(e.cart_product.quantity)
        });
        return (
          <div>
            <h1> Your Cart </h1>
            {products ? (<div className="container">
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
                      {products.map((product,i) => {

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
                                this.props.changeCartQuantity({products: products});
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
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h3>Subtotal</h3></td>
                        <td key="subtotal" className="text-right"><h3><strong>{CurrencyFormatter.format(subtotal, { code: 'USD' })}</strong></h3></td>
                      </tr>
                      <tr>
                        <td>   </td>
                        <td>   </td>

                        <td className="col-sm-1 col-md-1">


                        </td>
                        <td>
                          <Link to="/"><button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                          </button></Link>
                        </td>
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
            </div>):(<div>The Cart is Empty</div>)}
          </div>

        )
    }
}
