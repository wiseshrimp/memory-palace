import React from 'react';

export default class SearchedItemList extends React.Component {
    render() {
        console.log(this.props);
        if (this.props.products) {
            return (
                <div className="row">
                    {this.props.products.map(product => (
                        <div key={product.id} className="col-sm-6 col-md-3">
                            <div className="thumbnail">
                                <img src={ product.imageUrl} />
                                <div className="caption">
                                    <h3>{product.title}</h3>
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
                    <h1>NOTHING FOUND</h1>
                </div>
            )
        }
    }
}