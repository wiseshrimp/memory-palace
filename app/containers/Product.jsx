import { connect } from 'react-redux';
import Product from '../components/Product';
import { addToCartAsync } from '../actions/product-actions';

function mapStateToProps(state){
  return {
    product: state.product
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart: function(details) {
    	event.preventDefault();
    	dispatch(addToCartAsync(details))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
