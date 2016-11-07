import { connect } from 'react-redux';
import MiniCart from '../components/MiniCart';

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(
    mapStateToProps
)(MiniCart);