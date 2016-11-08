import React from 'react';
import ProductList from './ProductList';
import Moment from 'moment';
import {Link} from 'react-router';
import CurrencyFormatter from 'currency-formatter';

export default class OrderHistory extends React.Component {
    render() {
      const order = this.props.orderHistory

      if (order.length < 1) return <h2>No recent orders</h2>

        return (
          <div>
            <h1>Your Order History</h1>

            <div className="container">

              {order && order.map(order => {return (

                <div className="order-history-box" key={order.id}>
                  <div className="row order-history-heading">
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 col-md-offset-1">
                      <div><b>Order Number</b></div>
                      <div>{order.id}</div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-md-offset-1">
                      <div><b>Order Date</b></div>
                      <div>{Moment(order.orderDate).format('MMMM Do YYYY, h:mm a')}</div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-md-offset-1">
                      <div><b>Shipped To</b></div>
                      <p>
                        {order.shippingName}
                        <br/>{order.shippingLine1}
                        <br/>{order.shippingLine2}
                        <br/>{`${order.shippingCity}, ${order.shippingState} ${order.shippingZip}`}
                      </p>
                    </div>
                  </div>
                  <div className="row">


                    <div className="col-sm-12 col-md-10 col-md-offset-1">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Total</th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>

                          {/* PRODUCT LOOP BEGINS HERE: */}
                          {order.products.map(product => {
                            const productQuantity = product.order_product.quantity;
                            const productPrice = CurrencyFormatter.format(product.order_product.price, { code: 'USD' });
                            const totalProduct = CurrencyFormatter.format((productQuantity*product.order_product.price), { code: 'USD' });
                            return (
                              <tr key={product.id}>
                                <td className="col-sm-8 col-md-6">
                                  <div className="media">
                                    <Link to={`/products/${product.id}`} className="thumbnail pull-left product-icon"><img className="media-object" src={product.imageUrl} /></Link>
                                    <div className="media-body">
                                      <h4 className="media-heading"><Link to={`/products/${product.id}`}>{product.title}</Link></h4>
                                      <span>Product Id: </span><span>{product.id}</span>
                                      <br/>
                                      <span>Status: </span><span className="text-success"><strong>Delivered</strong></span>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-sm-1 col-md-1 text-center"><strong>{productQuantity}</strong></td>
                                <td className="col-sm-1 col-md-1 text-center"><strong>{productPrice}</strong></td>
                                <td className="col-sm-1 col-md-1 text-center"><strong>{totalProduct}</strong></td>
                                <td className="col-sm-1 col-md-1">
                                  <button type="button" className="btn btn-warning">
                                    <Link to={`/products/${product.id}`}><span className="glyphicon"></span>Write Review
                                                </Link></button></td>
                                                </tr>

                                        )})} {/* PRODUCT LOOP ENDS */}

                                            <tr>
                                                <td>   </td>
                                                <td>   </td>
                                                <td>   </td>
                                                <td><h5>Subtotal</h5></td>
                                                <td className="text-right"><h5><strong>{CurrencyFormatter.format(order.subTotal, {code: 'USD'})}</strong></h5></td>
                                            </tr>
                                              <tr>
                                                <td>   </td>
                                                <td>   </td>
                                                <td>   </td>
                                                <td><h5>Tax</h5></td>
                                                <td className="text-right"><h5><strong>{CurrencyFormatter.format(order.tax, {code: 'USD'})}</strong></h5></td>
                                            </tr>
                                            <tr>
                                                <td>   </td>
                                                <td>   </td>
                                                <td>   </td>
                                                <td><h5>Shipping</h5></td>
                                                <td className="text-right"><h5><strong>{CurrencyFormatter.format(order.shippingTotal, {code: 'USD'})}</strong></h5></td>
                                            </tr>
                                            <tr>
                                                <td>   </td>
                                                <td>   </td>
                                                <td>   </td>
                                                <td><h3>Total</h3></td>
                                                <td className="text-right"><h3><strong>{CurrencyFormatter.format(order.total, {code: 'USD'})}</strong></h3></td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                      </div>
                    )})}   {/* Repeat for each order */}
                </div>{/* /.container */}
          </div>
        )
    }
}
