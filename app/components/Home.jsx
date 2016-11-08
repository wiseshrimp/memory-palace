import React from 'react';
import ProductList from '../containers/ProductList';

export default class Home extends React.Component {
    render() {
      return (
          <div>
              <h3 className="main-header">MOST POPULAR</h3>
              <ProductList />
          </div>
      )
  }
}
