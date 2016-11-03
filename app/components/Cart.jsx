'use strict'

/*
    TO DO:
        1). Update quantity of products: Make helper function to loop through products and count duplicates
        2). Rendering more than one item --- Test?
*/


import React from 'react';

export default class Cart extends React.Component {
    render() {
        let {products} = this.props.cart;
        return (
            <div className="container">
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
                                {products && products.map(product => {
                                    return (
                                        <tr>
                                            <td className="col-sm-8 col-md-6">
                                                <div className="media">
                                                    <a className="thumbnail pull-left" href="#"> <img className="media-object" src={product.imageUrl} /> </a>
                                                    <div className="media-body">
                                                        <h4 className="media-heading"><a href="#">{product.title}</a></h4>
                                                        <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="col-sm-1 col-md-1">
                                                <input type="email" className="form-control" id="exampleInputEmail1" value="3" />
                                            </td>
                                            <td className="col-sm-1 col-md-1 text-center"><strong>{product.price}</strong></td>
                                            <td className="col-sm-1 col-md-1 text-center"><strong>{product.price * 3}</strong></td>
                                            <td className="col-sm-1 col-md-1">
                                                <button type="button" className="btn btn-danger">
                                                    <span className="glyphicon glyphicon-remove"></span> Remove
                                        </button></td>
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
                                        <td>   </td>
                                        <td>
                                        <button type="button" className="btn btn-default">
                                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                                        </button></td>
                                        <td>
                                        <button type="button" className="btn btn-success">
                                            Checkout <span className="glyphicon glyphicon-play"></span>
                                        </button></td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>    
            </div>

        )
    }
}