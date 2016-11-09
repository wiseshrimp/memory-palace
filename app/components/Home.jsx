import React from 'react';
import ProductList from '../containers/ProductList';

export default class Home extends React.Component {
    render() {
      return (
      	<div>
	        <div className="jumbotron">
		      <div className="container">
		        <h1>Memories like you've never remembered...</h1>
		        <p></p>
		        <p><a class="btn btn-primary btn-lg" href="#" role="button">BROWSE MEMORIES »</a></p>
		      </div>
		    </div>
	        <div className="add-padding">
	              <h3 className="main-header">MOST POPULAR</h3>
	              <ProductList />
	        </div>
	    </div>
      )
  }
}
