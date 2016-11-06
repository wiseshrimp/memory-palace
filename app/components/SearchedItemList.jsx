import React from 'react';
import { Link } from 'react-router';

export default class SearchedItemList extends React.Component {
    render() {
        const {products, routeParams} = this.props;
        if (products.length !== 0) {
            return (
                <div className="row">
                  <h4>{products.length} results for {routeParams.term}</h4>
                    {products && products.map(product => (
                        <div key={product.id} className="col-sm-6 col-md-3">
                            <div className="thumbnail">
                                <Link to={`products/${product.id}`}><img src={ product.imageUrl} /></Link>
                                <div className="caption">
                                    <h3><Link to={`products/${product.id}`}>{product.title}</Link></h3>
                                    <p><a href="#" className="btn btn-primary" role="button">Add To Cart</a></p>
                                </div>
                            </div>
                        </div>
                        ))
                     }
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Nothing Found for {routeParams.term}</h1>
                </div>
            )
        }
    }
}
