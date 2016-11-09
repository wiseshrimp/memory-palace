import React from 'react';
import ProductList from '../containers/ProductList';
import {Link} from 'react-router';

export default class ThankYou extends React.Component {
    render() {
      return (
      	<div>
	        <div className="jumbotron">
		      <div className="container">
		        <h1>Thank you for your order.</h1>
		        <p>We hope you enjoy your memories</p>
		      </div>
		    </div>
	        <div className="add-padding">
	             <p>Order Number: 8</p>
	             <p>Status: In Process</p>
	             <p></p>
	        </div>
	    </div>
      )
  }
}
