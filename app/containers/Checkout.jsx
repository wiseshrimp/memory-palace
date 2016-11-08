import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Checkout);