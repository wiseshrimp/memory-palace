import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { changeQuantityAsync } from '../actions/cart-actions';

function mapStateToProps(state) {
    return {
        cart: state.cart,
        loginUser: state.loginUser
    }
}

function mapDispatchToProps(dispatch){
  return {
    changeCartQuantity: function(details) {
    	dispatch(changeQuantityAsync(details))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
