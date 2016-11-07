import React from 'react';
import { Link } from 'react-router';


export default class MiniCart extends React.Component {
    render() {
        let {products} = this.props.cart;

        return (
            <li className="dropdown">
                <Link to="/cart/1" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
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
                                                <span id="mini-cart-product-title">{product.title}</span>
                                                <span>${product.price}</span>
                                            </span>
                                        </span>
                                        <span className="item-right">
                                            <button className="btn btn-xs btn-danger pull-right">x</button>
                                        </span>
                                    </span>
                                </li> 
                            )
                        })
                            : (<span id="empty-mini-cart">Start adding memories to your cart!</span>)
                    }
                    <li className="divider"></li>
                    <li><Link className="text-center" to="cart/1">View Cart</Link></li>
                </ul>
            </li>
        )
    }
}