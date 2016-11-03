import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { receiveUserCart, loadCart } from '../actions/cart-actions';

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(
    mapStateToProps
)(Cart);