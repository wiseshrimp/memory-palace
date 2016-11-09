import { connect } from 'react-redux';
import Product from '../components/Product';
import { addToCartAsync } from '../actions/product-actions';
import { changeQuantityAsync } from '../actions/cart-actions';

function mapStateToProps(state){
  return {
    product: state.product,
    loginUser: state.loginUser,
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart: function(details) {
    	event.preventDefault();
    	dispatch(addToCartAsync(details))
    },
    updateQuantity: function(details){
      event.preventDefault();
      dispatch(changeQuantityAsync(details))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
