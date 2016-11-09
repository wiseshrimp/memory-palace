import React from 'react';
import { Link } from 'react-router';
import store from '../store';

export default class MiniCart extends React.Component {
    render() {
        let {products} = this.props.cart;
        let {loginUser} = this.props;

        return (
            <li className="dropdown">
                <Link to={`/cart/${loginUser.id}`} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                </Link>
                <ul className="dropdown-menu dropdown-cart" role="menu">
                    {
                        (products) ? products.map((product, i) => {
                            return (
                                <li key={i}>
                                    <span className="item">
                                        <span className="item-left">
                                            <img id="mini-cart-image" src={product.imageUrl} alt="" />
                                            <span className="item-info"> 
                                                <Link to={`products/${product.id}`}><span id="mini-cart-product-title">{product.title}</span></Link>
                                                <span>${product.price}</span>
                                            </span>
                                        </span>
                                        <span className="item-right">
                                            <button className="btn btn-xs btn-danger pull-right">Delete</button>
                                        </span>
                                    </span>
                                </li> 
                            )
                        })
                            : (<span id="empty-mini-cart">Start adding memories to your cart!</span>)
                    }
                    <li className="divider"></li>
                    <li><Link className="text-center" to={`/cart/${loginUser.id}`} >View Cart</Link></li>
                    <li><Link className="text-center" to="checkout">Checkout</Link></li>
                </ul>
            </li>
        )
    }
}