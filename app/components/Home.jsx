import React from 'react';
import ProductList from '../containers/ProductList';
import {Link} from 'react-router'

export default class Home extends React.Component {
    render() {
      return (
      	<div>
	        <div className="jumbotron">
		      <div className="container">
		        <h1>Memories like you've never remembered...</h1>
		        <p></p>
		        <p><Link className="btn btn-primary btn-lg" to={`/genre/feel-good`} role="button">BROWSE FEEL-GOOD »</Link></p>
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
