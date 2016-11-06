import React from 'react';

export default class ProductList extends React.Component {
    render() {

      const products = this.props.products.sort((a,b) => {
        if (a.count < b.count) {
          return 1;
        }
        if (a.count > b.count) {
          return -1;
        }
        return 0;
      });

      return (
          <div className="row">
              {products && products.map(product => (
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
}
