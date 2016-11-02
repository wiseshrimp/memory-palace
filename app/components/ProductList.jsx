import React from 'react';

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        fetch('api/products')
            .then(res => res.json())
            .then(products => this.setState({ products }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="row">
                {this.state.products.map(product => (
                    <div className="col-sm-6 col-md-3">
                        <div className="thumbnail" key={product.id}>
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
}